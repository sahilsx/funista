




document.addEventListener("DOMContentLoaded" ,()=>{



async function instasearch(query){
    const url = `https://instagram-scraper-api2.p.rapidapi.com/v1/search_users?search_query=${query}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '43be6c7e81msh601b69bdd922f72p160a02jsn3b184d092736',
            'x-rapidapi-host': 'instagram-scraper-api2.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        const rdata = data.data;
        const ndata = rdata.items;
      
          displayImages(ndata);
        // const username = await data.items.
        console.log(ndata);
    } catch (error) {
        console.error(error);
    }
}


function displayImages(ndata) {
    const targetDiv = document.getElementById("card");
    targetDiv.innerHTML = "";
  
    ndata.forEach((data) => {
      // creating a div with class ="pic"
      const PicElement = document.createElement("div");
      PicElement.classList.add("profile");
  
     
  
      const ImgElement = document.createElement("img");
      ImgElement.src = data.profile_pic_url;
      ImgElement.alt = data.full_name;
  
      const textElement = document.createElement("div");
      textElement.classList.add("text");
  
      textElement.innerHTML = data.
username
      
      ;
  
      // dom heirarchy
      targetDiv.appendChild(PicElement);
      PicElement.appendChild(ImgElement);
      PicElement.appendChild(textElement);
    });
  }


document.getElementById("search-button").addEventListener("click", () => {
    const query = document.getElementById("search-input").value;
  
    if (query) {
        instasearch(query);
    }
  });



})



