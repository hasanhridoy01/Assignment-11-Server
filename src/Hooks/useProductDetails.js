const { useState, useEffect } = require("react")

const useProductDetails = productId => {
  const [product, setProduct] = useState({});

  //fetch data
  useEffect(() => {
    const url = `http://localhost:5000/product/${productId}`;
    fetch(url)
    .then(response => response.json())
    .then(data => setProduct(data));
  },[productId]);

  return [product, setProduct];
}

export default useProductDetails;