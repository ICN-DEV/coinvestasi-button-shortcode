document.addEventListener("DOMContentLoaded", function() {
    // Get parameters from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const labelCopy = urlParams.get('labelCopy') || "Default Label";
    const url = urlParams.get('url') || "#";
    const bannerCopy = urlParams.get('bannerCopy') || "Default Banner Copy";

    // Create banner elements
    const bannerContainer = document.createElement('div');
    bannerContainer.style.width = '100%';
    bannerContainer.style.backgroundColor = '#3498db';
    bannerContainer.style.textAlign = 'center';
    bannerContainer.style.padding = '20px';
    bannerContainer.style.color = '#ffffff';

    const bannerParagraph = document.createElement('p');
    bannerParagraph.style.fontSize = '18px';
    bannerParagraph.style.lineHeight = '24px';
    bannerParagraph.style.marginBottom = '10px';
    bannerParagraph.textContent = bannerCopy;

    const linkElement = document.createElement('a');
    linkElement.href = url;
    linkElement.style.display = 'inline-block';
    linkElement.style.backgroundColor = '#ffffff';
    linkElement.style.color = '#3498db';
    linkElement.style.padding = '10px 20px';
    linkElement.style.textDecoration = 'none';
    linkElement.style.fontSize = '16px';
    linkElement.style.fontWeight = 'bold';
    linkElement.style.borderRadius = '5px';
    linkElement.textContent = labelCopy;

    // Append elements to the container
    bannerContainer.appendChild(bannerParagraph);
    bannerContainer.appendChild(linkElement);

    // Append the container to the body
    document.body.appendChild(bannerContainer);
});
