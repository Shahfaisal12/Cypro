import React from 'react'
import { BsBoxArrowUpRight, BsFillEyeFill, BsFillFlagFill, BsHeart } from 'react-icons/bs'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { RiShareForwardFill } from 'react-icons/ri'
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FiMoreHorizontal } from 'react-icons/fi';
import {CgShapeHexagon } from 'react-icons/cg'
import { MdBrightnessAuto } from "react-icons/md";
import { FaCopy } from 'react-icons/fa'
import Box from '@mui/joy/Box';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import Typography from '@mui/joy/Typography';
import { useLocation, useNavigate } from 'react-router-dom';


    const DetailPage = () => {

        ///// USE NAVIGATE //////
    const location = useLocation();
    console.log(location)
    const value= location.state;

    const [index, setIndex] = React.useState(0);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();
    // const {id, cardImage, gift, giftText, name, icon, timeSale, start, startPrice, end, endTime, btn } = state;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="bg-white detail-page py-5">
            <div className="container pt-5">
                <div className="row pt-5">
                    <div className="col-md-5">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card mb-3">
                                    <img src={value.cardImage} className="card-img-top" alt="..." />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="card p-4 mb-3">
                                    <div className="d-flex justify-content-between">
                                        <div className="card-text fw-bold">
                                            {value.name}
                                        </div>
                                        <div className="card-icon">
                                            <BsBoxArrowUpRight className='fw-bold fs-5' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="card p-4 mb-3">
                                    <div className="d-flex justify-content-between">
                                        <div className="card-text fw-bold">
                                            View Cronoscan details
                                        </div>
                                        <div className="card-icon">
                                            <BsBoxArrowUpRight className='fw-bold fs-5' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-7">
                        <div className="detail-section mb-3">
                            <a href="/" className='text-decoration-none'>
                                <div className="btn-back d-flex align-items-center" onClick={()=>navigate(-1)}>
                                    <ArrowLeftIcon className='' /> &nbsp;
                                    <div className="back-text">
                                        Back
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="d-flex justify-content-between mb-3">
                            <div className="menu-row d-flex align-items-center">
                                <div className="heart d-flex align-items-center">
                                    <BsHeart className='fs-4' />
                                    <div className="value mx-2">1</div>
                                </div>
                                <div className="eye d-flex align-items-center mx-2">
                                    <BsFillEyeFill className='fs-4' />
                                    <div className="value mx-2">194</div>
                                </div>
                                <div className="shair d-flex align-items-center">
                                    <RiShareForwardFill className='fs-5' />
                                    <div className="value mx-2">Shair</div>
                                </div>
                            </div>
                            <div className="menu">
                                <IconButton
                                    aria-label="more"
                                    id="long-button"
                                    aria-controls={open ? 'long-menu' : undefined}
                                    aria-expanded={open ? 'true' : undefined}
                                    aria-haspopup="true"
                                    onClick={handleClick}
                                >
                                    <FiMoreHorizontal />
                                </IconButton>
                                <Menu
                                    id="long-menu"
                                    MenuListProps={{
                                        'aria-labelledby': 'long-button',
                                    }}
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    PaperProps={{
                                        style: {
                                            width: '20ch',
                                        },
                                    }}
                                >
                                    <MenuItem onClick={handleClose}>
                                        <BsFillFlagFill /> &nbsp; Report
                                    </MenuItem>

                                </Menu>
                            </div>
                        </div>
                        <div className="chain d-flex align-items-center mb-3">
                            <div className="title">Chain: Cronos</div> &nbsp;
                            <CgShapeHexagon />
                        </div>
                        <div className="row mb-5">
                            <div className="col-md-7">
                                <div className="d-flex align-items-center">
                                    <div className="img position-relative">
                                        <img src="https://d2vi0z68k5oxnr.cloudfront.net/dd93830a-c7a3-4dc9-8c5f-684f197c25bb/original.png?d=sm-logo" width={40} height={40} alt="" />
                                        <div className="footer-icon position-absolute" style={{ bottom: '0', left: '32px' }}><MdBrightnessAuto /></div>
                                    </div>
                                    <div className="creator mx-3">
                                        <div className="create d-block">Creator</div>
                                        <div className="d-flex align-items-center">
                                            <span className="d-inline-block text-truncate" style={{ maxWidth: '130px' }}>0x45846516131a300bcc3c37ec0e2d38edded143ef</span> . <span className="d-inline-block text-truncate" style={{ maxWidth: '130px' }}>0x45846516131a300bcc3c37ec0e2d38edded143ef</span> &nbsp; <FaCopy className='fs-5' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="d-flex align-items-center">
                                    <div className="img position-relative">
                                        <img src={value.gift} className="rounded-circle" width={40} height={40} alt="" />
                                        <div className="footer-icon position-absolute" style={{ bottom: '0', left: '34px' }}><MdBrightnessAuto /></div>
                                    </div>
                                    <div className="creator mx-3">
                                        <div className="create d-block">Creator</div>
                                        <div className="d-flex align-items-center">
                                            <span className="d-inline-block text-truncate" style={{ maxWidth: '150px' }}>{value.giftText}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="py-2 w-100 h2 mb-0">{value.name}</div>
                            <div className="p-2 flex-shrink-1"><button type="button" className="btn btn-outline-dark rounded-pill fw-bold text-muted" style={{ fontSize: '12px' }}>Marketplace</button></div>
                        </div>
                        <div className="accept h5 fw-bold text-muted mb-5">Accepting Offers</div>
                        <p className='mb-5'>Celebrate Cronos World Tour ! This is a commemorative NFT. Collectible created in September 2022 on Cronos mainnet during the Token 2049 Singapore conference.</p>
                        <div className="d-flex mb-5">
                            <div className="px-1 py-2 ml-3 btn-custom">Alt</div>
                            <div className="px-1 py-2 mx-2 btn-custom">Cross Chain</div>
                        </div>

                        <div className="pills-row">
                            <Box
                                sx={{
                                    bgcolor: 'background.body',
                                    flexGrow: 1,
                                    m: -3,
                                    p: 3,
                                    overflowX: 'hidden',
                                    borderRadius: 'md',
                                }}
                            >
                                <Tabs
                                    aria-label="Pipeline"
                                    value={index}
                                    onChange={(event, value) => setIndex(value)}
                                    sx={{ '--Tabs-gap': '0px', mx: 'auto' }}
                                >
                                    <TabList
                                        variant="plain"
                                        sx={{
                                            alignSelf: 'flex-start',
                                            [`& .${tabClasses.root}`]: {
                                                bgcolor: 'transparent',
                                                boxShadow: 'none',
                                                '&:hover': {
                                                    bgcolor: 'transparent',
                                                },
                                                [`&.${tabClasses.selected}`]: {
                                                    color: 'primary.plainColor',
                                                    fontWeight: 'lg',
                                                    '&:before': {
                                                        content: '""',
                                                        display: 'block',
                                                        position: 'absolute',
                                                        zIndex: 1,
                                                        bottom: '-1px',
                                                        left: 'var(--List-item-paddingLeft)',
                                                        right: 'var(--List-item-paddingRight)',
                                                        height: '3px',
                                                        borderTopLeftRadius: '3px',
                                                        borderTopRightRadius: '3px',
                                                        bgcolor: 'primary.500',
                                                    },
                                                },
                                            },
                                        }}
                                    >
                                        <Tab>Ownership</Tab>
                                        <Tab>History</Tab>
                                        <Tab>Bids</Tab>
                                        <Tab>Offers</Tab>
                                    </TabList>
                                    <Box
                                        sx={(theme) => ({
                                            px: 1.5,
                                            py: 2,
                                        })}
                                    >
                                        <TabPanel value={0}>

                                            <div className="d-flex justify-content-between pt-2">
                                                <div className="left d-flex align-items-center">
                                                    <img src="https://d2vi0z68k5oxnr.cloudfront.net/c7bb4d54-109e-4b6a-97a0-e3b433ba0204/original.jpeg?d=sm-logo" className='rounded-circle' width={40} height={40} alt="" style={{ marginRight: '8px' }} />
                                                    <div className="text">
                                                        <div className="owner text-muted text-small">Owner</div>
                                                        <div className="owner-text fw-bold">Giaghezz</div>
                                                    </div>
                                                </div>
                                                <div className="right d-flex align-items-center">
                                                    <div className="d-inline-block text-truncate" style={{ maxWidth: '150px' }}>cro16mqhhzpqd829xx9cm2dxd0eptj4zkmd59eyz46</div> &nbsp; <FaCopy className='fs-5' />
                                                </div>
                                            </div>

                                        </TabPanel>
                                        <TabPanel value={1}>
                                            <div className="d-flex justify-content-between pt-2">
                                                <div className="left d-flex align-items-center">
                                                    <img src="https://crypto.com/nft/assets/images/profile/default-profile.jpg?d=sm-logo" className='rounded-circle' width={40} height={40} alt="" style={{ marginRight: '8px' }} />
                                                    <div className="text">
                                                        <div className="owner text-muted text-small">2 hours ago</div>
                                                        <div className="owner-text">Bought by stephan1685 for $32.00</div>
                                                    </div>
                                                </div>
                                                <div className="right d-flex align-items-center">
                                                    <a href="/" className='text-decoration-none'>View Details</a>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="d-flex justify-content-between pt-2">
                                                <div className="left d-flex align-items-center">
                                                    <img src="https://crypto.com/nft/assets/images/profile/default-profile.jpg?d=sm-logo" className='rounded-circle' width={40} height={40} alt="" style={{ marginRight: '8px' }} />
                                                    <div className="text">
                                                        <div className="owner text-muted text-small">9 hours ago</div>
                                                        <div className="owner-text">Deposited to Giaghezz</div>
                                                    </div>
                                                </div>
                                                <div className="right d-flex align-items-center">
                                                    <a href="/" className='text-decoration-none'>View Details</a>
                                                </div>
                                            </div>
                                        </TabPanel>
                                        <TabPanel value={2}>
                                            <div className="left d-flex align-items-center">
                                                <img src="https://crypto.com/nft/assets/images/profile/default-profile.jpg?d=sm-logo" className='rounded-circle' width={40} height={40} alt="" style={{ marginRight: '8px' }} />
                                                <div className="text">
                                                    <div className="owner text-muted text-small">4 hours ago</div>
                                                    <div className="owner-text">stephan1685 bid for $32.00</div>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="left d-flex align-items-center">
                                                <img src="https://crypto.com/nft/assets/images/profile/default-profile.jpg?d=sm-logo" className='rounded-circle' width={40} height={40} alt="" style={{ marginRight: '8px' }} />
                                                <div className="text">
                                                    <div className="owner text-muted text-small">5 hours ago</div>
                                                    <div className="owner-text">Flash  bid for $21.00</div>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="left d-flex align-items-center">
                                                <img src="https://crypto.com/nft/assets/images/profile/default-profile.jpg?d=sm-logo" className='rounded-circle' width={40} height={40} alt="" style={{ marginRight: '8px' }} />
                                                <div className="text">
                                                    <div className="owner text-muted text-small">6 hours ago</div>
                                                    <div className="owner-text">ChokoGaming bid for $11.00</div>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="left d-flex align-items-center">
                                                <img src="https://d2vi0z68k5oxnr.cloudfront.net/2cfda56e-8a45-422f-9041-21a1e16ad789/original.jpg?d=sm-logo" className='rounded-circle' width={40} height={40} alt="" style={{ marginRight: '8px' }} />
                                                <div className="text">
                                                    <div className="owner text-muted text-small">7 hours ago</div>
                                                    <div className="owner-text">George crypto  bid for $1.00</div>
                                                </div>
                                            </div>
                                        </TabPanel>
                                        <TabPanel value={3}>
                                            <Typography
                                                level="h6"
                                                component="div"
                                            >
                                                No history available
                                            </Typography>
                                        </TabPanel>
                                    </Box>
                                </Tabs>
                            </Box>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailPage