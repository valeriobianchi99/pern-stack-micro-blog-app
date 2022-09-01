import React from 'react';
import useFeed from './hooks/useFeed';
import Post from './Post';
import StyledFeed, { LoadMoreButton } from './styled/Feed.styled'

const Account = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useFeed("my_posts");
  return (
    <StyledFeed>
      <h1>My Posts</h1>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      {data?.pages?.map((page)=>page.posts.map((post, i)=><Post key={i} post={post}/>))}
      {(!data?.pages || data?.pages[0].posts?.length===0) && <sub style={{textAlign: "center"}}>No posts</sub>}
      <LoadMoreButton>
        { hasNextPage && !isFetchingNextPage && <button onClick={() => fetchNextPage()}>Load more</button> }
      </LoadMoreButton>
    </StyledFeed>
  )
}

export default Account;