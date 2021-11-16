import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/HomeTwoTone';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CallIcon from '@mui/icons-material/Call';
import { Link } from '@mui/material';
import logo from '../../public/images/logo.png';
import { Outlet } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import Contact from '../contact/contact'
import CustomizedBreadcrumbs from '../../components/breadcrumb'
import { About } from '../about/about';
import './nav.css';
import SignUp from '../signup';

const drawerWidth = 240;

function Framework(props) {
    const path = document.location.pathname.split('/').slice(1);

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar >
                <img src={logo} style={{ width: '100%', height: '100%' }} />
            </Toolbar>
            <Divider />
            <List>
                <ListItem button key={'Home'}>
                    <HomeIcon sx={{ mr: '25px' }} />
                    <ListItemText primary={'Home'} />
                </ListItem>
                <ListItem button key={'Income'}>
                    <AssessmentIcon sx={{ mr: '25px' }} />
                    <ListItemText primary={'Income'} />
                </ListItem>
                <ListItem button key={'Expense'}>
                    <AssessmentIcon sx={{ mr: '25px' }} />
                    <ListItemText primary={'Expense'} />
                </ListItem>
                <ListItem button key={'Overview'}>
                    <AssessmentIcon sx={{ mr: '25px' }} />
                    <ListItemText primary={'Overview'} />
                    </ListItem>
                    <ListItem button key={'About Us'}>
                    <AssessmentIcon sx={{ mr: '25px' }} />
                    <ListItemText primary={'About Us'} />
                </ListItem>
                <ListItem button key={'Contact Us'}>
                    <CallIcon sx={{ mr: '25px' }} />
                    <ListItemText primary={'Contact US'} />
                </ListItem>
            </List>

        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >

                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        Finance Mantra
                    </Typography>
                    <HomeIcon className="icon" />
                    <NotificationsIcon className="icon" />
                    <SearchIcon className="icon" />
                    <div className="profile">
                        <AccountCircleIcon />Pankil
                    </div>




                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="navigation items"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="persistent"
                    open
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}

                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="div"
                sx={{ flexGrow: 1, p: 3, height: '950px', overflow: 'auto', width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >

                <Toolbar />
                <CustomizedBreadcrumbs path={path} />
                <Box
                    component="main"
                    sx={{ width: '100%', overflow: 'auto' }}

                >
<<<<<<< Updated upstream:client/src/pages/framework/nav.js
                   <About />
=======
                    <About />
>>>>>>> Stashed changes:src/pages/framework/nav.js
                </Box>
            </Box>
            <AppBar position='fixed' sx={{
                bottom: 0, top: 'inherit', bgcolor: 'black', width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
            }}
                component='footer'
            >
                <Toolbar variant='dense'>
                    <Typography variant="small" noWrap component="div" sx={{ margin: 'auto' }}>
                        Copyright @ 2021 | Finance Mantra
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box >

    );
}


export default Framework;
