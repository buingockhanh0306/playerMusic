import { MdOutlineForwardToInbox } from "react-icons/md";
import { AiFillHome, AiOutlineStar } from "react-icons/ai";
import { IoIosTrendingUp } from "react-icons/io";
import { ImFeed } from "react-icons/im";
import { MdBackupTable, MdOutlineEventAvailable } from "react-icons/md";
import { BsCalendar2Minus } from "react-icons/bs";
import { BiUserVoice } from "react-icons/bi";
import * as React from "react";

export const sideBarConstant = {
  home: [
    {
      itemName: "Home",
      itemIcon: <AiFillHome />,
      itemNavigate: '/'
    },
    {
      itemName: "Trends",
      itemIcon: <IoIosTrendingUp />,
      itemNavigate: '/trends'
    },
    {
      itemName: "Feeds",
      itemIcon: <ImFeed />,
      itemNavigate: '/feed'
    },
  ],
  discover: [
    {
      itemName: "New and Notable",
      itemIcon: <MdBackupTable />,
      itemNavigate: '/new'
    },
    {
      itemName: "Release Calendar",
      itemIcon: <BsCalendar2Minus />,
      itemNavigate: '/calendar'
    },
    {
      itemName: "Events",
      itemIcon: <MdOutlineEventAvailable />,
      itemNavigate: '/events'
    },
  ],
  colection: [
    {
      itemName: "Favourite Song",
      itemIcon: <AiOutlineStar />,
      itemNavigate: '/favourite'
    },
    {
      itemName: "Artist",
      itemIcon: <BiUserVoice />,
      itemNavigate: '/artist'
    },
  ],
};
