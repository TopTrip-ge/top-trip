import { FC } from "react";
import { Container, Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { Section } from "components/section";
import { Icon } from "components/icon";
import { useFaq } from "./hooks/useFaq";

const ACCORDIONS = [
  {
    question: "Nulla id enim voluptate deserunt quis laborum occaecat cupidatat ut esse?",
    panel: "panel1",
    answer: `Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id
              dignissim quam.`,
  },
  {
    question: "Nulla id enim voluptate deserunt quis laborum occaecat cupidatat ut esse?",
    panel: "panel2",
    answer: `Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id
              dignissim quam.`,
  },
  {
    question: "Nulla id enim voluptate deserunt quis laborum occaecat cupidatat ut esse?",
    panel: "panel3",
    answer: `Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id
              dignissim quam.`,
  },
];

export const Faq: FC = () => {
  const { expanded, handleChange } = useFaq();

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
        {ACCORDIONS.map(({ question, panel, answer }) => (
          <Accordion key={panel} expanded={expanded === panel} onChange={handleChange(panel)}>
            <AccordionSummary
              expandIcon={<Icon name="ExpandMore" />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ flexShrink: 1 }}>{question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Section>
  );
};
