import React from 'react';
import {Box, Button, Typography} from "@mui/material";
import {numberWithCommas} from "../../../untils/numberWithCommas";
import {IListSongProps} from "../../../Types/listSong";
interface ICardProps{
    cardData?: IListSongProps
}
const CardBanner: React.FC<ICardProps> = ({cardData}): JSX.Element => {
    return (
        <Box sx={{position: "relative", marginTop: "20px"}}>
            <Box
                component="img"
                sx={{
                    height: "300px",
                    width: "100%",
                    borderRadius: 1.4,
                }}
                alt=""
                src={cardData?.thumbnail}
            />

            <Box sx={{
                position: "absolute",
                top: "50%",
                left: "50px",
                transform: "translate(0, -50%)",
                lineHeight: "80px"
            }}>
                <Typography sx={{color: 'text.secondary'}}>{cardData?.artists?.map(artist => artist.name)}</Typography>
                <Typography
                    sx={{display: "inline",
                        color: 'text.primary',
                        fontWeight: '600',
                        fontSize: "36px",
                    }}
                >
                    {cardData?.title}
                </Typography>

                <Box>
                    <Button
                        sx={{color: "#fff",
                            background: "#000",
                            marginRight: "20px",
                            padding: "8px 30px",
                            '&:hover':{
                            color: "#fff", background: "#000"
                        }}}
                        variant="contained">
                        Play
                    </Button>
                    <Button sx={{
                            color: "#000",
                            borderColor: "#000",
                            padding: "8px 30px",
                            '&:hover':{
                                color: "#000",
                                borderColor: "#000"
                            }}}
                        variant="outlined">
                        Follow
                    </Button>
                </Box>

            </Box>

            <Box sx={{
                position: "absolute",
                right: "20px",
                bottom: "20px",
                textAlign: "right",
                color:"#fff",
            }}>
                <Typography sx={{marginBottom: "10px"}}>Số lượt nghe trong tháng</Typography>
                <Typography sx={{fontSize: "16px", letterSpacing: "1.4px"}}>{numberWithCommas(37488782)}</Typography>
            </Box>
        </Box>

    );
};

export default CardBanner;