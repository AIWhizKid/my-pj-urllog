document.getElementById('save').addEventListener('click', () => {
    const url = document.getElementById('url').value;
    const note = document.getElementById('note').value;
  
    chrome.storage.sync.get({ savedUrls: [] }, (data) => {
      const savedUrls = data.savedUrls;
      savedUrls.push({ url, note });
  
      chrome.storage.sync.set({ savedUrls }, () => {
        document.getElementById('status').textContent = 'URL saved!';
      });
    });
  });
  