import { FC, useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import uniqid from "uniqid";
import { PATHS } from "enums";
import { StyledLink } from "components/styled-link";

const NAVBAR_ITEMS = [
  <StyledLink to={PATHS.HOME}>Подбор тура</StyledLink>,
  <StyledLink to={PATHS.POPULAR_DESTINATIONS}>Популярные направления</StyledLink>,
];

export const Navbar: FC = () => {
  const [value, setValue] = useState(0);

  return (
    <Box sx={{ padding: "12px 0" }}>
      <Tabs
        TabIndicatorProps={{
          style: {
            display: "none",
          },
        }}
        value={value}
        component="nav"
        aria-label="nav tabs"
        sx={{ "[role='tablist']": { gap: 5 } }}
      >
        {NAVBAR_ITEMS.map((label, index) => (
          <Tab
            onClick={() => setValue(index)}
            value={index}
            key={uniqid()}
            label={label}
            sx={{ p: 0, maxWidth: "100%" }}
          />
        ))}
      </Tabs>
    </Box>
  );
};
