import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Paper,
  LinearProgress,
} from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  Speed as SpeedIcon,
  LocalGasStation as FuelIcon,
  Timeline as TimelineIcon,
  EnergySavingsLeaf as EcoIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Analytics: React.FC = () => {
  const kpiData = [
    {
      title: 'Average Commute Time Reduction',
      value: '15.2%',
      change: '+2.1%',
      positive: true,
      icon: <SpeedIcon sx={{ fontSize: 40, color: '#00e676' }} />,
      description: 'Compared to last month'
    },
    {
      title: 'Fuel Consumption Savings',
      value: '₹42.3 Cr',
      change: '+₹5.2 Cr',
      positive: true,
      icon: <FuelIcon sx={{ fontSize: 40, color: '#00e676' }} />,
      description: 'Annual projected savings'
    },
    {
      title: 'CO2 Emissions Reduction',
      value: '23.8%',
      change: '+4.3%',
      positive: true,
      icon: <EcoIcon sx={{ fontSize: 40, color: '#00e676' }} />,
      description: 'Environmental impact'
    },
    {
      title: 'Traffic Flow Efficiency',
      value: '94.1%',
      change: '+1.8%',
      positive: true,
      icon: <TimelineIcon sx={{ fontSize: 40, color: '#00e676' }} />,
      description: 'AI optimization success rate'
    }
  ];

  const performanceMetrics = [
    { metric: 'Peak Hour Optimization', current: 92, target: 95, unit: '%' },
    { metric: 'Signal Response Time', current: 85, target: 90, unit: 'ms' },
    { metric: 'Queue Length Reduction', current: 78, target: 85, unit: '%' },
    { metric: 'Intersection Throughput', current: 88, target: 90, unit: '%' },
    { metric: 'Emergency Vehicle Priority', current: 96, target: 98, unit: '%' },
    { metric: 'Pedestrian Wait Time', current: 71, target: 80, unit: 's' }
  ];

  const getProgressColor = (current: number, target: number) => {
    const percentage = (current / target) * 100;
    if (percentage >= 90) return '#00e676';
    if (percentage >= 70) return '#ffb74d';
    return '#f44336';
  };

  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
            Analytics Hub
          </Typography>
          <Typography variant="h5" sx={{ color: '#b0b0b0' }}>
            Real-time Performance Metrics & Impact Analysis
          </Typography>
        </Box>
      </motion.div>

      {/* KPI Cards */}
      <Grid container spacing={3} sx={{ mb: 6 }}>
        {kpiData.map((kpi, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card sx={{ 
                height: '100%', 
                backgroundColor: '#1a1a1a', 
                border: '1px solid #333',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  transition: 'transform 0.3s'
                }
              }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    {kpi.icon}
                    <Box sx={{ ml: 2 }}>
                      <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
                        {kpi.description}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                    {kpi.value}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {kpi.positive ? (
                      <TrendingUpIcon sx={{ color: '#00e676', mr: 0.5 }} />
                    ) : (
                      <TrendingDownIcon sx={{ color: '#f44336', mr: 0.5 }} />
                    )}
                    <Typography 
                      variant="body2" 
                      sx={{ color: kpi.positive ? '#00e676' : '#f44336', fontWeight: 600 }}
                    >
                      {kpi.change}
                    </Typography>
                  </Box>
                  <Typography variant="h6" sx={{ mt: 1, fontWeight: 600 }}>
                    {kpi.title}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Performance Metrics */}
      <Paper sx={{ p: 4, backgroundColor: '#1a1a1a', border: '1px solid #333' }}>
        <Typography variant="h5" sx={{ mb: 4, fontWeight: 600 }}>
          Performance Metrics Dashboard
        </Typography>
        <Grid container spacing={3}>
          {performanceMetrics.map((metric, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      {metric.metric}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
                      {metric.current}{metric.unit} / {metric.target}{metric.unit}
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={(metric.current / metric.target) * 100}
                    sx={{
                      height: 8,
                      borderRadius: 4,
                      backgroundColor: '#333',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: getProgressColor(metric.current, metric.target),
                        borderRadius: 4
                      }
                    }}
                  />
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      color: getProgressColor(metric.current, metric.target),
                      fontWeight: 600,
                      mt: 0.5,
                      display: 'block'
                    }}
                  >
                    {((metric.current / metric.target) * 100).toFixed(1)}% of target achieved
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Additional Analytics Sections */}
      <Grid container spacing={3} sx={{ mt: 4 }}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, backgroundColor: '#1a1a1a', border: '1px solid #333', height: '300px' }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Traffic Flow Trends
            </Typography>
            <Box sx={{ 
              height: '200px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              backgroundColor: '#0d1117',
              border: '1px solid #333',
              borderRadius: 1
            }}>
              <Typography variant="body1" sx={{ color: '#b0b0b0' }}>
                Real-time Chart Visualization
                <br />
                <Typography variant="caption">
                  Interactive traffic flow data over time
                </Typography>
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, backgroundColor: '#1a1a1a', border: '1px solid #333', height: '300px' }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Intersection Heatmap
            </Typography>
            <Box sx={{ 
              height: '200px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              backgroundColor: '#0d1117',
              border: '1px solid #333',
              borderRadius: 1
            }}>
              <Typography variant="body1" sx={{ color: '#b0b0b0' }}>
                City-wide Performance Heatmap
                <br />
                <Typography variant="caption">
                  Color-coded intersection efficiency
                </Typography>
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Analytics;