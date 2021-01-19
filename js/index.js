
fetch('https://test.spaceflightnewsapi.net/api/v2/articles')
    .then(response => {return response.json()})
    .then((response) => {for(let i = 0; i < response.length; i++) {
        class Response {
          constructor(image, title, summary, url){
              this.image = image;
              this.title = title;
              this.summary= summary;
              this.url = url;
          }
      }
      let newResponse = new Response(
          response[i].imageUrl,
          response[i].title,
          response[i].summary,
          response[i].url,        
      )
      console.log(response)
      document.querySelector('.box').innerHTML +=  
      `<div class="card">    
        <img src="${newResponse.image}" class="card-img-top" alt="actualités">
        <div class="card-body">
          <h3 class="card-title">${newResponse.title}</h3>
          <p class="row">description : ${newResponse.summary}</p>
          <a href="${newResponse.url}" class="btn btn-primary stretched-link">Voir l'article</a>
        </div>
      </div>`
  }})