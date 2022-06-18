import { Box, Button, Container, Typography } from "@mui/material";
import { LOG_EVENTS } from "enums";
import { useAnalyticsLog } from "firebase-common";
import { useEffect, FC, ErrorInfo } from "react";

interface Props {
  errorInfo?: ErrorInfo;
  errorMessage?: string;
}

export const ErrorPage: FC<Props> = ({ errorInfo, errorMessage }) => {
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
        <Typography variant="h1">Что-то пошло не так :(</Typography>
        <Button size="large" variant="contained" onClick={onClick} sx={{ mt: 3 }}>
          Перезагрузить
        </Button>
      </Container>
    </Box>
  );
};
