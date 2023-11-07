// Listen for page visit events using chrome.webNavigation.onCompleted
chrome.webNavigation.onCompleted.addListener(function(details) {
    // Check if the URL is valid
    if (details.url && isURLValid(details.url)) {
        // Save the URL in storage
        chrome.storage.sync.get({ savedUrls: [] }, function(data) {
            const savedUrls = data.savedUrls;
            savedUrls.push({ url: details.url, note: '' });

            // Update saved URLs in storage
            chrome.storage.sync.set({ savedUrls }, function() {
                console.log('URL saved:', details.url);
            });
        });
    }
});

// Function to check if a URL is valid (you can customize this validation)
function isURLValid(url) {
    // Example: Check if the URL starts with "http://" or "https://"
    return url.startsWith('http://') || url.startsWith('https://');
}
