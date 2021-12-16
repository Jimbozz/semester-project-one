const content = document.querySelector('.exhibition-content');
const title = document.querySelector('title');
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');
const finalId = parseInt(id);

const url = "http://localhost/cosm/index.php/wp-json/wp/v2/posts/" + finalId + "?&_embed";

const corsEnabledEx = "https://noroffcors.herokuapp.com/" + url;


async function ExInfo() {
  try {
    const response = await fetch(url);
    const result = await response.json();
   
    title.innerHTML = `${result.title.rendered}`;
    createExhibition(result);

  }
  catch(error) {
    console.log(error);
  }

}

ExInfo();


function createExhibition(result) {

  const image = result._embedded["wp:featuredmedia"][0].media_details.sizes.medium_large.source_url;
  const alt = result._embedded["wp:featuredmedia"][0].alt_text;
  
  content.innerHTML = `

    <div class="ex-hero">
      <div class="ex-image-wrapper">
        <img class="ex-image" src="${image}" alt="${alt}">
      </div>
      <div class="ex-details">
        <time datetime="${result.date}">${result.formatted_date}</time>
        <h1>${result.title.rendered}</h1>
      </div>
    </div>
    <div class="ex-content">
      ${result.content.rendered}
    </div>
  `;
  
}