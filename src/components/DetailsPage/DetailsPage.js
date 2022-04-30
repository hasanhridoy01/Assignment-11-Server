import React from 'react';
import { useParams } from 'react-router-dom';
import img from '../../images/Phone/p12.webp';
import './DetailsPage.css';

const DetailsPage = () => {
  const { detailsId } = useParams();
  return (
    <div className='container mt-5 mb-5'>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6">
          <div className="card border-0 p-5">
            <h3>Product Details : {detailsId}</h3>
            <p>Product Descriptions: This is a short text that provides a quick overview of the product. They can be used as a standalone piece of content, or they can be used as a teaser to encourage website visitors to click on a longer description.
              Advertorials: An advertorial can be found in the news with content that advertises in the style of an editorial or journalistic article. This kind of content is crafted to look like an article, but it is actually a form of advertisement.
              Blog Articles: Any content that goes beyond providing helpful or entertaining content and instead describes the products in further detail is a form of product text. Some blog article examples include an article that shows how to use a product for the first time, or an article that shows how to get the most out of it.
              Reviews: Both videos and written content can be considered as product text. They include important information about a product, like how to unbox the product, and detailed steps on how to use the product.</p>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
           <div className="details-img card border-0">
             <img src={img} alt="" />
           </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;