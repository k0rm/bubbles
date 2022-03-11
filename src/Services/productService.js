export const getProducts = () => fetch("http://localhost:3500/api/bubbles").then(res => res.json());

export const getSingleProduct = (id) => fetch("http://localhost:3500/api/bubbles/"+id).then(res => res.json());