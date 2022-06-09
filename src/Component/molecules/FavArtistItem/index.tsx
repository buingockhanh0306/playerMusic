import React from 'react';
import {Avatar, IconButton, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import {BiDotsHorizontalRounded} from 'react-icons/bi'

const FavActiveItem = () => {
    return (
       <ListItem
           secondaryAction={
               <IconButton edge="end" aria-label="delete">
                   <BiDotsHorizontalRounded />
               </IconButton>
            }
           sx={{padding: '0px', margin: '4px', '&:hover':{cursor: 'pointer'}}}
       >

           <ListItemAvatar>
               <Avatar alt="Remy Sharp" src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/5/26/913299/Ngan-Ha25.jpg" />
           </ListItemAvatar>
           <ListItemText primary="Alan Walker" secondary="196 songs in library" />
       </ListItem>
    );
};

export default FavActiveItem;