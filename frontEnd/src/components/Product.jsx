import PropTypes from 'prop-types'

const Product = ( {children, onDeleteProduct, id}) => { 
  return (
    <> 
        <div className='my-4'>
         <div className="card text-white bg-primary mb-3">
          {children}
         </div>
         <button className='btn btn-dark' onClick={() => {
           onDeleteProduct(id)
         }}>Delete</button>
         </div>
    </>
  )
}
Product.prototype = {
  label : PropTypes.string.isRequired,
  price : PropTypes.number.isRequired,
}  
export default Product