// function getHotArticles(){
//     let time = new Date();
//     time = time.toLocaleDateString();
//     let URL = `http://newsapi.org/v2/top-headlines?`+ 
//                `q=Coronavirus&` +
//                `sortBy=popularity&` +
//                `from=${time}&` +
//                `apiKey=6ba59ddb5a9a40a6bdc5558858263b49`;
//     let xhr = new XMLHttpRequest;
//     xhr.onload = function() {
//         if (this.readyState === XMLHttpRequest.DONE ) { 
//             let response = JSON.parse(this.responseText);
//             console.log(response);
//         }
//     }
//     xhr.open("GET", URL);
//     xhr.send();
// }
async function getHotArticles(){
    console.log("Request made: 1");
    let time = new Date();
    time = time.toLocaleDateString();
    let URL = `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?`+ 
               `country=US&` +
               `sortBy=popularity&` +
               `from=${time}&` +
               `apiKey=6ba59ddb5a9a40a6bdc5558858263b49`;
    try{
        let res = await fetch(URL);
        const data = await res.json();
        return(data);
    } catch(err){
        console.error(err);
    }
}
async function getArticlesByTag(tag){
    tag = encodeURI(tag); 
    console.log("Request made: 2");
    let URL = `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?`+ 
               `sortBy=popularity&` +
               `q=${tag}&` +
               `apiKey=6ba59ddb5a9a40a6bdc5558858263b49`;
    try{
        let res = await fetch(URL);
        const data = await res.json();
        console.log(data);
        return(data);
        // solvePromise(data);
    } catch(err){
        console.error(err);
    }
}
let api = {
    getHotArticles: getHotArticles,
    getArticlesByTag: getArticlesByTag
}
export default api;