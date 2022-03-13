const retrieveBundles = async () => {
    return fetch("http://localhost:3500/api/bundles")
        .then((res) => res.json())
        .then((resData) => {
            return resData;
        })
}

export default retrieveBundles;