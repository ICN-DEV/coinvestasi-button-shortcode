document.addEventListener("DOMContentLoaded", function() {
    // Get parameters from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const labelCopy = urlParams.get('labelCopy') || "Default Label";
    const url = urlParams.get('url') || "#";
    const bannerCopy = urlParams.get('bannerCopy') || "Default Banner Copy";

    // Create HTML elements
    const container = document.createElement('div');
    container.style.width = '100%';
    container.style.backgroundColor = '#3498db';
    container.style.textAlign = 'center';
    container.style.padding = '20px';
    container.style.color = '#ffffff';

    const paragraph = document.createElement('p');
    paragraph.style.fontSize = '18px';
    paragraph.style.lineHeight = '24px';
    paragraph.style.marginBottom = '10px';
    paragraph.innerHTML = bannerCopy;

    const link = document.createElement('a');
    link.href = url;
    link.style.display = 'inline-block';
    link.style.backgroundColor = '#ffffff';
    link.style.color = '#3498db';
    link.style.padding = '10px 20px';
    link.style.textDecoration = 'none';
    link.style.fontSize = '16px';
    link.style.fontWeight = 'bold';
    link.style.borderRadius = '5px';
    link.innerHTML = labelCopy;

    // Append elements to the document
    container.appendChild(paragraph);
    container.appendChild(link);
    document.body.appendChild(container);
});
