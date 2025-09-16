import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { TrafficMetrics } from '../types';

interface TrafficMetricsChartProps {
  metrics: TrafficMetrics[];
}

const TrafficMetricsChart: React.FC<TrafficMetricsChartProps> = ({ metrics }) => {
  return (
    <Box>
      <Grid container spacing={3}>
        {metrics.map((metric, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  {metric.intersection}
                </Typography>
                
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" sx={{ color: '#b0b0b0', mb: 1 }}>
                    Vehicle Count
                  </Typography>
                  <Typography variant="h4" sx={{ color: '#00e676', fontWeight: 700 }}>
                    {metric.vehicleCount}
                  </Typography>
                </Box>
                
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" sx={{ color: '#b0b0b0', mb: 1 }}>
                    Avg Wait Time
                  </Typography>
                  <Typography variant="h5" sx={{ color: '#ffeb3b', fontWeight: 600 }}>
                    {metric.avgWaitTime}s
                  </Typography>
                </Box>
                
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" sx={{ color: '#b0b0b0', mb: 1 }}>
                    Congestion Level
                  </Typography>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: metric.congestionLevel === 'high' ? '#f44336' : 
                             metric.congestionLevel === 'medium' ? '#ff9800' : '#4caf50',
                      fontWeight: 600,
                      textTransform: 'capitalize',
                    }}
                  >
                    {metric.congestionLevel}
                  </Typography>
                </Box>
                
                <Box>
                  <Typography variant="body2" sx={{ color: '#b0b0b0', mb: 1 }}>
                    Throughput
                  </Typography>
                  <Typography variant="h5" sx={{ color: '#2196f3', fontWeight: 600 }}>
                    {metric.throughput} veh/hr
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TrafficMetricsChart;