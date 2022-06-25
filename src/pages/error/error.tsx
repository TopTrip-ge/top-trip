import { Box, Button, Container, Typography } from "@mui/material";
import { useEffect, FC, ErrorInfo } from "react";
import { useTranslation } from "react-i18next";
import { LOCALIZATION_NAMESPACES, LOG_EVENTS } from "enums";
import { useAnalyticsLog } from "firebase-common";

interface Props {
  errorInfo?: ErrorInfo;
  errorMessage?: string;
}

export const ErrorPage: FC<Props> = ({ errorInfo, errorMessage }) => {
  const { t } = useTranslation();
  const logEvent = useAnalyticsLog();

  useEffect(() => {
    logEvent(LOG_EVENTS.APP_CRASHED, { errorInfo, errorMessage });
  }, []);

  const onClick = () => {
    window.location.reload();
  };

  return (
    <Box component="main" sx={{ display: "flex", minHeight: "100vh", alignItems: "center", justifyContent: "center" }}>
      <Container>
        <Typography
          variant="h1"
          sx={{ textAlign: "center", fontSize: { xs: "26px", sm: "60px", md: "90px", lg: "110px" } }}
        >
          {t("text", { ns: LOCALIZATION_NAMESPACES.ERROR_PAGE })}
        </Typography>
        <Button
          size="large"
          variant="contained"
          onClick={onClick}
          sx={{ mt: 3, width: "100%", height: { xs: "30px", md: "50px" } }}
        >
          {t("button.reload")}
        </Button>
      </Container>
    </Box>
  );
};
