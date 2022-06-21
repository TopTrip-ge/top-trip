import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { StyledBox, StyledTypography } from "./destination-card-style";

interface Props {
  destinationsName: string;
  price: number;
  date: string;
  imageURL: string;
}

export const DestinationCard: FC<Props> = ({ destinationsName, price, date, imageURL }) => {
  return (
    <Box
      sx={{
        position: "relative",
        cursor: "pointer",
        zIndex: 0,
        "&:hover": { transform: "scale(1.1)", zIndex: 1 },
        transition: "all 0.2s ease-in-out",
      }}
    >
      <StyledTypography>{`$${price}`}</StyledTypography>
      <StyledBox sx={{ backgroundImage: `url(${imageURL})` }}>
        <Box sx={{ padding: "30px" }}>
          <Typography
            variant="h6"
            component="h6"
            sx={{
              backgroundColor: "custom.grey",
              padding: "0 6px",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            }}
          >
            {destinationsName}
          </Typography>
          <Typography
            sx={{
              backgroundColor: "custom.grey",
              padding: "0 6px",
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
