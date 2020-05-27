import React, { useState, useEffect } from 'react';
import {Roller} from 'react-spinners-css';
import api from './api'
import Article from './Article'

function ArticleBox(props){
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(1);
    useEffect(() =>{
        if (props.view !== "Top News"){
            setLoading(1);
            api.getArticlesByTag(props.view).then(res =>{
                console.log(res);
                setArticles(res.articles);
                setLoading(0);
            })
        }
    },[props.view]);
    useEffect(() =>{
        setLoading(1);
        api.getHotArticles().then(res =>{
            console.log(res);
            setArticles(res.articles);
            setLoading(0);
        })
    }, []);
    console.log(loading);
    if (loading){
        return(
            <div id = "loading-box">
                <Roller color = "black"/>
            </div>
        )
    }
    if(articles.length === 0){
        return(
            <div id = "empty-box">
                <h3 id = "empty-text">
                    No articles found
                </h3>
            </div>
        );
    }
    return(
        <div id = "article-box">
            {articles.map(x =>(
                <Article key = {x.url} data = {x} />
            ))}
        </div>
    )
}
export default ArticleBox