import React, { useState } from 'react';
import { useRef } from 'react';
import useSendPost from './hooks/useSendPost';
import StyledPostModal, { PostModalForm, PostModalHeader } from './styled/PostModal.styled';

const PostModal = ({ setModal }) => {

    const [value, setValue] = useState({ post: "" });
    const maxCharacters = 255;

    const backgroundRef = useRef();

    const { mutate: sendPost }  = useSendPost();

    const onSubmitPost = (e) => {
        e.preventDefault();
        const postText = value.post;
        if(postText.trim().length > 0){
            sendPost({ post: postText, date_creation: new Date().getTime()});
        }
        setValue({ post: "" });
        setModal(false);
    }
  return (
    <StyledPostModal ref={backgroundRef} onClick={(e) => {
        if(e.target === backgroundRef.current) {
            setModal(false)
        }
    } }>
        <PostModalForm onSubmit={(e)=> onSubmitPost(e)}>
            <PostModalHeader>
                <h1>Create post</h1>
            </PostModalHeader>
            <textarea name="post" maxLength={maxCharacters} value={value.post} onChange={(e)=>setValue({ post: e.target.value})} placeholder='Some stuff...'/>
            <sub>Characters left: {maxCharacters - value.post.length} </sub>
            <button type="submit">
                <p>Post</p>
            </button>
        </PostModalForm>
    </StyledPostModal>
    )
}

export default PostModal