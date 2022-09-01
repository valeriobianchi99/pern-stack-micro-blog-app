import { useMutation, useQueryClient } from "@tanstack/react-query";

const useDeletePost = () => {
    const queryClient = useQueryClient();
    return useMutation(
        postId =>fetch(`${process.env.REACT_APP_SERVER_URL}/post/${postId}`,
            {
                method: "DELETE",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                }
            }
        ),
        {
            onSuccess: () => {
                queryClient.refetchQueries("feed");
                queryClient.refetchQueries("my_posts");
            },
        }
    )
}

export default useDeletePost;