import { Container, Nav, Navbar, Carousel} from 'react-bootstrap';

import React from 'react';

 const Car = () => {
    return (
        <div>
            

   <Carousel style={{width: "500px"}}>
  <Carousel.Item>
    <img
    style={{height: "300px"}}
      className="d-block w-100"
      src="https://c4.wallpaperflare.com/wallpaper/729/600/976/4th-of-july-dessert-wallpaper-preview.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>The American Punch</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    style={{height: "300px"}}
      className="d-block w-100"
      src="https://c4.wallpaperflare.com/wallpaper/371/196/839/raspberry-ice-cream-dessert-wallpaper-preview.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Very Berry Chocolaty</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    style={{height: "300px"}}
      className="d-block w-100"
      src="https://images3.alphacoders.com/726/726833.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Berilicious Treat</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default Car;
