import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay.jsx/ProductDisplay';
import { DescriptionBox } from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const {productId}=useParams();
  //extracts productid from URL i.e: /product/5 , productId = 5
  const product = all_product.find((e)=>e.id=== Number( productId) );
  //finds product with id equal to the one in the URL , number used to convert string to no.
  return (
    <div className="container my-5">
    {/* Breadcrumb */}
    <div className="row">
      <div className="col-12">
        <Breadcrum product={product} />
      </div>
    </div>

    {/* Product Display */}
    <div className="row">
      <div className="col-lg-12 mx-auto">
        <ProductDisplay product={product} />
      </div>
    </div>

    {/* Description Box */}
    <div className="row mt-4">
      <div className="col-lg-10 mx-auto">
        <DescriptionBox />
      </div>
    </div>

    {/* Related Products */}
    <div className="row mt-5">
      <div className="col-12">
        <RelatedProducts />
      </div>
    </div>
  </div>
  )
}

export default Product