// src/components/FAQsSection.tsx
import React from 'react';
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQsSection: React.FC = () => {
  // FAQs data for better reusability and maintainability
  const faqs = [
    {
      question: 'How do I upload my data?',
      answer: 'Simply log into your dashboard and upload the relevant files from your computer or cloud storage.',
    },
    {
      question: 'Which social platforms are supported?',
      answer: 'We support Facebook, Instagram, X, and WhatsApp for chatbot integration.',
    },
    {
      question: 'How secure is my data?',
      answer: 'We employ the latest encryption and security protocols to ensure your data is protected.',
    },
    {
      question: 'Can I monitor chatbot performance?',
      answer: 'Yes, you can track user interactions and performance metrics in real-time from your dashboard.',
    },
  ];

  return (
    <section style={{ padding: '60px 0', backgroundColor: '#f5f5f5' }}>
      <Container>
        {/* Section Heading */}
        <Typography
          variant="h3"
          color="textPrimary"
          align="center"
          gutterBottom
          sx={{ fontWeight: 700 }}
        >
          Frequently Asked Questions
        </Typography>

        {/* FAQs */}
        <Box mt={4}>
          {faqs.map((faq, index) => (
            <Accordion key={index} sx={{ marginBottom: 2, borderRadius: 2, overflow: 'hidden' }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: '#911209' }} />}
                sx={{
                  backgroundColor: '#ffffff',
                  borderBottom: '1px solid #e0e0e0',
                  '& .MuiTypography-root': {
                    fontWeight: 600,
                  },
                }}
              >
                <Typography variant="subtitle1" color="textPrimary">
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ backgroundColor: '#f9f9f9' }}>
                <Typography  variant="body2">
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </section>
  );
};

export default FAQsSection;
