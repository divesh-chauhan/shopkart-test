import {Link} from 'react-router-dom'

const ProductDetailsBtn = ({ id }) => {
    return(
        <>
         <Link to={`/products/${id}/details`}>
           <button className='product-details-btn'>Details</button>
         </Link>
        </>
    )
}


export default ProductDetailsBtn