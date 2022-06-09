import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Link, Typography } from "@mui/material";
import { AddZeroToNumber } from "../../../untils/addZeroToNumber";
import {IListSongProps} from "../../../Types/listSong";

interface IPlayListProps {
  listSong?: IListSongProps[],

}
const PlayList: React.FC<IPlayListProps> = ({ listSong }): JSX.Element => {
    const setLocal = (key: string)=>{
        if (typeof window !== 'undefined') {
            localStorage.setItem('keyValue', key);
        }
    }
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          marginTop: "30px",
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
          Play List
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
          <Typography>Show All </Typography>
        </Link>
      </Box>

      <TableContainer
        component={Paper}
        sx={{ backgroundColor: "primary.main", boxShadow: "none" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ color: "text.secondary" }}>
              <TableCell sx={{ border: 0 }}>#</TableCell>
              <TableCell sx={{ border: 0 }} align="center">
                TITLE
              </TableCell>
              <TableCell sx={{ border: 0 }} align="center">
                ARTIST
              </TableCell>
              <TableCell sx={{ border: 0 }} align="center">
                TIME
              </TableCell>
              {/* <TableCell sx={{ border: 0 }} align="center">
                ALBUM
              </TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {listSong?.map((song: IListSongProps, index: number) => (
              <TableRow
                key={index}
                onClick={()=>setLocal(song.key)}
                sx={{
                  "&:hover": {
                    background: "#fff",
                    cursor: "pointer",
                  },
                }}
              >
                <TableCell sx={{ border: 0 }} component="th" scope="row">
                  {AddZeroToNumber(index + 1)}
                </TableCell>
                <TableCell sx={{ border: 0 }} align="center">
                  {song.title}
                </TableCell>
                <TableCell sx={{ border: 0 }} align="center">
                  {song?.artists?.map((artist) => artist.name.concat(', '))}
                </TableCell>
                <TableCell sx={{ border: 0 }} align="center">
                  {song.duration}
                </TableCell>
                {/* <TableCell sx={{ border: 0 }} align="center">
                  {song.album}
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PlayList;
