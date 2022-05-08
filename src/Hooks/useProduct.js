import { useEffect, useState } from "react"

const useProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = `  https://murmuring-crag-30634.herokuapp.com/product`;
    fetch(url)
    .then(response => response.json())
    .then(data => setProducts(data));
  },[])
  return [products, setProducts];
}

export default useProduct;