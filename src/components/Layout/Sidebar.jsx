import React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { MdBrightnessAuto } from "react-icons/md";
import TokenIcon from '@mui/icons-material/Token';
import { CgShapeHexagon } from 'react-icons/cg'
import { FaEthereum } from 'react-icons/fa'
import { SiPolymerproject } from 'react-icons/si'
import { FaResolving } from 'react-icons/fa'

const Sidebar = () => {

    const [openStore, setOpenStore] = React.useState(true);
    const [openComms, setOpenComms] = React.useState(true);
    const [openReports, setOpenReports] = React.useState(true);
    const [openDesigns, setOpenDesigns] = React.useState(true);

    const storeHandleClick = () => {
        setOpenStore(!openStore);
    };
    const commsHandleClick = () => {
        setOpenComms(!openComms);
    };
    const reportHandleClick = () => {
        setOpenReports(!openReports);
    };
    const designHandleClick = () => {
        setOpenDesigns(!openDesigns);
    };

    const item = [{
        id: '1',
        img: 'https://d2vi0z68k5oxnr.cloudfront.net/cf1d2314-9d23-4564-aa76-38ed6b4e77ad/original.png',
        name: 'Art Blocks',

    }, {
        id: '2',
        img: 'https://d2vi0z68k5oxnr.cloudfront.net/6b32b537-c7a7-4820-a640-e39576aa8508/original.png',
        name: 'Mutant Ape Yacht Club',

    }, {
        id: '3',
        img: 'https://d2vi0z68k5oxnr.cloudfront.net/5d705f0f-8553-41cc-babb-973e96dc86d8/original.jpeg',
        name: 'Otherdeed for Otherside',

    }, {
        id: '4',
        img: 'https://d2vi0z68k5oxnr.cloudfront.net/58e9fc18-9c9e-435a-b7dc-bf3c364fad7b/original.png',
        name: 'Meebits',

    }, {
        id: '5',
        img: 'https://d2vi0z68k5oxnr.cloudfront.net/77ffeae9-9666-4da9-9386-a87b73c2b6d7/original.png',
        name: 'Bored Ape Yacht Club',

    }, {
        id: '6',
        img: 'https://d2vi0z68k5oxnr.cloudfront.net/8ff57810-5d2e-4e16-a99e-d35f98f77479/original.png',
        name: 'CLONE X - X TAKASHI MURAKAMI',

    }, {
        id: '7',
        img: 'https://d2vi0z68k5oxnr.cloudfront.net/e13e2f91-b3ec-45b8-b32b-a691966b9791/original.webp',
        name: 'RENGA',

    }, {
        id: '8',
        img: 'https://d2vi0z68k5oxnr.cloudfront.net/75c36624-6eb1-487f-aa5a-1de8c3b71538/original.jpeg',
        name: 'Azuki',

    }, {
        id: '9',
        img: 'https://d2vi0z68k5oxnr.cloudfront.net/42cee507-c4dd-446c-b226-d6c679babc46/original.png',
        name: 'Bored Ape Kennel Club',

    }, {
        id: '10',
        img: 'https://d2vi0z68k5oxnr.cloudfront.net/ba49cf81-38bd-473c-a886-a52206d95f28/original.png',
        name: 'PROOF Collective',

    },];

    return (
        <List
            className="px-3 sidebar-section"
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader
                    component="div"
                    id="nested-list-subheader"
                    style={{ background: "#F1F1F4" }}
                >

                </ListSubheader>
            }
        >
            <ListItemButton onClick={storeHandleClick}>
                <ListItemText primary="Store" />
                {openStore ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openStore} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <div className="store mb-3">
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                            <label className="form-check-label px-1" htmlFor="flexCheckDefault">
                                Buy Now
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="flexCheckChecked" defaultChecked />
                            <label className="form-check-label px-1" htmlFor="flexCheckChecked">
                                Auction
                            </label>
                        </div>
                    </div>
                </List>
            </Collapse>
            <hr className="m-0" />
            <ListItemButton onClick={commsHandleClick}>
                <ListItemText primary="Curation" />
                {openComms ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openComms} timeout="auto" unmountOnExit>
                <div className="curation">
                    <div className="mb-3">
                        <div className="mb-2">
                        <div className="form-check form-check-inline d-flex align-items-center">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
                            <label className="form-check-label px-1">Curated</label>
                        </div>
                        </div>
                        <div className="form-check form-check-inline d-flex align-items-center">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" defaultValue="option2" />
                            <label className="form-check-label px-1">Non-Curated</label>
                        </div>
                    </div>
                </div>
            </Collapse>
            <hr className="m-0" />
            <ListItemButton onClick={reportHandleClick}>
                <ListItemText primary="Price" />
                {openReports ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openReports} timeout="auto" unmountOnExit>
                <div className="price">
                    <form className="row g-3">
                        <div className="col-md-6">
                            <div class="row mb-3">
                                <label className="col-sm-2 col-form-label">$</label>
                                <div className="col-sm-10 p-0">
                                    <input type="text" className="form-control" placeholder="Minimum" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div class="row mb-3">
                                <label className="col-sm-2 col-form-label">-</label>
                                <div className="col-sm-10" style={{ paddingLeft: '0px' }}>
                                    <input type="text" className="form-control" placeholder="Maximum" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </Collapse>
            <hr className="m-0" />
            <ListItemButton onClick={designHandleClick}>
                <ListItemText primary="Collections" />
                {openDesigns ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openDesigns} timeout="auto" unmountOnExit>
                <div className="collection">
                    <TextField
                        className="bg-white mb-3"
                        fullWidth
                        placeholder="Search Colllections"
                        sx={{ borderRadius: '5px' }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
                        }}
                    />
                    {
                        item.map((list) =>
                            <div class="d-flex mb-3" key={list.id}>
                                <div class="p-1"> <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." /></div>
                                <div class="p-1"> <img src={list.img} width={25} height={25} alt="" /> </div>
                                <div class="p-1 text-truncate">{list.name}</div>
                                <div class="ms-auto p-1 footer-icon"><MdBrightnessAuto /></div>
                            </div>
                        )
                    }
                </div>
            </Collapse>
            <hr className="m-0" />
            <ListItemButton onClick={storeHandleClick}>
                <ListItemText primary="Chains" />
                {openStore ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openStore} timeout="auto" unmountOnExit>
                <div className="chain">
                    <div class="d-flex mb-3">
                        <div class="p-1"> <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." /></div>
                        <div class="p-1"><TokenIcon /> </div>
                        <div class="p-1 text-truncate">Crypto.org Chain</div>
                    </div>
                    <div class="d-flex mb-3">
                        <div class="p-1"> <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." /></div>
                        <div class="p-1"> <CgShapeHexagon /> </div>
                        <div class="p-1 text-truncate">Cronos</div>
                    </div>
                    <div class="d-flex mb-3">
                        <div class="p-1"> <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." /></div>
                        <div class="p-1"> <FaEthereum /> </div>
                        <div class="p-1 text-truncate">Ethereum</div>
                    </div>
                    <div class="d-flex mb-3">
                        <div class="p-1"> <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." /></div>
                        <div class="p-1"> <SiPolymerproject /> </div>
                        <div class="p-1 text-truncate">Polygon</div>
                    </div>
                    <div class="d-flex mb-3">
                        <div class="p-1"> <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." /></div>
                        <div class="p-1"> <FaResolving /></div>
                        <div class="p-1 text-truncate">Solana</div>
                    </div>
                </div>
            </Collapse>
            <hr className="m-0" />
            <ListItemButton onClick={storeHandleClick}>
                <ListItemText primary="Categories" />
                {openStore ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openStore} timeout="auto" unmountOnExit>
                <div className="categorie">
                    <div class="d-flex mb-3">
                        <div class="p-1"> <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." /></div>
                        <div class="p-1 text-truncate">Art</div>
                    </div>
                    <div class="d-flex mb-3">
                        <div class="p-1"> <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." /></div>
                        <div class="p-1 text-truncate">Celebrities</div>
                    </div>
                    <div class="d-flex mb-3">
                        <div class="p-1"> <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." /></div>
                        <div class="p-1 text-truncate">Gamming</div>
                    </div>
                    <div class="d-flex mb-3">
                        <div class="p-1"> <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." /></div>
                        <div class="p-1 text-truncate">Sport</div>
                    </div>
                    <div class="d-flex mb-3">
                        <div class="p-1"> <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." /></div>
                        <div class="p-1 text-truncate">Music</div>
                    </div>
                    <div class="d-flex mb-3">
                        <div class="p-1"> <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." /></div>
                        <div class="p-1 text-truncate">Crypto</div>
                    </div>
                    <div class="d-flex mb-3">
                        <div class="p-1"> <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." /></div>
                        <div class="p-1 text-truncate">Cross Chain</div>
                    </div>
                    <div class="d-flex mb-3">
                        <div class="p-1"> <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." /></div>
                        <div class="p-1 text-truncate">PFP</div>
                    </div>
                </div>
            </Collapse>
            <hr className="m-0" />
        </List>
    );
};

export default Sidebar;
