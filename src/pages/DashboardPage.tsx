import React from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ScheduleIcon from '@mui/icons-material/Schedule';
import ChatIcon from '@mui/icons-material/Chat';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts';
import Layout from '../components/Layout';

const data = [
  { name: 'Content Scheduling', value: 25 },
  { name: 'Chatbot Engagement', value: 20 },
  { name: 'Audience Insights', value: 20 },
  { name: 'Hashtag Optimization', value: 20 },
  { name: 'Trend Detection', value: 15 },
];

const COLORS = ['#911209', '#b71c1c', '#d32f2f', '#e53935', '#ef5350'];

const DashboardPage: React.FC = () => {
  const userName = 'Fauzan'; // Replace with dynamic user if needed

  return (
    <Layout>
      <Box sx={{ p: { xs: 3, md: 6 }, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
        <Typography variant="h5" fontWeight={700} gutterBottom>
          👋 Welcome back, {userName}!
        </Typography>
        <Typography variant="subtitle1" gutterBottom color="text.secondary">
          Here's a quick look at your performance and AI activities today.
        </Typography>

        {/* KPI Cards */}
        <Grid container spacing={4} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
              <ScheduleIcon color="primary" />
              <Box>
                <Typography variant="subtitle2">Posts Scheduled</Typography>
                <Typography variant="h6" fontWeight={700}>18</Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
              <ChatIcon color="primary" />
              <Box>
                <Typography variant="subtitle2">Auto Replies Sent</Typography>
                <Typography variant="h6" fontWeight={700}>125</Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
              <TrendingUpIcon color="primary" />
              <Box>
                <Typography variant="subtitle2">Engagement Rate</Typography>
                <Typography variant="h6" fontWeight={700}>+34%</Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
              <GroupAddIcon color="primary" />
              <Box>
                <Typography variant="subtitle2">New Followers</Typography>
                <Typography variant="h6" fontWeight={700}>76</Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          {/* Pie Chart Card */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3, borderRadius: 4, height: '100%' }}>
              <Typography variant="h6" fontWeight={700} gutterBottom>
                Feature Usage Distribution
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Breakdown of your most used ZetaAI tools.
              </Typography>
              <ResponsiveContainer width="100%" height={360}>
                <PieChart>
                  <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    label
                  >
                    {data.map((_:any, index:any) => (
                      <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend verticalAlign="bottom" height={36} />
                </PieChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>

          {/* AI Tips List */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3, borderRadius: 4, height: '100%' }}>
              <Typography variant="h6" fontWeight={700} gutterBottom>
                Smart Suggestions
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                AI-generated tips to optimize your content strategy:
              </Typography>
              <List dense>
                {["Post between 5–7 PM for max engagement", "Use trending hashtags: #AIForCreators", "Add carousel content this weekend", "Improve chatbot greeting tone", "Include emojis in replies for higher reach"].map((text, idx) => (
                  <ListItem key={idx}>
                    <ListItemIcon>
                      <CheckCircleIcon sx={{ color: 'primary.main' }} />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default DashboardPage;