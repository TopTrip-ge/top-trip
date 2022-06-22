import { Box, Button, Container, Typography } from "@mui/material";
import { FC } from "react";
import { StyledLink, StyledSection } from "./search-anchor-style";

export const SearchAnchor: FC = () => {
  return (
    <StyledSection>
      <Container>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>
          <Typography variant="h3" component="h3" sx={{ textAlign: "center", color: "custom.white" }}>
            Путешествуйте по Грузии
            <br />с TOPTRIP
          </Typography>
          <StyledLink to="search" smooth offset={-60} duration={1000}>
            <Button size="large" sx={{ width: "100%", height: "100%" }}>
              Спланировать тур
            </Button>
          </StyledLink>
        </Box>
      </Container>
    </StyledSection>
  );
};
