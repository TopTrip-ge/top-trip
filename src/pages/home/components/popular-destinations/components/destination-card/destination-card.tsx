import { FC, useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { StyledBox, StyledTypography } from "./destination-card-style";

interface Props {
  destinationsName: string;
  price: Promise<string | null>;
  date: string;
  imageURL: string;
}

export const DestinationCard: FC<Props> = ({ destinationsName, price, date, imageURL }) => {
  const [convertedPrice, setConvertedPrice] = useState<string | null>(null);
  useEffect(() => {
    price.then((data) => setConvertedPrice(data));
  }, [price]);
  return (
    <Box
      sx={{
        position: "relative",
        cursor: "pointer",
        zIndex: 0,
        transition: "all 0.2s ease-in-out",
        "&:hover": { transform: "scale(1.1)", zIndex: 1 },
      }}
    >
      <StyledTypography>{convertedPrice}</StyledTypography>
      <StyledBox sx={{ backgroundImage: `url(${imageURL})` }}>
        <Box sx={{ m: "30px", backgroundColor: "custom.grey", borderRadius: "8px" }}>
          <Typography variant="h6" component="h6" sx={{ padding: "0 6px" }}>
            {destinationsName}
          </Typography>
          <Typography sx={{ padding: "0 6px" }}>{date}</Typography>
        </Box>
      </StyledBox>
    </Box>
  );
};
