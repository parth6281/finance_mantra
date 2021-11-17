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
    }
}