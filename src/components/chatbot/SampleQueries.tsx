import React from 'react';
import { Box, Paper, Typography } from '@mui/material';

interface SampleQueriesBarProps {
  queries: string[];
  onSelect: (query: string) => void;
}

const SampleQueries: React.FC<SampleQueriesBarProps> = ({ queries, onSelect }) => (
  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
    {queries.map((query, idx) => (
      <Paper
        key={idx}
        onClick={() => onSelect(query)}
        sx={{ px: 2, py: 1, cursor: 'pointer', backgroundColor: '#ffffff' }}
        elevation={1}
      >
        <Typography variant="body2">{query}</Typography>
      </Paper>
    ))}
  </Box>
);

export default SampleQueries;
