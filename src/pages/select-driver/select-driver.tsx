import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Container, Typography } from "@mui/material";
import { useRecoilValue } from "recoil";
import { MainLayout } from "layouts/main";
import { Section } from "components/section";
import { searchValuesStateSelector } from "store/selectors";
import { calcDistance } from "utils";
import { LANGUAGES } from "enums";
import { SearchDrivers } from "components/search-drivers";
import { Drivers } from "./components/drivers/drivers";

export const SelectDriver: FC = () => {
  const values = useRecoilValue(searchValuesStateSelector);
  const { i18n } = useTranslation();
  const showDistanceValue = values?.from && values?.where.some(({ id }) => !!id);

  return (
    <MainLayout>
      <Section>
        <Container>
          <SearchDrivers />
          <Typography sx={{ p: 3 }}>
            {showDistanceValue && calcDistance(i18n.language as LANGUAGES, values?.from, values?.where)}
          </Typography>
          <Drivers />
        </Container>
      </Section>
    </MainLayout>
  );
};
