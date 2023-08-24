import React from 'react'
import classes from './article.module.css'

const Article = ({imgurl,date,title}) => {
  return (
    <div className={classes.blog_container_article} >
  
      <div className={classes.blog_container_article_image}>
        <img src={imgurl} alt="blog" />
      </div>
      <div className={classes.blog_container_article_content}>
        <div className="">
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
  </div>
  )
}

export default Article