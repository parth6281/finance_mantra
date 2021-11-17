export default {
    register: () => {
        return {
            url: "/register",
            method: "post",
        }
    },
    login: () => {
        return {
            url: '/login',
            method: 'post'
        }
    },
    about: () => {
        return {
            url: '/about',
            method: 'get'
        }
    }
}