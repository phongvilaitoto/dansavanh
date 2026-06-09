export function useBlogs(type: string, query?: Record<string, string>) {
  const config = useRuntimeConfig()
  const params = new URLSearchParams({ type, ...query })
  return useFetch(`${config.public.apiBase}/getDBlogs?${params}`, {
    key: `blogs-${type}-${JSON.stringify(query || {})}`,
    default: () => ({ dBlogs: [] }),
  })
}

export function useBlog(id: string) {
  const config = useRuntimeConfig()
  return useFetch(`${config.public.apiBase}/getDBlog/${id}`, {
    key: `blog-${id}`,
    default: () => ({ dBlog: null }),
  })
}
