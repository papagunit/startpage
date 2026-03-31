document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('bookmark-container');
    const searchInput = document.getElementById('search-input');
    const statusSummary = document.getElementById('status-summary');
    const cursorGlow = document.getElementById('cursor-glow');
    
    // Use data from window object
    const categories = window.bookmarksData || [];

    let totalLinks = 0;
    let checkedLinks = 0;
    let validLinks = 0;
    let invalidLinks = 0;

    const linkCheckQueue = [];

    // Icons
    const ICON_SUCCESS = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
    const ICON_ERROR = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;

    const getHostname = (url) => {
        try { return new URL(url).hostname; } catch { return ""; }
    };

    // 1. Render Categories and Links
    const render = () => {
        container.innerHTML = '';
        if (categories.length === 0) return;

        categories.forEach((cat, index) => {
            const card = document.createElement('div');
            card.className = 'category-card';

            const spotlight = document.createElement('div');
            spotlight.className = 'card-spotlight';
            
            const cardInner = document.createElement('div');
            cardInner.className = 'card-inner';

            const title = document.createElement('h2');
            title.className = 'category-title';
            title.textContent = cat.category;
            cardInner.appendChild(title);

            const list = document.createElement('ul');
            list.className = 'links-list';

            cat.links.forEach((linkObj, linkIdx) => {
                totalLinks++;
                const li = document.createElement('li');
                
                const a = document.createElement('a');
                a.className = 'link-item';
                a.href = linkObj.url;
                a.target = '_blank';
                a.rel = 'noopener noreferrer';
                a.dataset.name = linkObj.name.toLowerCase();
                a.dataset.url = linkObj.url.toLowerCase();

                const contentDiv = document.createElement('div');
                contentDiv.className = 'link-content';

                const img = document.createElement('img');
                img.className = 'favicon';
                img.src = `https://www.google.com/s2/favicons?domain=${getHostname(linkObj.url)}&sz=64`;
                img.alt = '';
                img.onerror = () => { img.style.display = 'none'; }; 

                const span = document.createElement('span');
                span.className = 'link-name';
                span.textContent = linkObj.name;

                contentDiv.appendChild(img);
                contentDiv.appendChild(span);

                const statusDiv = document.createElement('div');
                statusDiv.className = 'status-indicator';
                const statusId = `status-${index}-${linkIdx}`;
                statusDiv.id = statusId;
                statusDiv.innerHTML = '<div class="status-loading"></div>';

                a.appendChild(contentDiv);
                a.appendChild(statusDiv);
                li.appendChild(a);
                list.appendChild(li);

                linkCheckQueue.push({ url: linkObj.url, id: statusId });
            });

            cardInner.appendChild(list);
            card.appendChild(spotlight);
            card.appendChild(cardInner);
            container.appendChild(card);

            // Add Mousemove listener for spotlight effect
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                spotlight.style.setProperty('--mouse-x', `${x}px`);
                spotlight.style.setProperty('--mouse-y', `${y}px`);
            });
        });
        
        updateStatusSummary();
    };

    // 2. Real-time Search functionality
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        const cards = container.querySelectorAll('.category-card');
        let anyVisible = false;

        cards.forEach(card => {
            const links = card.querySelectorAll('.link-item');
            let hasVisibleLink = false;

            links.forEach(link => {
                const name = link.dataset.name;
                const url = link.dataset.url;
                const li = link.parentElement;

                if (name.includes(query) || url.includes(query)) {
                    li.style.display = 'block';
                    hasVisibleLink = true;
                } else {
                    li.style.display = 'none';
                }
            });

            if (hasVisibleLink) {
                card.style.display = 'block';
                anyVisible = true;
            } else {
                card.style.display = 'none';
            }
        });

        const existingNoResults = container.querySelector('.no-results');
        if (!anyVisible) {
            if (!existingNoResults) {
                const msg = document.createElement('div');
                msg.className = 'no-results';
                msg.textContent = 'No signals found for that transmission.';
                container.appendChild(msg);
            }
        } else if (existingNoResults) {
            existingNoResults.remove();
        }
    });

    // 3. Ambient Cursor Tracking Logic
    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.opacity = '1';
        // Using translation for better performance
        cursorGlow.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;
    });

    document.addEventListener('mouseleave', () => {
        cursorGlow.style.opacity = '0';
    });

    // 4. Background Async Link Checker
    const updateStatusSummary = () => {
        if (checkedLinks < totalLinks) {
            statusSummary.textContent = `Establishing links... (${checkedLinks}/${totalLinks})`;
        } else {
            statusSummary.textContent = `Network Stable: ${validLinks} Active // ${invalidLinks} Down`;
        }
    };

    const processLinkQueue = async () => {
        if (linkCheckQueue.length === 0) return;

        // Take 3 links at a time to be fast but safe
        const chunk = linkCheckQueue.splice(0, 3);

        await Promise.all(chunk.map(async (item) => {
            const statusDiv = document.getElementById(item.id);
            if (!statusDiv) return;

            try {
                const response = await fetch(`https://corsproxy.io/?${encodeURIComponent(item.url)}`, { method: 'GET' });
                if (response.ok) {
                    statusDiv.innerHTML = `<span class="status-valid">${ICON_SUCCESS}</span>`;
                    validLinks++;
                } else {
                    statusDiv.innerHTML = `<span class="status-invalid">${ICON_ERROR}</span>`;
                    invalidLinks++;
                }
            } catch (err) {
                statusDiv.innerHTML = `<span class="status-invalid">${ICON_ERROR}</span>`;
                invalidLinks++;
            }
            
            checkedLinks++;
        }));

        updateStatusSummary();
        setTimeout(processLinkQueue, 1000); 
    };

    render();
    setTimeout(processLinkQueue, 1500);
});
