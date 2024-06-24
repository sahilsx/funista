




document.addEventListener("DOMContentLoaded" ,()=>{



async function instasearch(){
    const url = 'https://instagram-scraper-api2.p.rapidapi.com/v1.2/posts?username_or_id_or_url=mrbeast';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '43be6c7e81msh601b69bdd922f72p160a02jsn3b184d092736',
            'x-rapidapi-host': 'instagram-scraper-api2.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
instasearch();
})



