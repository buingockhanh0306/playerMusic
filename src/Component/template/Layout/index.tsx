import * as React from "react";
import {
  styled,
  List,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  ListItem,
  IconButton,
  Typography,
  Toolbar,
  AppBarProps as MuiAppBarProps,
  Drawer,
  Box
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import { FcMenu } from "react-icons/fc";
import { sideBarConstant } from "../../../constants/sideBarConstant";
import { AiOutlineMenuFold } from "react-icons/ai";
import {MdOutlineArrowForwardIos, MdOutlineArrowBackIos} from "react-icons/md"
import SearchBar from "../../organisms/SearchBar";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import MusicPlayer from "../../organisms/MusicPlayer";
import FavArtist from "../../organisms/FavArtist";
import {IListSongProps} from "../../../Types/listSong";
import NhacCuaTui from "nhaccuatui-api-full";

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
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
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}
type DashboardLayoutProps = {
  children: React.ReactNode,
};

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Layout({children}: DashboardLayoutProps) {
  const [open, setOpen] = React.useState(true);
  const router = useRouter()
  const [song, setSong] = useState<IListSongProps>()


  useEffect(()=>
  {
    if (typeof window !== 'undefined') {
      const a = localStorage.getItem('keyValue')
      console.log(a)
    } else {
      console.log('we are running on the server');
    }
    const getSong = async ()=>
    {
      const songs = await NhacCuaTui.getSong("h8Qm7ohTx9aH")
      setSong(songs.song)
      console.log(songs.song)
    }
    getSong()
  },[])

  const handleBgBtn = (route: string)=> {
    if(router.pathname === route){
      return "#000"
    }
  }

  const handleColorBtn = (route: string)=> {
    if(router.pathname === route){
      return "#fff"
    }
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClickNav = (link: string)=>{
    router.push(link);
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        sx={{
        display: "flex",
        width: "100%",
        backgroundColor: 'primary.main',
        boxShadow: "none"
      }}>
        <Toolbar>
          <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              sx={{ mr: 1, ...(open && { display: "none" }) }}
          >
            <FcMenu />
          </IconButton>
          <Box color={"#fff"}>
            <IconButton sx={{ mr: 2, ...(open && { marginLeft: drawerWidth + 'px' }) }}>
              <MdOutlineArrowBackIos/>
            </IconButton>
            <IconButton>
              <MdOutlineArrowForwardIos/>
            </IconButton>
          </Box>
          <SearchBar/>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            border: "none",
          }
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }}>
          <Box
              component="img"
              sx={{
                height: 50,
                width: 100,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
              }}
              alt=""
              // src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/ZingMP3logo.svg/2560px-ZingMP3logo.svg.png"
          />
          <IconButton onClick={handleDrawerClose}>
            <AiOutlineMenuFold />
          </IconButton>
        </DrawerHeader>

        <List>
          {sideBarConstant.home.map((item, index) => (
            <ListItem key={index} sx={{'&:hover': {
               // borderRight: '4px solid #000',
              }}}>
              <ListItemButton
                  sx={{
                    borderRadius: 8,
                    background: handleBgBtn(item.itemNavigate),
                    color: handleColorBtn(item.itemNavigate),
                    "& .MuiListItemIcon-root": {
                      color: handleColorBtn(item.itemNavigate)
                    },
                    '&:hover': {
                  background: "#000",
                  color: "#fff",
                  "& .MuiListItemIcon-root": {
                    color: "white"
                  }
                }}}
                onClick={()=>handleClickNav(item.itemNavigate)}
              >
                <ListItemIcon>{item.itemIcon}</ListItemIcon>
                <ListItemText primary={item.itemName} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <List>
          <Typography variant={"h6"} ml={2} noWrap component="div">
            Discover
          </Typography>
          {sideBarConstant.discover.map((item, index) => (
            <ListItem key={index}>
              <ListItemButton
                  sx={{ borderRadius: 8,
                  background: handleBgBtn(item.itemNavigate),
                  color: handleColorBtn(item.itemNavigate),
                  "& .MuiListItemIcon-root": {
                    color: handleColorBtn(item.itemNavigate)
                  },
                  '&:hover': {
                  background: "#000",
                  color: "#fff",
                  "& .MuiListItemIcon-root": {
                    color: "white"
                  }
                }}}
                onClick={()=>handleClickNav(item.itemNavigate)}

              >
                <ListItemIcon>{item.itemIcon}</ListItemIcon>
                <ListItemText primary={item.itemName} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <List>
          <Typography variant={"h6"} ml={2} noWrap component="div">
            Collection
          </Typography>
          {sideBarConstant.colection.map((item, index) => (
            <ListItem key={index}>
              <ListItemButton
                  sx={{ borderRadius: 8,
                  background: handleBgBtn(item.itemNavigate),
                  color: handleColorBtn(item.itemNavigate),
                  "& .MuiListItemIcon-root": {
                    color: handleColorBtn(item.itemNavigate)
                  },
                  '&:hover': {
                  background: "#000",
                  color: "#fff",
                  "& .MuiListItemIcon-root": {
                    color: "white"
                  }
                }}}
                onClick={()=>handleClickNav(item.itemNavigate)}
              >
                <ListItemIcon>{item.itemIcon}</ListItemIcon>
                <ListItemText primary={item.itemName} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Main open={open} sx={{ backgroundColor: 'primary.main'}}>
        <DrawerHeader />
        <Box sx={{display: "flex", flexDirection: "row", gap: 4}}>
          <Box sx={{width: "66.6%"}}>
            {children}
          </Box>
          <Box sx={{width: "33.7%"}}>
            <Box sx={{width: "auto", position: "fixed",top: '60px', bottom: '20px'}}>
              <Typography
                  sx={{display: "block",
                    color: 'text.primary',
                    fontWeight: '600',
                    fontSize: "24px"
                  }}
              >
                Favourite Artist
              </Typography>
              <FavArtist/>
              <MusicPlayer musicPlay={song}/>
            </Box>
          </Box>
        </Box>
      </Main>
    </Box>
  );
}
