import { useInfiniteQuery } from "@tanstack/react-query";

const useFeed = (path = "feed") => {
    return useInfiniteQuery(
        [path],
        async ({ pageParam = 0}) => {
            const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/${path}?cursor=${pageParam}`, {
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if(!res.ok){
                throw new Error("Something went wrong fetching posts from the server...");
            }
            return res.json();
        },
        {
            getNextPageParam: (lastPage) => lastPage.posts.length >= 5 ? lastPage.cursor : undefined,
            // refetchInterval: 1000 * 10
        }
    );
}

export default useFeed;