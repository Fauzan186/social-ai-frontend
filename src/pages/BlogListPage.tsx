// src/pages/BlogList.tsx
import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Chip,
} from '@mui/material';
import { blogs } from '../utils/blogs';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const BlogListPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      {/* HERO */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          background:
            'linear-gradient(135deg, #911209 0%, #F97316 100%)',
          color: '#fff',
        }}
      >
        <Container>
          <Typography variant="h2" sx={{ fontWeight: 800, mb: 2 }}>
            AI Automation & Chatbot Insights
          </Typography>
          <Typography
            sx={{
              maxWidth: 760,
              fontSize: '1.1rem',
              color: 'rgba(255,255,255,0.95)',
            }}
          >
            Practical insights by <strong>Zeta AI</strong> on AI agents,
            n8n automation, custom chatbots, RAG systems, and real-world
            business transformation.
          </Typography>
        </Container>
      </Box>

      {/* BLOG GRID */}
      <Container sx={{ py: { xs: 5, md: 7 } }}>
        <Grid container spacing={4}>
          {blogs.map((blog) => (
            <Grid item xs={12} md={6} lg={4} key={blog.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 4,
                  backgroundColor: '#fff',
                  boxShadow: '0 12px 35px rgba(0,0,0,0.12)',
                  transition: 'all 0.35s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 25px 60px rgba(0,0,0,0.22)',
                  },
                }}
              >
                {/* IMAGE / FALLBACK */}
                {blog.image ? (
                  <CardMedia
                    component="img"
                    height="210"
                    image={blog.image}
                    alt={blog.title}
                  />
                ) : (
                  <Box
                    sx={{
                      height: 210,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background:
                        'linear-gradient(135deg, #fef3c7, #ecfeff)',
                    }}
                  >
                    <AutoAwesomeIcon
                      sx={{ fontSize: 52, color: '#F97316' }}
                    />
                  </Box>
                )}

                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  {/* DATE */}
                  <Chip
                    label={new Date(blog.date).toLocaleDateString('en-IN', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric',
                    })}
                    size="small"
                    sx={{
                      mb: 1.5,
                      fontWeight: 700,
                      backgroundColor: '#FFF7ED',
                      color: '#F97316',
                    }}
                  />

                  {/* TITLE */}
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      mb: 1.2,
                      lineHeight: 1.35,
                      color: 'text.primary',
                    }}
                  >
                    {blog.title}
                  </Typography>

                  {/* SUMMARY */}
                  <Typography
                    sx={{
                      fontSize: '0.95rem',
                      lineHeight: 1.65,
                      color: 'text.secondary',
                    }}
                  >
                    {blog.summary}
                  </Typography>
                </CardContent>

                {/* CTA */}
                <Box sx={{ p: 3, pt: 0 }}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={() => navigate(`/blog/${blog.id}`)}
                    sx={{
                      py: 1.3,
                      fontWeight: 700,
                      boxShadow: '0 8px 22px rgba(145,18,9,0.35)',
                    }}
                  >
                    Read Article →
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
};

export default BlogListPage;
