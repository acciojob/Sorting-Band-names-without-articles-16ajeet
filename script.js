document.addEventListener('DOMContentLoaded', () => {
    // Function to remove articles ('a', 'an', 'the') from the start of a string
    function strip(name) {
        return name.replace(/^(a |an |the )/i, '').trim();
    }

    // Array of band names
    let bandNames = ['The Rolling Stones', 'The Beatles', 'Queen', 'A Pink Floyd', 'U2', 'An Iron Maiden'];

    // Sort the band names lexicographically, excluding articles
    bandNames.sort((a, b) => strip(a).localeCompare(strip(b)));

    // Select the ul element (make sure it has the correct id in your HTML)
    const bandList = document.querySelector('#bands');

    // Clear any existing content in the ul element
    bandList.innerHTML = '';

    // Create and append li elements for each band name
    bandNames.forEach(band => {
        const listItem = document.createElement('li');
        listItem.textContent = band;
        bandList.appendChild(listItem);
    });
});