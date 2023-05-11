import { useNavigate, useParams } from "react-router-dom";

const ShowProduct = () => {
    const myParams = useParams()
    console.log(myParams)
    const {id} = useParams()
    const navigate = useNavigate()
    // +id  perse convertir  string to number 
    if(+id === 404 ) {
        return(
            <h1>Page not Found</h1>
        )
    }

    const redirectToHome = () => {
      navigate("/")
    }
  return (
    <>
       <h1>HI, Im a product</h1>
       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, nemo?</p>
       <button onClick={redirectToHome} className="btn btn-success my-2 mb-2"> Redirect</button>
    </>
  )
}

export default ShowProduct