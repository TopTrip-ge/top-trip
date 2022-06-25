import { FC } from "react";
import { Box, Container } from "@mui/material";
import dayjs from "dayjs";
import { Icon } from "components";

export const Copyright: FC = () => (
  <Box sx={{ py: 1, backgroundColor: "custom.orange", color: "custom.white" }}>
    <Container sx={{ display: "flex", alignItems: "center" }}>
      <Icon name="Copyright" sx={{ mr: 2 }} />
      {dayjs().year()} TopTrip, Inc. Все права защищены
    </Container>
  </Box>
);
