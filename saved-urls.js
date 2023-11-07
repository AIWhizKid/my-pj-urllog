// Wait for the extension to be fully loaded and initialized
document.addEventListener("DOMContentLoaded", function () {
    const urlList = document.getElementById("url-list");

    // Check if chrome.storage.sync is available
    if (chrome.storage.sync) {
        // Retrieve saved URLs from storage
        chrome.storage.sync.get({ savedUrls: [] }, function (data) {
            const savedUrls = data.savedUrls;

            // Log the saved URLs to the browser console
            console.log(savedUrls);

            // Display saved URLs in the list
            savedUrls.forEach(function (item) {
                const listItem = document.createElement("li");
                listItem.textContent = item.url;
                urlList.appendChild(listItem);
            });
        });
    } else {
        console.log("chrome.storage.sync is not available");
    }
});
