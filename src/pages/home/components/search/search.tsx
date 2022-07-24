/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useEffect } from "react";
import uniqid from "uniqid";
import { Button, FormControl, Grid, Typography, Container, Autocomplete } from "@mui/material";
import { useTranslation } from "react-i18next";
import { FieldArray, FormikProvider } from "formik";
// TODO(Pavel Sokolov): Add enLocale for en
import ruLocale from "date-fns/locale/ru";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { ANCHORS, LOCALIZATION_NAMESPACES, LANGUAGES } from "enums";
import { WithSkeleton } from "hocs";
import { TextField } from "components/text-field";
import { Icon } from "components/icon";
import { ENdestinations, RUdestinations } from "mock-database/destinations";
import { SearchDestination } from "interfaces";
import { SearchDrivers } from "components/search-drivers";
import { useSearch } from "./search-hooks";
import { StyledSection } from "./search-style";

export const Search: FC = () => {
  const { t } = useTranslation();

  return (
    <StyledSection>
      <Container sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          id={ANCHORS.SEARCH}
          sx={{
            fontWeight: "fontWeightRegular",
            textAlign: "center",
            color: "custom.white",
            fontSize: { xs: "30px", md: "50px" },
            mb: { xs: 5, sm: 15 },
          }}
          variant="h2"
          component="h2"
        >
          {t("title.transfers", { ns: LOCALIZATION_NAMESPACES.HOME_SECTIONS })}
          <br />
          {t("title.whole-georgia", { ns: LOCALIZATION_NAMESPACES.HOME_SECTIONS })}
        </Typography>
        <SearchDrivers />
      </Container>
    </StyledSection>
  );
};
