import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { StyledBox } from "./destination-card-style";

interface Props {
  destinationsName: string;
  price: number;
  date: string;
  imageURL: string;
}

export const DestinationCard: FC<Props> = ({ destinationsName, price, date, imageURL }) => {
  return (
    <Box sx={{ position: "relative" }}>
      <Typography
        sx={{
          position: "absolute",
          color: "#fff",
          backgroundColor: "#000",
          padding: "4px",
          borderRadius: "10px",
          top: "20px",
          left: "-20px",
        }}
      >{`$${price}`}</Typography>
      <StyledBox sx={{ backgroundImage: `url(${imageURL})` }}>
        <Box sx={{ padding: "30px" }}>
          <Typography
            variant="h6"
            component="h6"
            sx={{
              backgroundColor: "#ADADAD",
              padding: "0 5px",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            }}
          >
            {destinationsName}
          </Typography>
          <Typography
            sx={{
              backgroundColor: "#ADADAD",
              padding: "0 5px",
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px",
            }}
          >
            {date}
          </Typography>
        </Box>
      </StyledBox>
    </Box>
  );
};
