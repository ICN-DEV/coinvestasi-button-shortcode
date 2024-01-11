document.addEventListener("DOMContentLoaded", function() {
    // Get parameters from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const labelCopy = urlParams.get('labelCopy') || "Default Label";
    const url = urlParams.get('url') || "#";
    const bannerCopy = urlParams.get('bannerCopy') || "Default Banner Copy";

    // Create a container div
    const container = document.createElement('div');
    container.style.width = '100%';
    container.style.backgroundColor = '#3498db';
    container.style.textAlign = 'center';
    container.style.padding = '20px';
    container.style.color = '#ffffff';

    // Create HTML content
    container.innerHTML = `
        <p style="font-size: 18px; line-height: 24px; margin-bottom: 10px;">${bannerCopy}</p>
        <a href="${url}" style="display: inline-block; background-color: #ffffff; color: #3498db; padding: 10px 20px; text-decoration: none; font-size: 16px; font-weight: bold; border-radius: 5px;">${labelCopy}</a>
    `;

    // Append the container to the body
    document.body.appendChild(container);
});
