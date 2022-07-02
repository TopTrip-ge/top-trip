import { FC } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import uniqid from "uniqid";
import { Icon as IconComponent } from "components/icon";
import { useTranslation } from "react-i18next";
import { LOCALIZATION_NAMESPACES } from "enums/localization";
import { Icon } from "./footer-interfaces";
import { Copyright } from "./components";
import { Footer as StyledFooter } from "./footer-style";
import { useFooter } from "./footer-hooks";

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
  const { t } = useTranslation();
  const { endOfPageRef } = useFooter();

  return (
    <StyledFooter ref={endOfPageRef}>
      <Container>
        <Grid
          container
          alignItems="center"
          sx={{
            py: 4,
            flexGrow: 1,
            justifyContent: { md: "space-evenly", xs: "center" },
            display: { sm: "flex" },
            gap: 2,
            alignItems: { sm: "center" },
          }}
          direction="row"
          columns={{ xs: 3, sm: 12, md: 10 }}
        >
          <Grid item xs={3} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <IconComponent name="Place" sx={{ mr: 1 }} />
              {t("address", { ns: LOCALIZATION_NAMESPACES.GLOSSARY })}
            </Typography>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <IconComponent name="LocalPhone" sx={{ mr: 1 }} />
              +1 223 4232 1
            </Typography>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <IconComponent name="Email" sx={{ mr: 1 }} />
              info@toptrip.ge
            </Typography>
          </Grid>
          <Grid
            item
            xs={3}
            sx={{ display: "flex", flexDirection: "column", alignItems: { xs: "flex-start", md: "center" } }}
          >
            <Typography sx={{ display: "flex", alignItems: "center", textAlign: "left" }}>
              <IconComponent name="SupportAgent" sx={{ mr: 1 }} />
              +23232 2323
            </Typography>
            <Typography>{t("support-time", { ns: LOCALIZATION_NAMESPACES.GLOSSARY })} </Typography>
          </Grid>
          <Grid item xs={3} sx={{ display: "flex", justifyContent: { xs: "flex-start", md: "center" } }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {ICONS.map(({ icon }) => (
                <Typography key={uniqid()} sx={{ display: "flex", cursor: "pointer" }}>
                  <IconComponent name={icon} sx={{ mr: 1 }} />
                  {icon}
                </Typography>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Copyright />
    </StyledFooter>
  );
};
