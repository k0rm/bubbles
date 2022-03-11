const retrieveBundles = async () => {
    return fetch("http://localhost:3500/api/bundles")
        .then((res) => res.json())
        .then((resData) => {
            console.log(resData);
            return resData;
        })
}

export default retrieveBundles;