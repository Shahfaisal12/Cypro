import React from "react";
import { MdBrightnessAuto } from "react-icons/md";
// import TokenIcon from '@mui/icons-material/Token';
import {CgShapeHexagon } from 'react-icons/cg'
import { useNavigate } from "react-router-dom";

const cardItem = [{
  id: '1',
  cardImage: 'https://d2vi0z68k5oxnr.cloudfront.net/b21ff988-ae1f-4251-8c5e-5fea7518bb5d/original.jpeg?d=sm-cover',
  gift: 'https://d2vi0z68k5oxnr.cloudfront.net/48da74e2-4f65-416d-932a-2654657b73c7/original.gif',
  giftText: 'Cryptoverse',
  name: 'Agent SHIB',
  // icon: <TokenIcon />,
  timeSale: '1.6K/8.5K for sale',
  start: 'From',
  startPrice: '$20',
  end: '',
  endTime: '',
  btn: 'Buy'

}, {
  id: '2',
  cardImage: 'https://d2vi0z68k5oxnr.cloudfront.net/741ef930-8539-4345-a9be-df6c761192e3/original.gif',
  gift: 'https://d2vi0z68k5oxnr.cloudfront.net/6f1bc1d8-8e81-4640-85fe-20e8bd845be6/original.png?d=sm-logo',
  giftText: 'Cronos World Tour',
  name: 'Cronos World Tour at Messari Mainnet 2022',
  // icon: <CgShapeHexagon />,
  timeSale: '1 minted',
  start: 'Current Bid',
  startPrice: '$1',
  end: 'Ends In',
  endTime: '2 hours',
  btn: 'Bid'
}, {
  id: '3',
  cardImage: 'https://d2vi0z68k5oxnr.cloudfront.net/bd65d985-8ac5-4464-ad3c-8119297ce662/original.webp?d=sm-cover',
  gift: 'https://d2vi0z68k5oxnr.cloudfront.net/08e89ca3-ed8c-4e6d-8699-bff8871f8295/original.webp?d=sm-logo',
  giftText: 'CROugarX',
  name: 'CrougarX #961',
  // icon: <TokenIcon />,
  timeSale: '1 minted',
  start: 'Price',
  startPrice: '$32',
  end: '',
  endTime: '',
  btn: 'Buy'
}, {
  id: '4',
  cardImage: 'https://d2vi0z68k5oxnr.cloudfront.net/28059f96-f384-49c8-8ecd-1bcb3ad4f81a/original.jpeg?d=sm-cover',
  gift: 'https://d2vi0z68k5oxnr.cloudfront.net/48da74e2-4f65-416d-932a-2654657b73c7/original.gif',
  giftText: 'Cryptoverse',
  name: 'Helmsman Hank',
  // icon: <CgShapeHexagon />,
  timeSale: '50/381 for sale',
  start: 'From',
  startPrice: '$33',
  end: '',
  endTime: '',
  btn: 'Buy'
}, {
  id: '5',
  cardImage: 'https://d2vi0z68k5oxnr.cloudfront.net/d5adb158-0f6c-400d-914d-6c0316fddfcd/original.png?d=sm-cover',
  gift: 'https://d2vi0z68k5oxnr.cloudfront.net/f02a576a-0f2a-4593-b30b-a869446eae97/original.webp?d=sm-logo',
  giftText: 'CROMMY',
  name: 'Cute Mummy #2716',
  // icon: <TokenIcon />,
  timeSale: '1 minted',
  start: 'Current Bid',
  startPrice: '$1',
  end: 'Ends In',
  endTime: '6 hours',
  btn: 'Bid'
}, {
  id: '6',
  cardImage: 'https://d2vi0z68k5oxnr.cloudfront.net/d8914549-0549-4b57-b4c7-15293df5d412/original.png?d=sm-cover',
  gift: 'https://d2vi0z68k5oxnr.cloudfront.net/f02a576a-0f2a-4593-b30b-a869446eae97/original.webp?d=sm-logo',
  giftText: 'CROMMY',
  name: 'Cute Mummy #4460',
  // icon: <TokenIcon />,
  timeSale: '1 minted',
  start: 'Current Bid',
  startPrice: '$23',
  end: 'Ends In',
  endTime: '40 minutes',
  btn: 'Bid'
}, {
  id: '7',
  cardImage: 'https://d2vi0z68k5oxnr.cloudfront.net/be3fd6ea-e7dc-4a2e-9857-45e86af820ff/original.jpeg?d=sm-cover',
  gift: 'https://d2vi0z68k5oxnr.cloudfront.net/be3fd6ea-e7dc-4a2e-9857-45e86af820ff/original.jpeg?d=sm-cover',
  giftText: 'Loaded Lions',
  name: 'Loaded Lion #2244',
  // icon: <TokenIcon />,
  timeSale: '1 minutes',
  start: 'Price',
  startPrice: '$2,222',
  end: '',
  endTime: '',
  btn: 'Buy'
}, {
  id: '8',
  cardImage: 'https://d2vi0z68k5oxnr.cloudfront.net/5cf410c7-d5b2-43d5-9a57-caa8b058025e/original.png?d=sm-cover',
  gift: 'https://d2vi0z68k5oxnr.cloudfront.net/433a1330-88c9-4fac-a8b3-26b6f3106d15/original.png?d=sm-logo',
  giftText: 'TMK CUSTOMS',
  name: 'TMK WOLFIE',
  // icon: <CgShapeHexagon />,
  timeSale: '539/2.9K for sale',
  start: 'From',
  startPrice: '$10',
  end: '',
  endTime: '',
  btn: 'Buy'
},];


const Hero = () => {

  // const [state, setState] = useState('');
  // const navigate = useNavigate();
  // navigate('/detailpage', { state });

  // console.log(state);
  const navigate = useNavigate();

    const goToPage=(items)=>{
      navigate("/detailpage", {state:items});
    }

  return (
    <div className="bg-color hero-section pt-2">
      <div className="container-fluid">
        <div className="row">
          {
            cardItem.map((items) =>
              <div className="col-md-3 col-sm-6 col-12 Boxs" key={items.id}>
                <div className="card pb-2 mb-4" onClick={()=> goToPage(items)} style={{ cursor: 'pointer' }}>
                  <img src={items.cardImage} className="card-img-top img-fluid" alt="..." />
                  <div className="card-body d-flex align-items-center py-1">
                    <div className="footer-img d-flex aligin-items-center">
                      <img className="rounded-circle" src={items.gift} width={18} alt="" />
                    </div>
                    <div className="footer-text text-truncate mx-2" style={{ fontSize: '12px', fontWeight: '500' }}>{items.giftText}</div>
                    <div className="footer-icon"><MdBrightnessAuto /></div>
                  </div>
                  <div className="card-body d-flex align-items-center justify-content-between py-0">
                    <div className="footer-text text-truncate" style={{ fontWeight: '500' }}>{items.name}</div>
                    <div className="card-name-icon"><CgShapeHexagon /></div>
                  </div>
                  <div className="card-body py-1" style={{ fontSize: '12px', fontWeight: '500' }}>{items.timeSale}</div>
                  <div className="card-bid mx-3 p-2" style={{ lineHeight: '15px', height: '40px' }}>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="footer-text text-truncate" style={{ fontSize: '12px', fontWeight: '500' }}>{items.start}</div>
                      <div className="text-black" style={{ fontWeight: '500' }}>{items.startPrice}</div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="footer-text text-truncate" style={{ fontSize: '12px', fontWeight: '500' }}>{items.end}</div>
                      <div className="text-black" style={{ fontSize: '12px', fontWeight: '500' }}>{items.endTime}</div>
                    </div>
                  </div>
                  <div className="mx-3 mt-1" style={{ height: '40px' }}>
                    <div className="w-100 btn btn-buy">{items.btn}</div>
                  </div>
                  <div className="box1"> </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Hero