import { FC } from "react";
import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import { Icon } from "components/icon";
import { Section } from "components/section";
import { Card as CardInfo } from "./why-us-interfaces";

const CARDS: CardInfo[] = [
  {
    icon: "SearchOutlined",
    title: "Lorem ipsum dolor",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis magna sodales, posuere.",
  },
  {
    icon: "SentimentSatisfiedAltOutlined",
    title: "Lorem ipsum dolor",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis magna sodales, posuere.",
  },
  {
    icon: "CheckOutlined",
    title: "Lorem ipsum dolor",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis magna sodales, posuere.",
  },
];

export const WhyUs: FC = () => (
  <Section>
    <Container>
      <Typography variant="h3" align="center">
        Почему именно мы?
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2, mt: 4 }}>
        {CARDS.map(({ description, icon, title }) => (
          <Card sx={{ maxWidth: "350px", boxShadow: "none" }}>
            <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", p: 0 }}>
              <Icon name={icon} fontSize="large" />
              <Typography fontWeight="fontWeightBold" variant="h5" sx={{ mt: 1 }}>
                {title}
              </Typography>
              <Typography fontWeight="fontWeightMedium" variant="subtitle1" align="center" sx={{ mt: 2 }}>
                {description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  </Section>
);
