import Counter from "./Counter"
import Product  from "./Product"
import { useState } from "react"
import { v4 as uuid } from "uuid"
 
 function Products() {
    const [title,setTitle] = useState("")
    const [price,setPrice] = useState("")
    const [message,setMessage] = useState("")
    let showList = true 
    const [products , setProducts] = useState([
      {
        id : 1 ,
        label : "Iphone 13Pro Max",
        price : 3000
      },
      {
        id : 2 ,
        label : "Samsung S22",
        price : 4000
      },
      {
        id : 3 ,
        label : "Nokia",
        price : 1000
      }
    ] )
    const deleteProduct = (id) => {
     let myList = products.filter(product => product.id !== id)
     setProducts((prev) => {
       console.log(prev)
       return myList
     })
    }
    const titleInput = (e) => {
      if(e.target.value === ""){
        setMessage("This is required")} 
        else if (e.target.value.trim().length < 3)
      { setMessage("Please tap more than 3 characters")}
      else {
      setTitle(e.target.value)}
    }
    const priceInput = (e) => {
      setPrice(e.target.value)
    }
    const submitForm = (e) => {
     e.preventDefault();
     let myProduct = {
      id : uuid(),
      label : title,
      price  
    }
    setProducts([myProduct, ...products]) 
    setTitle("")
    setPrice(0)
    }
   return (
     <>
        <h1>{title}</h1>
        <p>Bienvenue sur notre plateforme de Threat Intelligence, où vous pouvez accéder à des informations critiques sur les menaces numériques qui peuvent compromettre votre entreprise. Nous offrons une gamme de services pour vous aider à identifier les risques potentiels, à surveiller les tendances des menaces, et à prendre des mesures proactives pour protéger votre entreprise contre les cyber-attaques. Notre équipe d'experts en sécurité informatique est constamment à l'affût des dernières tendances et des nouvelles méthodes de cybercriminalité pour vous fournir des informations précises et actualisées. Nous sommes déterminés à vous aider à sécuriser votre entreprise contre les menaces numériques émergentes, et nous sommes fiers de vous offrir une plateforme de Threat Intelligence fiable et facile à utiliser.</p>
        <form onSubmit={submitForm} >

          <div className="form-group my-2">
            <label htmlFor="" className="form-label"> </label>
            <input defaultvalue={title} onChange={titleInput} type="text" className="form-control" />
            {message && ( <div className="alert alert-danger">
            {message}</div>)} 
           </div>
          <div className="form-group my-2">
            <label htmlFor="" className="form-label"> </label>
            <input defaultvalue={price} onChange={priceInput} type="number" className="form-control" />
          </div>
          
          <button className="btn btn-light my-2">Save</button>
        </form>

        {title} .... {price} 
        <Counter />
        {showList && (
        <>
           {products.map((product,i) => (<div key={i}> 
           <Product id = {product.id} onDeleteProduct ={deleteProduct}>
           <div className="card-header">{product.label}</div>
           <div className="card-body">
             <p>Lorem ipsum dolor sit.</p>
            <h4 className="card-title">{product.label}</h4>
            <p className="card-text">
              <button className="btn btn-danger">{product.price} 
              </button>
            </p>
           </div>


            </Product> 
           </div>)   )}
        </>)
        }
        
     </>
   )
 }
 
 export default Products