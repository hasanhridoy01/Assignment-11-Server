import { useEffect, useState } from "react"

const useProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/product`;
    fetch(url)
    .then(response => response.json())
    .then(data => setProducts(data));
  },[])
  return [products];
}

export default useProduct;