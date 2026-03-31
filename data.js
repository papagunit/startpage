const bookmarksData = [
  {
    category: "Productivity",
    links: [
      { name: "Tasks", url: "https://mail.google.com/tasks/desktop?pli=1" },
      { name: "Calendar", url: "http://calendar.google.com" },
      { name: "Chains.cc", url: "https://chains.cc/" },
      { name: "Penzu", url: "https://penzu.com/entries" },
      { name: "Focus", url: "http://coffitivity.com/" },
      { name: "Pomodoro Egg Timer", url: "http://e.ggtimer.com/pomodoro" },
      { name: "When to sleep", url: "http://sleepyti.me/" }
    ]
  },
  {
    category: "Daily Knowledge",
    links: [
      { name: "Homepage", url: "http://fuckinghomepage.com" },
      { name: "Word Dynamo", url: "http://dynamo.dictionary.com/" },
      { name: "DailyWritingTips", url: "http://www.dailywritingtips.com" },
      { name: "Dating", url: "http://www.thedatingspecialist.com/dating-101/" },
      { name: "HBR", url: "http://hbr.org" },
      { name: "Forbes", url: "http://www.forbes.com/home_usa/" },
      { name: "Primer Magazine", url: "http://primermagazine.com" },
      { name: "Instead of TV...", url: "http://unplugthetv.com/" },
      { name: "Weather", url: "http://thefuckingweather.com" },
      { name: "Learn french", url: "http://memrise.com" },
      { name: "My English Grammar", url: "http://www.myenglishgrammar.com/" },
      { name: "Learn Anything", url: "http://noexcuselist.com/" },
      { name: "Grammar 101", url: "http://www.dailywritingtips.com/english-grammar-101-all-you-need-to-know/" },
      { name: "Business", url: "https://www.facebook.com/lists/653256101362121" }
    ]
  },
  {
    category: "Main",
    links: [
      { name: "Budget", url: "http://1drv.ms/1fkzqNQ" },
      { name: "FB", url: "http://facebook.com" },
      { name: "Gmail", url: "http://mail.google.com" },
      { name: "Plus", url: "http://plus.google.com" },
      { name: "Calpoly", url: "http://my.calpoly.edu" },
      { name: "Voice", url: "http://voice.google.com" },
      { name: "Pingfm", url: "http://ping.fm" },
      { name: "Twitter", url: "http://twitter.com" },
      { name: "Youtube", url: "http://youtube.com" },
      { name: "Group.me", url: "http://group.me" },
      { name: "Ebay quick", url: "http://countdown.ebay.com/countdown/start.jsp" },
      { name: "Torrific", url: "http://torrific.com/home/" },
      { name: "Mitto", url: "http://mitto.com" },
      { name: "Rdio", url: "http://www.rdio.com/#/people/PapaG/" },
      { name: "Very Demotivational", url: "http://verydemotivational.memebase.com/" },
      { name: "Audiotool", url: "http://www.audiotool.com/app" },
      { name: "Netflix", url: "http://movies.netflix.com/WiHome" },
      { name: "Pandora", url: "http://www.pandora.com" },
      { name: "SwagSearch", url: "http://search.swagbucks.com/" },
      { name: "Typing", url: "http://www.typingweb.com/tutor/courses/" },
      { name: "10 Fast Fingers", url: "http://speedtest.10fastfingers.com/" },
      { name: "Textbroker", url: "http://www.textbroker.com" },
      { name: "750 words", url: "https://750words.com/" },
      { name: "John Spence", url: "http://johnspence.com/" },
      { name: "Neighbfav", url: "http://neighbfav.com" },
      { name: "Proaudiofiles", url: "http://theproaudiofiles.com/" },
      { name: "Watchlist", url: "http://www.tvguide.com/watchlist" },
      { name: "Streaming Radio", url: "http://tunein.com/favorites/" },
      { name: "TripIt", url: "https://www.tripit.com/home" },
      { name: "TripIt Mobile", url: "https://m.tripit.com/" },
      { name: "Klout", url: "http://klout.com" },
      { name: "TrustCloud", url: "http://trustcloud.com" },
      { name: "About.me", url: "http://about.me/devonguerrero" },
      { name: "Xeeme", url: "http://xeeme.com/" },
      { name: "Google Keep", url: "https://drive.google.com/keep/u/0/" },
      { name: "PGE", url: "https://www.pge.com/eum/login" },
      { name: "Free Bibles", url: "http://biblesforamerica.org/free-bible-and-christian-books/" },
      { name: "Data Coup", url: "https://datacoup.com/accounts" },
      { name: "Whatsapp", url: "https://web.whatsapp.com/" }
    ]
  },
  {
    category: "School",
    links: [
      { name: "Map", url: "http://maps.calpoly.edu/flashmap/CalPolyMap.html" },
      { name: "Writing Lab Center", url: "http://calpoly.mywconline.com/" },
      { name: "Dining", url: "https://services.jsatech.com/login.php?skey=d148fd3c7e8cee02b8604f1973d08578&cid=79&fullscreen=1&wason=" },
      { name: "Reddit", url: "http://www.reddit.com/r/calpoly" },
      { name: "Dictionary", url: "http://dictionary.reference.com/" },
      { name: "PSY Sum98 - Chuck", url: "http://cla.calpoly.edu/course/psy202/" },
      { name: "Thesaurus", url: "http://thesaurus.com/" },
      { name: "Free online books", url: "http://flatworldknowledge.com" },
      { name: "BioPortal", url: "http://courses.bfwpub.com/yourbioportal/" },
      { name: "Managerial Acc", url: "http://connect.mcgraw-hill.com/connectweb/static_pages/signin/signin/index.html" },
      { name: "Eng 231", url: "http://cla.calpoly.edu/~pmarchba/231_DYSTOPIA_LL/calendar_path1.html" },
      { name: "Meterology", url: "http://wps.prenhall.com/esm_lutgens_atmosphere_11/105/27047/6924212.cw/index.html" },
      { name: "Econ Portal", url: "http://courses.bfwpub.com/youreconportal/" },
      { name: "NinjaWords", url: "http://ninjawords.com/" },
      { name: "Quizzify", url: "http://quizzify.net/" },
      { name: "MU 324", url: "http://cla.calpoly.edu/~amclamor/324Theater/index.html" },
      { name: "Marketing", url: "http://connect.mcgraw-hill.com/connect/hmStudentSectionHomePortal.do?sectionId=16646828" }
    ]
  },
  {
    category: "Papers",
    links: [
      { name: "Paper rater", url: "http://paperrater.com" },
      { name: "Ottobib", url: "http://ottobib.com" },
      { name: "Bibme", url: "http://bibme.org" },
      { name: "Easybib", url: "http://easybib.com" },
      { name: "Grammarbase", url: "http://www.grammarbase.com/" },
      { name: "Grammarly", url: "http://www.grammarly.com/" }
    ]
  },
  {
    category: "Record Pools",
    links: [
      { name: "Worksessions jealous", url: "http://www.worksessions.com/" },
      { name: "Digiwaxx", url: "http://www.digiwaxx.com" }
    ]
  },
  {
    category: "Create",
    links: [
      { name: "Infogram", url: "http://infogr.am/" }
    ]
  },
  {
    category: "Chords",
    links: [
      { name: "More visual", url: "http://chords.pianocharts.net/" },
      { name: "More comprehensive", url: "http://www.pianoworld.com/fun/vpc/piano_chords.htm" },
      { name: "Another comprehensive", url: "http://www.onlinepianist.com/chords/" },
      { name: "Just text", url: "http://www.piano-lessons-info.com/chart-of-piano-chords.html" }
    ]
  },
  {
    category: "Cloud",
    links: [
      { name: "Dropbox", url: "https://www.dropbox.com/" },
      { name: "Docs", url: "http://docs.google.com" },
      { name: "Pogoplug", url: "https://pogoplug.com/" },
      { name: "Beta joli", url: "http://beta.jolicloud.com/" },
      { name: "My Joli", url: "http://my.jolicloud.com/#!/dashboard" },
      { name: "Skydrive", url: "https://skydrive.live.com/" },
      { name: "idrivesync", url: "http://www.idrivesync.com/" },
      { name: "Gladinet", url: "http://www.gladinet.com/" },
      { name: "Sugarsync", url: "https://www.sugarsync.com/" },
      { name: "Picasa", url: "https://picasaweb.google.com/home" },
      { name: "Google Drive", url: "https://drive.google.com/" },
      { name: "All My Apps", url: "http://allmyapps.com/" },
      { name: "Amazon drive", url: "http://www.amazon.com/gp/feature.html/ref=sa_menu_acd_dsktopapp2?ie=UTF8&docId=1000796781" },
      { name: "Mover", url: "https://app.mover.io/" },
      { name: "Copy", url: "http://copy.com" },
      { name: "CloudKafe", url: "https://www.cloudkafe.com/" },
      { name: "IFTTT", url: "https://ifttt.com/dashboard" }
    ]
  },
  {
    category: "Courses",
    links: [
      { name: "Business", url: "http://catalog.calpoly.edu/coursesaz/bus/" },
      { name: "Schedules", url: "http://schedules.calpoly.edu/" },
      { name: "Economics", url: "http://catalog.calpoly.edu/coursesaz/econ/" },
      { name: "BA", url: "http://catalog.calpoly.edu/collegesandprograms/orfaleacollegeofbusiness/bsbusinessadministration/" }
    ]
  },
  {
    category: "News",
    links: [
      { name: "CBS EN", url: "http://www.cbsnews.com/evening-news/full-episodes/" },
      { name: "60 Min", url: "http://www.cbsnews.com/60-minutes/full-episodes/" },
      { name: "FTN", url: "http://www.cbsnews.com/face-the-nation/full-episodes/" },
      { name: "ALJ", url: "http://america.aljazeera.com/" },
      { name: "Business Interests", url: "https://www.facebook.com/lists/653256101362121" },
      { name: "ALJ Videos", url: "http://america.aljazeera.com/watch.html" },
      { name: "Real Money", url: "http://america.aljazeera.com/watch/shows/real-money-with-alivelshi.html" },
      { name: "CNBC Live", url: "https://tv.youtube.com/watch/iBr_CgGo_j0" },
      { name: "Current Events", url: "http://en.wikipedia.org/wiki/Portal:Current_events" },
      { name: "List of ongoing armed conflicts", url: "http://en.wikipedia.org/wiki/List_of_ongoing_military_conflicts" },
      { name: "Bloomberg Live", url: "http://www.bloomberg.com/tv/" }
    ]
  },
  {
    category: "People and Countries",
    links: [
      { name: "List of current heads of state and government", url: "http://en.wikipedia.org/wiki/List_of_current_heads_of_state_and_government" },
      { name: "Most Powerful People", url: "http://www.forbes.com/powerful-people/list/" },
      { name: "Richest In America", url: "http://www.forbes.com/forbes-400/" },
      { name: "Billionaires", url: "http://www.forbes.com/billionaires/" },
      { name: "List of sovereign states", url: "http://en.wikipedia.org/wiki/List_of_sovereign_states" },
      { name: "Dependent Territory", url: "http://en.wikipedia.org/wiki/Dependent_territory" },
      { name: "List of former European colonies", url: "http://en.wikipedia.org/wiki/List_of_former_European_colonies" },
      { name: "Former British Colonies", url: "http://en.wikipedia.org/wiki/Category:Former_British_colonies" },
      { name: "List of countries and dependencies and their capitals in native languages", url: "http://en.wikipedia.org/wiki/List_of_countries_and_capitals_in_native_languages" },
      { name: "List of territorial disputes", url: "http://en.wikipedia.org/wiki/List_of_territorial_disputes" },
      { name: "List of states with limited recognition", url: "http://en.wikipedia.org/wiki/List_of_states_with_limited_recognition" },
      { name: "Ongoing Conflicts", url: "http://en.wikipedia.org/wiki/List_of_ongoing_armed_conflicts" },
      { name: "List of coups d'état and coup attempts by country", url: "http://en.wikipedia.org/wiki/List_of_coups_d%27%C3%A9tat_and_coup_attempts_by_country" },
      { name: "List of national anthems", url: "http://en.wikipedia.org/wiki/List_of_national_anthems" }
    ]
  },
  {
    category: "Trackers",
    links: [
      { name: "Marine Traffic", url: "https://www.marinetraffic.com/en/" },
      { name: "FleetMon", url: "http://www.fleetmon.com/en/" }
    ]
  },
  {
    category: "Online IDE",
    links: [
      { name: "HTML/CSS/JS liveweave", url: "http://liveweave.com/" },
      { name: "Compile Online", url: "http://www.compileonline.com/" },
      { name: "Kobra.io", url: "https://kobra.io" },
      { name: "Koding", url: "https://koding.com" },
      { name: "SQL Fiddle", url: "http://sqlfiddle.com/" },
      { name: "Stypi", url: "http://stypi.com" },
      { name: "SAS", url: "http://odamid.oda.sas.com/SASODAControlCenter" },
      { name: "Source Lair", url: "https://www.sourcelair.com/login" },
      { name: "Visual Studio online", url: "https://papag.visualstudio.com/" },
      { name: "R Fiddle", url: "http://www.r-fiddle.org/" },
      { name: "Cloud 9", url: "https://c9.io/" }
    ]
  },
  {
    category: "Desktop Anywhere",
    links: [
      { name: "Chrome Remote", url: "https://chrome.google.com/webstore/detail/chrome-remote-desktop/gbchcmhmhahfdphkhkmpfmihenigjmpp?hl=en" }
    ]
  },
  {
    category: "Rideshare",
    links: [
      { name: "OC to SD", url: "https://www.facebook.com/groups/OCtoSDRides/" },
      { name: "UCLA to SD", url: "https://www.facebook.com/groups/106160250037938/" },
      { name: "UCSD SDSU", url: "https://www.facebook.com/groups/292560520884773/" },
      { name: "UCI UCLA", url: "https://www.facebook.com/groups/1484068941875122/" },
      { name: "UCI", url: "https://www.facebook.com/groups/504082349693694/?ref=br_rs" },
      { name: "CP", url: "https://www.facebook.com/groups/250502971675365" },
      { name: "SD County", url: "https://www.facebook.com/groups/125059401478427/" },
      { name: "UCSB Socal", url: "https://www.facebook.com/groups/515389968568988/" },
      { name: "CP UCLA", url: "https://www.facebook.com/groups/1733631373442511/" }
    ]
  }
];

window.bookmarksData = bookmarksData;
