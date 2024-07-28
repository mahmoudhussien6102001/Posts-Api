async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('no Enternet');
        }
        const data = await response.json();
        const cardContainer = document.getElementById('card-container');
        cardContainer.innerHTML = ''; 
        data.forEach(post => {
            const card = document.createElement('div');
            card.className = 'col-md-6 col-lg-4 col-sm-12 mb-3';
            card.innerHTML = `
                <div class="card mb-4" style="width: 100%; height:100%">
                    <div class="card-body">
                        <h3 class="card-id text-center bg-dark text-light rounded p-2"> ${post.id}</h5>
                        <h6 class="card-title mb-2 text-wight-50">${post.title}</h6>
                        <p class="card-text">${post.body.replace(/\n/g, '<br>')}</p>
                        <p class="text-center bg-dark text-light rounded p-2">UserId : ${post.userId}</p>
                         <a href="https://jsonplaceholder.typicode.com/posts" class="btn  justify-content-center d-flex text-center bg-primary align-items-center">Go API Post</a>
                    </div>
                </div>
            `;
            cardContainer.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        const cardContainer = document.getElementById('card-container');
        cardContainer.innerHTML = '<div class="alert alert-primary" role="alert">Failed to load data  , please try again later</div>';
    }
}

// Fetch data when the page loads
window.onload = fetchData;
