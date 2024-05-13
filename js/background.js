chrome.webRequest.onHeadersReceived.addListener(function(details) { 
    if(details.responseHeaders.find(el => el.name == "Content-Type").value.includes("mp3"))
        return {redirectUrl: 'https://raw.githubusercontent.com/texnikru/blank-mp3s/master/1sec.mp3'};
}, { urls: ["*://*.audio-ak-spotify-com.akamaized.net/*", "*://*.audio-akp-quic-spotify-com.akamaized.net/*", "*://*.audio-fa.scdn.co/*", "*://creativeservice-production.scdn.co/*"]}, ["blocking","responseHeaders"])
