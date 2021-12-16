const urlNews = "http://badenhorst.one/index.php/wp-json/wp/v2/posts?tags=4&_embed";
const urlCors2 = "https://noroffcors.herokuapp.com/" + urlNews;
const newsWrapper = document.querySelector('.news-wrapper');



async function getExhibitions() {

  try {
    const response = await fetch(urlCors2);
    const results = await response.json();
    createNews(results);
    console.log(results);
  }
  catch(error) {
    console.log(error);
  }
}

getExhibitions();


function createNews(posts) {
  
  posts.forEach(function(post) {
   
    const cardHeading = post.title.rendered;
    const cardImage = post._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url;
    const altText = post._embedded["wp:featuredmedia"][0].alt_text;


    newsWrapper.innerHTML += `
      
      <article class="card-two">
        <img src="${cardImage}" alt="${altText}" class="card-image">
        <h3>${cardHeading}</h3>
        <p>${post.excerpt.rendered}</p>
        <p class="exhibition-date">
          <time datetime="${post.date}">${post.formatted_date}</time>
        </p>
      </article>
    `;
  })
}