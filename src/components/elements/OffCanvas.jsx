import React from 'react'
import Hero from "./Hero";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import FilterListIcon from '@mui/icons-material/FilterList';
import Button from '@mui/material/Button';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import AppsIcon from '@mui/icons-material/Apps';
import WindowIcon from '@mui/icons-material/Window';
import { styled } from '@mui/material/styles';
import Sidebar from '../Layout/Sidebar';


const drawerWidth = 326;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'space-between',
    backgroundColor: 'rgb(11, 20, 38)',
    color: '#FFFFFF'
}));

const OffCanvas = () => {

    // const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
<>
<div className="stky">
                <div className="container-fluid explore py-3 text-bold text-white">
                    <h5>Explore</h5>
                </div>
                <div className="container-fluid d-flex justify-content-between">
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <Button variant="outlined"><FilterListIcon sx={{ marginRight: '5px' }} /> Filters</Button>
                    </IconButton>
                    <div className="sorted-grid-btn d-flex align-items-center">
                        <div className="btn-group">
                            <button className="btn btn-soted dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <SwapVertIcon /> Sorted By
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                <li><a className="dropdown-item" href="/">Most Relevent</a></li>
                                <li><a className="dropdown-item" href="/">Recently Listed</a></li>
                                <li><a className="dropdown-item" href="/">Newest</a></li>
                                <li><a className="dropdown-item" href="/">Price: Low to High</a></li>
                                <li><a className="dropdown-item" href="/">Price: High to Low</a></li>
                                <li><a className="dropdown-item" href="/">Auction ended Soon</a></li>
                                <li><a className="dropdown-item" href="/">Most Likes</a></li>
                                <li><a className="dropdown-item" href="/">Most Views</a></li>
                            </ul>
                        </div>
                        <div className="btn-group d-none d-md-block" role="group" aria-label="Basic outlined example">
                            <button type="button" className="btn btn-outline-primary round-start"><WindowIcon /></button>
                            <button type="button" className="btn btn-outline-primary round-end"><AppsIcon /></button>
                        </div>
                    </div>

                </div>
            </div>
        <div className='bg-color container-fluid'>
            
            <Box sx={{ display: 'flex' }}>
                <AppBar open={open}>
                </AppBar>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                >
                    <DrawerHeader>
                        <div className="filter">
                            <h5>Filter</h5>
                        </div>
                        <IconButton onClick={handleDrawerClose}>
                            <MenuOpenIcon className='text-white' />
                        </IconButton>
                    </DrawerHeader>
                    <hr className="m-0" />
                    <Sidebar />
                </Drawer>
                <Main open={open}>
                    <DrawerHeader />
                    <div className='mains-content'
                    >
                            <Hero />
                    </div>
                </Main>
            </Box>
        </div>
</>

    )
}

export default OffCanvas