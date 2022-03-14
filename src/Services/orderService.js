const sendOrder = async (jsonData) => {
    const res = await fetch("http://localhost:3500/api/orders/1", {
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