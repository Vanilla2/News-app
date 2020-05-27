import React from 'react'

function Article(props){
    function goToSource(){
        document.location = props.data.url;
    }
    return(
        <div onClick = {goToSource} className = "article">
            <p className = "article-title">{props.data.title}</p>
            <p className = "article-author">{props.data.author}</p>
            <p className = "article-description">{props.data.description}</p>
            <img className = "article-image" src = {props.data.urlToImage} alt = "Not Found"/>
        </div>
    )
}
export default Article;