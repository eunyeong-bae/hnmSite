function getProducts(searchQuery) {
    return async(dispatch, getState) => {
        let url = `https://my-json-server.typicode.com/eunyeong-bae/hnmSite/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        console. log(data)
        dispatch({
            type:"GET_PRODUCT_SUCCESS",
            payload: {data}
        });
    }
}

function getProductDetail(id) {
    return async(dispatch, getState) => {
        let url = `https://my-json-server.typicode.com/eunyeong-bae/hnmSite/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        dispatch({
            type:"GET_PRODUCT_DETAIL",
            payload:{data}
        })
    }
}

export const productAction = {getProducts, getProductDetail}; //여러개의 함수를 하나의 객체에 담아 리턴