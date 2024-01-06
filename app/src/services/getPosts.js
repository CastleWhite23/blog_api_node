import { api } from "./api"

export const getPostById = async (id="") => {
    try {
        const post = await api.get(`/postagens/${id}`)
        const postInfo = post.data

        return postInfo
    } catch {
        const error = "deu ruim nos post"
        return error
    }
}