import { FC } from "react";
import { Box } from "@mui/material";
import dayjs from "dayjs";
import { Icon } from "components/icon";

export const Copyright: FC = () => (
  <footer>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "custom.orange",
        color: "custom.white",
      }}
    >
      <Icon name="Copyright" sx={{ mr: 2 }} />
      {dayjs().year()} TopTrip, Inc. Все права защищены
    </Box>
  </footer>
);
