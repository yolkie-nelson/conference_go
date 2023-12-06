window.addEventListener('DOMContentLoaded', async () => {
    const locationsUrl = 'http://localhost:8000/api/locations/';
    const formTag = document.getElementById('create-conference-form');
    const selectTag = document.getElementById('location');

    try {
        const response = await fetch(locationsUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            for (let location of data.locations) {
                const option = document.createElement('option');
                option.value = location.id;
                option.innerHTML = location.name;
                selectTag.appendChild(option);
            }
        } else {
            console.error('Error fetching locations:', response.statusText);
        }
    } catch (error) {
        console.error('Error fetching locations:', error);
    }

    formTag.addEventListener('submit', async event => {
        event.preventDefault();
        const formData = new FormData(formTag);
        const json = JSON.stringify(Object.fromEntries(formData));

        const conferencesUrl = 'http://localhost:8000/api/conferences/';
        const fetchConfig = {
            method: 'POST',
            body: json,
            headers: {
                'Content-Type': 'application/json',
            },
        };

        try {
            const response = await fetch(conferencesUrl, fetchConfig);
            if (response.ok) {
                formTag.reset();
                const newConference = await response.json();
            }
        } catch (error) {
            console.error('Error creating conference:', error);
        }
    });
});
