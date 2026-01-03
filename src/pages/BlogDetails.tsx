// src/pages/BlogDetails.tsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blogs } from "../utils/blogs";
import {
  Container,
  Typography,
  CardMedia,
  Box,
  Button,
  Divider,
} from "@mui/material";
import Layout from "../components/Layout";

const BlogDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <Layout>
        <Container sx={{ py: 6 }}>
          <Typography variant="h5">Blog not found</Typography>
        </Container>
      </Layout>
    );
  }

  return (
    <Layout>
      <Container sx={{ py: { xs: 4, md: 6 }, maxWidth: "md" }}>
        {/* Back Button */}
        <Button
          variant="text"
          onClick={() => navigate(-1)}
          sx={{ mb: 3, fontWeight: 600 }}
        >
          ← Back to Blogs
        </Button>

        {/* Title */}
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            lineHeight: 1.25,
            mb: 1,
            color: "text.primary",
          }}
        >
          {blog.title}
        </Typography>

        {/* Date */}
        <Typography
          variant="caption"
          sx={{
            color: "secondary.main",
            fontWeight: 600,
            letterSpacing: "0.04em",
          }}
        >
          {new Date(blog.date).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </Typography>

        <Divider sx={{ my: 4 }} />

        {/* Image */}
        {blog.image && (
          <CardMedia
            component="img"
            image={blog.image}
            alt={blog.title}
            sx={{
              mb: 4,
              borderRadius: 3,
              maxHeight: 420,
              objectFit: "cover",
            }}
          />
        )}

        {/* Content */}
        <Box
          sx={{
            "& p": {
              mb: 2.5,
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "#333",
            },
          }}
        >
          <Typography component="div" sx={{ whiteSpace: "pre-line" }}>
            {blog.content}
          </Typography>
        </Box>

        {/* CTA */}
        <Box
          sx={{
            mt: 6,
            p: 4,
            borderRadius: 3,
            background: "linear-gradient(135deg, #911209 0%, #F97316 100%)",
            color: "#fff",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
            Need AI Automation or Custom Chatbots?
          </Typography>
          <Typography sx={{ opacity: 0.9, mb: 3 }}>
            Zeta AI helps businesses with AI agents, n8n automation, RAG-based
            chatbots, and intelligent workflows.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/contact")}
            sx={{ fontWeight: 600 }}
          >
            Talk to AI Experts
          </Button>
        </Box>
      </Container>
    </Layout>
  );
};

export default BlogDetails;
