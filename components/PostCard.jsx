import React from 'react'

const PostCard = ({ post,key }) => {
    return (
        <div key={key} >
            {post.title}
            {post.excerpt}
        </div>
    )
}

export default PostCard