const sendOrder = async (jsonData, suffix) => {
    console.log(suffix);
    const res = await fetch("http://localhost:3500/api/orders/"+suffix, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonData),
    })
        .then(response => response.json())
    return res;
}

export default sendOrder;