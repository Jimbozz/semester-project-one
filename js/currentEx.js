const url = "http://localhost/cosm/index.php/wp-json/wp/v2/posts?tags=2&_embed";
const urlCors = "https://noroffcors.herokuapp.com/" + url;
const cardWrapper = document.querySelector('.scrolling-wrapper');



async function getExhibitions() {

  try {
    const response = await fetch(url);
    const results = await response.json();
    createCurrent(results);
    console.log(results);
  }
  catch(error) {
    console.log(error);
  }
}

getExhibitions();


function createCurrent(posts) {
  
  posts.forEach(function(post) {
   
    const cardHeading = post.title.rendered;
    const cardImage = post._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url;
    const altText = post._embedded["wp:featuredmedia"][0].alt_text;


    cardWrapper.innerHTML += `
      <a class="card-two" href="/exhibition-specific.html?id=${post.id}">
        <article>
          <img src="${cardImage}" alt="${altText}" class="card-image">
          <h3>${cardHeading}</h3>
          <p>${post.excerpt.rendered}</p>
          <p class="exhibition-date">
            <time datetime="${post.date}">${post.formatted_date}</time>
          </p>
        </article>
      </a>
    `;
  })
}