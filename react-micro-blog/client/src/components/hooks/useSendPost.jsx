import { useMutation, useQueryClient } from "@tanstack/react-query";

const useSendPost = () => {
    const queryClient = useQueryClient();
    return useMutation(
        post =>fetch(`${process.env.REACT_APP_SERVER_URL}/new_post`,
            {
                body: JSON.stringify(post),
                method: "POST",
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

export default useSendPost;