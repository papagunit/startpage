# Ultra-Premium Startpage

An ultra-fluid, modern, and dark-themed homepage meant to be statically hosted (e.g., GitHub Pages). Built as a next-generation replacement for older bookmarking startpages (like start.io), this dashboard seamlessly organizes your links with gorgeous aesthetics, real-time search, and asynchronous network tracking.

## 🚀 Features

* **Ultra-Premium Design:**
  * Uses a dynamic, floating ambient mesh background (`radial-gradient` filter blurs).
  * A glow aura tracking the user's cursor (`div.cursor-glow` in `index.html` mapping to `e.clientX/Y` via `script.js`).
  * Glassmorphism cards with interactive spotlight borders that follow mouse hover events.
* **Asynchronous Link Status:** 
  * Verifies if each link is still valid in the background on load.
  * Bypasses client-side Browser Network policies using a CORS proxy (`corsproxy.io`). A queued `fetch` system checks links sequentially to prevent rate limits and UI locks.
* **Real-time Fuzzy Search:** 
  * Instantly filters bookmarks matching either the text name or the target URL natively via JavaScript.

## 🛠️ Architecture & Future Context (For AI & Devs)

The project deliberately utilizes **zero** build steps (Vanilla HTML, JS, CSS) to ensure it can be hosted natively on GitHub pages without any Actions or CI/CD pipelines. 

To maintain this simplicity in the future, adhere to the following architecture rules:

1. **State Management (`data.js`):**
   * Do not hardcode HTML `<li>` elements! All links are stored as a JSON array attached to `window.bookmarksData` in `data.js`. 
   * To add or modify a category or link, strictly edit the structure in `data.js`.
2. **Styling Engine (`style.css`):**
   * Uses CSS variables heavily. To change the brand colors (cyan, purple) or the glow intensity, update the `:root` variables.
   * Modifying the "spotlight" radius effect on cards is done in the `.card-spotlight` class.
3. **JS Logic (`script.js`):**
   * Holds the queue mechanism (`linkCheckQueue`) limiting how many CORS proxy requests are executed per second (`chunk.splice(0, 3)`). 
   * Extracts favicons dynamically using the free `google.com/s2/favicons` service.

## ⚙️ Running Locally

Because we utilize the `fetch` API and JS Modules to import data, running the raw `index.html` file from `file://` might throw some subtle local restrictions depending on the browser. 
It is recommended to run a static local server for testing:

```bash
python -m http.server 3000
```
Then navigate to `http://localhost:3000/`.
