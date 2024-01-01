document.addEventListener('DOMContentLoaded', () => {
    // Function to remove articles from the beginning of a band name
    function strip(bandName) {
        return bandName.replace(/^(a |an |the )/i, '').trim();
    }

    // Given array of band names
    let bandNames = ['The Rolling Stones', 'The Beatles', 'Queen', 'A Pink Floyd', 'U2', 'An Iron Maiden'];

    // Sort the band names lexicographically, excluding articles
    bandNames.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

    // Select the ul element with id 'band'
    const bandList = document.querySelector('#band');

    // Create li elements for each sorted band name and append to the ul
    bandNames.forEach(band => {
        const li = document.createElement('li');
        li.textContent = band;
        bandList.appendChild(li);
    });
});

