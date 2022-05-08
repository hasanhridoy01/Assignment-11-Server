import { useEffect, useState } from "react"

const useProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = `https://cryptic-badlands-81188.herokuapp.com/product`;
    fetch(url)
    .then(response => response.json())
    .then(data => setProducts(data));
  },[])
  return [products, setProducts];
}

export default useProduct;