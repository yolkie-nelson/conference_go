function createCard(name, description, pictureUrl) {
    return `
      <div class="card">
        <img src="${pictureUrl}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">${description}</p>
        </div>
      </div>
    `;
  }

window.addEventListener('DOMContentLoaded', async () => {
    const url = 'http://localhost:8000/api/conferences/';

    try {
        const response = await fetch(url);

        if (!response.ok) {
            console.log(response);
        } else {
            const data = await response.json();

            for (let conference of data.conferences) {
                const detailUrl = `http://localhost:8000${conference.href}`;
                const detailResponse = await fetch(detailUrl);
                if (detailResponse.ok) {
                    const details = await detailResponse.json();
                    const name = details.conference.name;
                    const description = details.conference.description;
                    const pictureUrl = details.conference.location.picture_url;
                    const startDate = Date(details.conference.starts);
                    const endDate = details.conference.starts;
                    const html = createCard(title, description, pictureUrl);
                    const row = document.querySelector('.row');
                    row.innerHTML += html;
                    console.log(details);
                }
              }
        }

    } catch (e) {
        console.error('Error:', error.message);
    }

});
