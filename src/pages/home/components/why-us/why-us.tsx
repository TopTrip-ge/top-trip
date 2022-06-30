import { FC } from "react";
import { Container, Grid, Typography } from "@mui/material";
import uniqid from "uniqid";
import { Icon } from "components/icon";
import { Section } from "components/section";
import { LOCALIZATION_NAMESPACES } from "enums";
import { Reason } from "./why-us-interfaces";
import { useWhyUs } from "./why-us-hooks";

export const WhyUs: FC = () => {
  const { t, getIcon } = useWhyUs();

  return (
    <Section>
      <Container>
        <Typography sx={{ fontSize: { xs: "28px", md: "50px" }, mb: 5 }} variant="h3" align="center">
          {t("title.why-us", { ns: LOCALIZATION_NAMESPACES.HOME_SECTIONS })}
        </Typography>
        <Grid
          container
          sx={{ flexGrow: 1, justifyContent: { md: "space-evenly", xs: "left" }, gap: 3 }}
          direction="row"
          columns={{ xs: 2, sm: 9, md: 12 }}
        >
          {(t("why-us") as Reason[]).map(({ reasonId, reason }) => (
            <Grid item xs={4} key={uniqid()}>
              <Typography
                component="p"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  fontWeight: "fontWeightBold",
                  gap: 1,
                }}
              >
                <Icon
                  name={getIcon(reasonId)}
                  sx={{ color: "custom.orange", width: { md: "40px", sm: "30px" }, height: { md: "40px", sm: "30px" } }}
                />
                {reason}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};
