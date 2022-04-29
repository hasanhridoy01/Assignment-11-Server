import React from 'react';
import './Display.css';
import images from '../../../images/Phone/camera_1512x.webp'

const Display = () => {
  return (
    <div className='container mt-5 mb-5 p-3'>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-6">
          <h4 className='mb-3 display-title'>42 FRONT CAMERA FOR PERFECT SHOT</h4>
          <p className='d-paragrap'>The original iPhone was announced on Jan. 9, 2007, at the Macworld convention by Apple co-founder Steve Jobs. While it was not considered the first smartphone, the iPhone has helped drive the global shift to mobile computing among both consumers and businesses. Its primary rival has been Google Android-based devices from companies such as Samsung, also introduced in 2007. The iPhone OS 2.0 update included several features designed for business, including support for Microsoft Exchange email. Improved mobile security features included secure access to corporate networks over Cisco's IPSec virtual private network, plus remote wipe and other management capabilities.</p>
          <p>The first-generation iPhone came preloaded with a suite of Apple software, including iTunes, the Safari web browser and iPhoto. Internet Message Access Protocol and Post Office Protocol 3 email services were integrated with the device.</p>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6">
          <div className="transf">
          <img className='display-img' src={images} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;