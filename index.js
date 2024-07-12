function openJobSearch() {
    window.open("https://www.google.com/search?q=job+search", "_blank");
}

function uploadResume() {
    const form = document.getElementById('resume-form');
    const formData = new FormData(form);

    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Resume uploaded successfully!');
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

document.getElementById('job-search-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const category = event.target.category.value;
    const location = event.target.location.value;
    
    if (category && location) {
        const googleSearchUrl = `https://www.google.com/search?q=${category}+jobs+in+${location}`;
        const linkedinSearchUrl = `https://www.linkedin.com/jobs/search/?keywords=${category}&location=${location}`;

        window.open(googleSearchUrl, '_blank');
        window.open(linkedinSearchUrl, '_blank');
    } else {
        alert('Please select both a category and a location');
    }
});
