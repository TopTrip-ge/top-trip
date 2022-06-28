import { FC } from "react";
import { Container, Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { Section } from "components/section";
import { Icon } from "components/icon";
import { useFaq } from "./faq-hooks";

export const Faq: FC = () => {
  const { expanded, accordionItems, handleChange } = useFaq();

  return (
    <Section>
      <Container>
        <Typography
          variant="h2"
          component="h2"
          sx={{ mb: 6, textAlign: "center", fontSize: { xs: "40px", md: "60px" } }}
        >
          F.A.Q.
        </Typography>
        {accordionItems.map(({ question, panel, answer }) => (
          <Accordion key={panel} expanded={expanded === panel} onChange={handleChange(panel)}>
            <AccordionSummary
              expandIcon={<Icon name="ExpandMore" />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ flexShrink: 1 }}>{question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontSize: "0.9rem" }}>{answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Section>
  );
};
