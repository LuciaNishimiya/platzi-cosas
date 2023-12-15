import Api from "../api"

const apiBase = 'https://fakestoreapi.com';
function getData({ url, setData }) {
    Api({ url, setData });
}

export function products(setData, limit) {
    let url = `${apiBase}/products`
    if (limit) {
        url += `?limit=${limit}`;
    }
    getData({ url, setData })
}

export function category(setData, category, limit) {
    let url = `${apiBase}/products/category/${category}`
    if (limit) {
        url += `?limit=${limit}`;
    }
    getData({ url, setData })
}

export function categories(setData) {
    let url = `${apiBase}/products/categories`
    getData({ url, setData })
}

export function single(setData, productId) {
    let url = `${apiBase}/products/${productId}`
    getData({ url, setData })
}