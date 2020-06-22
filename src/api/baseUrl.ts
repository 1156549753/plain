
const baseUrl = () => {
    let url:string = location.origin
    switch (url) {
        default:
            return window.location.origin;
    }
}


export default baseUrl