import { FC } from "react";
import { CircularProgress } from "@mui/material";
import { CenterBox } from "components/center-box";

export const FullPageSpinner: FC = () => (
  <CenterBox sx={{ height: "100vh" }}>
    <CircularProgress />
  </CenterBox>
);
