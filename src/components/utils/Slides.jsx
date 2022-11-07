import React from "react";
import Card from 'react-bootstrap/Card';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { MdBrightnessAuto } from 'react-icons/md';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 8
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};

const cardItem =
  [
    {
      id: 1,
      caroImg: 'https://d2vi0z68k5oxnr.cloudfront.net/e1fea25f-6ae8-4317-8fad-dfc94c03c3ba/original.png?d=lg-cover',
      caroFtImg: 'https://d2vi0z68k5oxnr.cloudfront.net/cf1d2314-9d23-4564-aa76-38ed6b4e77ad/original.png?d=sm-logo',
      caroText: 'Art Blocks',
    }, {
      id: 2,
      caroImg: 'https://d2vi0z68k5oxnr.cloudfront.net/b3c5329c-5a86-428a-bb03-9e54b0561679/original.jpeg?d=lg-cover',
      caroFtImg: 'https://d2vi0z68k5oxnr.cloudfront.net/6b32b537-c7a7-4820-a640-e39576aa8508/original.png?d=sm-logo',
      caroText: 'Mutant Ape Yacht Club',
    }, {
      id: 3,
      caroImg: 'https://d2vi0z68k5oxnr.cloudfront.net/2ba6d3df-5a6a-4b2b-814e-98f0af890eb1/original.jpeg?d=lg-cover',
      caroFtImg: 'https://d2vi0z68k5oxnr.cloudfront.net/58e9fc18-9c9e-435a-b7dc-bf3c364fad7b/original.png?d=sm-logo',
      caroText: 'Meebits',
    }, {
      id: 4,
      caroImg: 'https://d2vi0z68k5oxnr.cloudfront.net/1a157436-e668-451b-b65c-2b2233e008c4/original.png?d=lg-cover',
      caroFtImg: 'https://d2vi0z68k5oxnr.cloudfront.net/77ffeae9-9666-4da9-9386-a87b73c2b6d7/original.png?d=sm-logo',
      caroText: 'Bored Ape Yacht Club',
    }, {
      id: 5,
      caroImg: 'https://d2vi0z68k5oxnr.cloudfront.net/9e167897-8383-4b46-ba88-ae8bc76154e1/original.png?d=lg-cover',
      caroFtImg: 'https://d2vi0z68k5oxnr.cloudfront.net/5d705f0f-8553-41cc-babb-973e96dc86d8/original.jpeg?d=sm-logo',
      caroText: 'Otherdeed for Otherside',
    }, {
      id: 6,
      caroImg: '',
      caroFtImg: 'https://d2vi0z68k5oxnr.cloudfront.net/8ff57810-5d2e-4e16-a99e-d35f98f77479/original.png?d=sm-logo',
      caroText: 'CLONE X - X TAKASHI MURAKAMI',
    },{
      id: 7,
      caroImg: 'https://d2vi0z68k5oxnr.cloudfront.net/3d1c8681-5943-456d-9606-823a937b9597/original.png?d=lg-cover',
      caroFtImg: 'https://d2vi0z68k5oxnr.cloudfront.net/48bffbdc-15e5-4451-a7b0-38890c01c530/original.png?d=sm-logo',
      caroText: 'The Sandbox',
    },{
      id: 8,
      caroImg: 'https://d2vi0z68k5oxnr.cloudfront.net/b5b3c713-1458-4baa-9792-aec580b83928/original.jpeg?d=lg-cover',
      caroFtImg: 'https://d2vi0z68k5oxnr.cloudfront.net/75c36624-6eb1-487f-aa5a-1de8c3b71538/original.jpeg?d=sm-logo',
      caroText: 'Azuki',
    },{
      id: 9,
      caroImg: 'https://d2vi0z68k5oxnr.cloudfront.net/2a8ad9d6-d446-454f-bea2-964ed6ae78e9/original.webp?d=lg-cover',
      caroFtImg: 'https://d2vi0z68k5oxnr.cloudfront.net/e13e2f91-b3ec-45b8-b32b-a691966b9791/original.webp?d=sm-logo',
      caroText: 'RENGA',
    },{
      id: 10,
      caroImg: 'https://d2vi0z68k5oxnr.cloudfront.net/cd4e8f17-089f-4a10-be5a-09dd52844c9b/original.png?d=lg-cover',
      caroFtImg: 'https://d2vi0z68k5oxnr.cloudfront.net/ba49cf81-38bd-473c-a886-a52206d95f28/original.png?d=sm-logo',
      caroText: 'PROOF Collective',
    },{
      id: 11,
      caroImg: 'https://d2vi0z68k5oxnr.cloudfront.net/e1fea25f-6ae8-4317-8fad-dfc94c03c3ba/original.png?d=lg-cover',
      caroFtImg: 'https://d2vi0z68k5oxnr.cloudfront.net/cf1d2314-9d23-4564-aa76-38ed6b4e77ad/original.png?d=sm-logo',
      caroText: 'Art Blocks',
    },{
      id: 12,
      caroImg: 'https://d2vi0z68k5oxnr.cloudfront.net/b3c5329c-5a86-428a-bb03-9e54b0561679/original.jpeg?d=lg-cover',
      caroFtImg: 'https://d2vi0z68k5oxnr.cloudfront.net/6b32b537-c7a7-4820-a640-e39576aa8508/original.png?d=sm-logo',
      caroText: 'Mutant Ape Yacht Club',
    },
    
  ];


const Slides = () => {
  return (
    <div className="bg-color carousel-section pt-5 pb-3">
      <div className="container-fluid pt-5">
        <div className="d-flex justify-content-between pt-4">
          <div className="collect mb-4 text-white"><h5>Top Collections</h5></div>
          <div className="arrow">
<div className="btn btn-outline-ligh text-white fw-bold px-2 mx-md-5">See All</div>
          </div>
        </div>
        <Carousel responsive={responsive}>
          {
            cardItem.map((data) =>
              <Card className="bg-dark text-white" key={data.id}>
                <Card.Img src={data.caroImg} alt="" height={'100%'} />
                <Card.ImgOverlay>
                  <Card.Text>
                    <div className="d-flex align-items-center">
                      <div className="footer-img">
                        <img className="" src={data.caroFtImg} alt="" />
                      </div>
                      <div className="footer-text text-truncate">{data.caroText}</div>
                      <div className="footer-icon"><MdBrightnessAuto /></div>
                    </div>
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            )
          }
        </Carousel>
          
      </div>
    </div>
  )
}

export default Slides