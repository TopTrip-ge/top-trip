import { FC } from "react";
import { Box, Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";
import { Icon } from "components/icon";
import { LOCALIZATION_NAMESPACES } from "enums/localization";

export const Copyright: FC = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ py: 1, backgroundColor: "custom.orange", color: "custom.white" }}>
      <Container sx={{ display: "flex", alignItems: "center" }}>
        <Icon name="Copyright" sx={{ mr: 2 }} />
        {dayjs().year()} TopTrip, Inc. {t("all-rights-reserved", { ns: LOCALIZATION_NAMESPACES.GLOSSARY })}
      </Container>
    </Box>
  );
};
