import { Link, Typography } from '@mui/material'
import { Link as BrowserLink, Outlet, useParams } from 'react-router-dom'
import React from 'react'
import ArticleCard from './ArticleCard'
import Article from './article'

export default function ArticlesList(articles) {
  return (
    <>
        <ul>
            {articles.map((article) => (
                <li key={article.id}>
                    <Link component={BrowserLink} to={`/posts/${article.postUrl}`} underline='false'>
                        <ArticleCard article={article} />
                    </Link>
                </li>
            ))}
        </ul>
        <Outlet />
    </>
  )
}
const Post = () => {
    const { article } = useParams()

    return(
        <Article title={article.title} article={article.textContent} />
    )
}
