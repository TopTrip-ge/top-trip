import { FC } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import uniqid from "uniqid";
import EmailIcon from "@mui/icons-material/Email";
import CopyrightIcon from "@mui/icons-material/Copyright";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PlaceIcon from "@mui/icons-material/Place";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { Icon as IconComponent, IconTypes } from "components/icon";

import { Footer as StyledFooter } from "./footer-style";

interface Icon {
  icon: IconTypes;
}

const ICONS: Icon[] = [
  {
    icon: "Instagram",
  },
  {
    icon: "Facebook",
  },
  {
    icon: "Twitter",
  },
  {
    icon: "Telegram",
  },
];

export const Footer: FC = () => {
  return (
    <StyledFooter>
      <Container>
        <Grid container direction="row" justifyContent="space-evenly" alignItems="center" sx={{ padding: "50px 0" }}>
          <Grid item sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <PlaceIcon sx={{ mr: 1 }} /> 12121 Тбилиси, Грузия, ул. Пушкина, 21
            </Typography>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <LocalPhoneIcon sx={{ mr: 1 }} />
              +1 223 4232 1
            </Typography>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <EmailIcon sx={{ mr: 1 }} />
              info@toptrip.ge
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography sx={{ display: "flex", alignItems: "center", textAlign: "left" }}>
              <SupportAgentIcon sx={{ mr: 1 }} />
              +23232 2323
            </Typography>
            <Typography>Ежедневно с 9:00 до 20:00 </Typography>
          </Grid>
          <Grid item sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {ICONS.map(({ icon }) => (
              <Typography key={uniqid()} sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                <IconComponent name={icon} sx={{ mr: 1 }} />
                {icon}
              </Typography>
            ))}
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "10px 20px",
          backgroundColor: "custom.orange",
          color: "custom.black",
        }}
      >
        <CopyrightIcon sx={{ mr: 2 }} />
        {new Date().getFullYear()} TopTrip, Inc. Все права защищены
      </Box>
    </StyledFooter>
  );
};
