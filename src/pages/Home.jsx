import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cards from "../components/Cards";
import Banner from "../components/Banner";

export default function Home() {
  const [category, setCategory] = useState("")
  const [products, setProducts] = useState([])
  const apiUrl = import.meta.env.VITE_API_URL

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${apiUrl}/products`);
        const allProducts = await response.json();

        setProducts(allProducts);
      }
      catch (e) {
        console.error(e);
      }
    }
    fetchProducts();
  }, []);

  const AllCategory = () => {
    return new Set(products.map((prod) => {
      return prod.category
    }))
  }
  console.log(AllCategory())
  
  return (
    <div className="flex justify-center m-auto w-10/12 items-center self-center flex-wrap gap-10">
      {products.map((prod) => (
        <section>
          <Banner title={prod.category}/>
          <Cards 
            key={prod.id}
            {...prod}
          />
        </section>
      ))}
    </div>
  );
}
