export const PATH_PAGE = {
    root: "/",
    contact: "/contact",
    blogList: "/blog",
    blogDetail: (id: string) => `/blog/${id}`
}

export const PATH_AUTH = {
    login: "/login",
    register: "/register",
    forgot: "forgot-pass"
}

export const PATH_BUSINESS = {
    detail: (id: string) => `/homestay/${id}`,
    search: "/search"
}