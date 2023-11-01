import Api from "../api"

const apiBase = 'https://fakestoreapi.com';
function getData(apiUrl) {
    const { data, isLoading, error } = Api(apiUrl);
    return { data, isLoading, error };
}

export function products(limit) {
    let apiUrl = `${apiBase}/products`
    if (limit) {
        apiUrl += `?limit=${limit}`;
    }
    return getData(apiUrl)
}

export function category(category, limit) {
    let apiUrl = `${apiBase}/products/category/${category}`
    if (limit) {
        apiUrl += `?limit=${limit}`;
    }
    return getData(apiUrl)
}

export function categories() {
    return getData(`${apiBase}/products/categories`)
}

export function single(productId) {
    return getData(`${apiBase}/products/${productId}`)
}