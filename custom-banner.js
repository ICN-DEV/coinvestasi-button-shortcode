document.addEventListener("DOMContentLoaded", function() {
    // Get parameters from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const labelCopy = urlParams.get('labelCopy') || "Default Label";
    const url = urlParams.get('url') || "#";
    const bannerCopy = urlParams.get('bannerCopy') || "Default Banner Copy";

    // Update HTML content with parameters
    document.getElementById("banner-copy").innerHTML = bannerCopy;
    document.getElementById("banner-button").innerHTML = labelCopy;
    document.getElementById("banner-button").href = url;
});
