import { FC } from "react";
import { Box } from "@mui/material";
import { Icon } from "components/icon";

interface Props {
  marginTop?: number | string;
}

export const CheckMark: FC<Props> = ({ marginTop }) => (
  <Box
    sx={{
      display: "flex",
      flexShrink: 0,
      alignItems: "center",
      justifyContent: "center",
      width: "30px",
      height: "30px",
      borderRadius: "50%",
      backgroundColor: "custom.orange",
      mt: marginTop,
    }}
  >
    <Icon name="Done" sx={{ color: "custom.white" }} />
  </Box>
);
