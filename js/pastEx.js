const urlPast = "http://localhost/cosm/index.php/wp-json/wp/v2/posts?tags=3&_embed";
const urlCors3 = "https://noroffcors.herokuapp.com/" + urlPast;
const cardWrapperTwo = document.querySelector('.scrolling-wrapper-two');



async function getExhibitions() {

  try {
    const response = await fetch(urlPast);
    const results = await response.json();
    createPast(results);
    console.log(results);
  }
  catch(error) {
    console.log(error);
  }
}

getExhibitions();


function createPast(posts) {
  
  posts.forEach(function(post) {
   
    const cardHeading = post.title.rendered;
    const cardImage = post._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url;
    const altText = post._embedded["wp:featuredmedia"][0].alt_text;


    cardWrapperTwo.innerHTML += `
      <a class="card-two" href="/exhibition-specific.html?id=${post.id}">
        <article>
          <img src="${cardImage}" alt="${altText}" class="card-image">
          <h3>${cardHeading}</h3>
          <p>${post.excerpt.rendered}</p>
        </article>
      </a>
    `;
  })
}