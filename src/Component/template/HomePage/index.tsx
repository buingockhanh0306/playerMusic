import React from "react";
import { Box, Link, Typography } from "@mui/material";
import { ImFire } from "react-icons/im";
import { RiArrowRightSLine } from "react-icons/ri";
import CardBanner from "../../organisms/CardBanner";
import PlayList from "../../organisms/PlayList";
import {IListSongProps} from "../../../Types/listSong";


interface IHomePageProps{
    listSong?: IListSongProps[],
    cardData?: IListSongProps,

}
const HomePage: React.FC<IHomePageProps> = ({listSong, cardData}): JSX.Element => {
  return (
    <Box>
      <Typography sx={{ display: "inline", color: "text.secondary" }}>
        What&apos;s hot
      </Typography>
      <Box
        sx={{ color: "#F74F2C", display: "inline-block", marginLeft: "4px" }}
      >
        <ImFire />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            display: "inline",
            color: "text.primary",
            fontWeight: "600",
            fontSize: "36px",
          }}
        >
          Trending
        </Typography>
        <Link
          sx={{
            display: "flex",
            alignItems: "center",
            color: "text.secondary",
            "&:hover": {
              cursor: "pointer",
              textDecoration: "none",
            },
          }}
        >
          <Typography>More </Typography>
          <RiArrowRightSLine />
        </Link>
      </Box>
      <CardBanner cardData={cardData} />
      <PlayList listSong={listSong} />
    </Box>
  );
};

export default HomePage;
