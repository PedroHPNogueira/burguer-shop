import { useState, useEffect } from "react";

import { Main } from "./App.js";
import Header from "./components/Header/index.jsx";
import SearchInfo from "./components/SearchInfo/index.jsx";
import ProductList from "./components/ProductList/index.jsx";
import Cart from "./components/Cart/index.jsx";

import api from "./services/api.js";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([])
  const [filterSearch, setFilterSearch] = useState("")
  const [currentSearch, setCurrentSearch] = useState("")


  useEffect(() => {
    api.get("/products")
    .then((res) => {
      setProducts(res.data)
      setFilteredProducts(res.data)
    })
  },[])

  function filterProducts(){
    let newList = products.filter((elem) => elem.name.toLowerCase().includes(filterSearch.toLowerCase()))
    setFilteredProducts(newList)
    setCurrentSearch(filterSearch)
  }

  function addToCart(id){
    let isAlreadyAtCart = false

    currentSale.forEach(elem => {
      if(elem.id == id){
        isAlreadyAtCart = true
      }
    })

    if (isAlreadyAtCart){
      let product = currentSale.filter(elem => elem.id == id)
      product[0].count = product[0].count + 1
      setCurrentSale([...currentSale])
    } else {
      let productArray = products.filter(elem => elem.id == id)
      let product = productArray[0]
      product.count = 1
      setCurrentSale([...currentSale, product])
    }
  }

  function removeFromCart(id){
    let productArray = currentSale.filter(elem => elem.id == id)
    let product = productArray[0]

    if ( product.count > 1){
      product.count = product.count - 1
      setCurrentSale([...currentSale])
    } else {
      let newCurrentSale = currentSale.filter(elem => elem.id != id)
      setCurrentSale(newCurrentSale)
      console.log(newCurrentSale)
    }
  }

  function calculateTotalPrice(){
    let valorTotal = currentSale.map( elem => {

    })
  }

  return (
    <Main>
      <Header setFilterSearch={setFilterSearch}
      filterProducts={filterProducts} filterSearch={filterSearch}></Header>
      <div className="body">
        <div>
          <SearchInfo currentSearch={currentSearch} setFilteredProducts={setFilteredProducts} setFilterSearch={setFilterSearch} products={products} setCurrentSearch={setCurrentSearch}></SearchInfo>
          <ProductList filteredProducts={filteredProducts} addToCart={addToCart}></ProductList>
        </div>
          <Cart currentSale={currentSale} removeFromCart={removeFromCart} setCurrentSale={setCurrentSale}></Cart>
      </div>
    </Main>
  );
}

export default App;
