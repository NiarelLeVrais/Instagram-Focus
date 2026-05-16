function getFeed() {
    let feed = (
        document.querySelector('[role="feed"]') ||
        document.querySelector('main article') ||
        document.querySelector('main > div > div') // fallback structurel
    );
    if (feed) {
        for (let i = 0; i < 4; i++) {
            feed = feed.parentElement;
        }
        return feed;
    }
}

function getFolow() {
    let folow = document.querySelector('a[href="https://about.instagram.com/"]');
    if (folow) {
        for (let i = 0; i < 5; i++) {
            folow = folow.parentElement;
        }
        return folow;
    }
}

function getReels() {
    let reels = document.querySelector('a[href="/reels/"]');
    for (let i = 0; i < 3; i++) {
        reels = reels.parentElement;
    }
    return reels;
}

function getDiscover() {
    let discover = document.querySelector('a[href="/explore/"]');
    for (let i = 0; i < 3; i++) {
        discover = discover.parentElement;
    }
    return discover;
}

function hide(element) {
    if (element) {
        element.style.display = 'none';
    }
}

function hideall() {
    hide(getFeed());
    hide(getFolow());
    hide(getReels());
    hide(getDiscover());
}

hideall();

const observer = new MutationObserver(() => hideall());
observer.observe(document.body, { childList: true, subtree: true });