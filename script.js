document.getElementById('fetchDataButton').addEventListener('click', fetchData);

function fetchData() {
    fetch('http://localhost:3000/data')
    
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const escapedHTML = DOMPurify.sanitize(JSON.stringify(data, null, 2));
            document.getElementById('dataOutput').innerHTML = `<pre>${escapedHTML}</pre>`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('dataOutput').innerHTML = 'Error fetching data. Check console for details.';
        });
}
