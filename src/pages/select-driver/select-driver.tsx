import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Container, Typography } from "@mui/material";
import { useRecoilValue } from "recoil";
import { MainLayout } from "layouts/main";
import { Section } from "components/section";
import { searchValuesStateSelector } from "store/selectors";
import { calcDistance } from "utils";
import { LANGUAGES } from "enums";
import { SearchComponent } from "pages/home/components/search/components/search-component";
import { Drivers } from "./components/drivers/drivers";

export const SelectDriver: FC = () => {
  const { from = null, where = null } = useRecoilValue(searchValuesStateSelector) ?? {};
  const { i18n } = useTranslation();

  return (
    <MainLayout>
      <Section>
        <Container>
          <SearchComponent lang={i18n.language} />
          <Typography sx={{ py: 6, fontSize: "24px", fontWeight: "fontWeightBold" }}>
            {calcDistance(i18n.language as LANGUAGES, from, where)}
          </Typography>
          <Drivers />
        </Container>
      </Section>
    </MainLayout>
  );
};
