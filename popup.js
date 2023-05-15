document.addEventListener("DOMContentLoaded", function() {
  var button = document.getElementById("myButton");
  button.addEventListener("click", function() {
    // Get the current page URL using chrome.tabs API
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      // Get the URL of the first tab in the result
      var tab = tabs[0];
      // Use chrome.tabs.get to get the URL
      chrome.tabs.get(tab.id, function (tab) {
        var url = tab.url;
        // Execute the callback with the retrieved URL
        sendUrlToBackend(url);
      });
    });
  });
});

function sendUrlToBackend(url) {
  // Perform an HTTP request or use any other method to send the URL to your backend
  // Here's an example using the Fetch API
  fetch(webhookUrl, {
    method: "POST",
    body: JSON.stringify({ url: url , hello: "hello"}),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(function(response) {
    if (response.ok) {
      // URL successfully sent to the backend
      console.log("URL sent to the backend");
    } else {
      // An error occurred while sending the URL to the backend
      console.error("Error sending URL to the backend");
    }
  })
  .catch(function(error) {
    console.error("Error sending URL to the backend", error);
  });
}
