import React from 'react'
import useDeletePost from './hooks/useDeletePost';
import { StyledPostActions, StyledPost, StyledPostBody, StyledPostHeader } from './styled/Feed.styled';

const Post = React.memo(({ post }) => {

    const { mutate: deletePost }  = useDeletePost();

    const onClickDelete = () => {
        deletePost({...post}.id)
    }
  return (
    <StyledPost>
        <StyledPostHeader>
            <h2>{post.username}</h2>
            <img src={post.img}/>
        </StyledPostHeader>
        <StyledPostBody>
            <p>{post.body}</p>
            {post.date_creation && <sub>{new Date(Number.parseInt(post.date_creation)).toLocaleDateString()}</sub>}
        </StyledPostBody>
        <StyledPostActions>
            <button className='comment'>Comment</button>
            <button className='delete' onClick={() => onClickDelete()}>Delete post</button>
        </StyledPostActions>
    </StyledPost>
  )
});

export default Post;