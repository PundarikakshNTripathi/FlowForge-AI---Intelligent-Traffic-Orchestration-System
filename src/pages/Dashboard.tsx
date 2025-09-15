import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Chip,
  LinearProgress,
  Paper,
  IconButton,
  Tooltip,
} from '@mui/material';
import {
  Traffic as TrafficIcon,
  DirectionsCar as CarIcon,
  Speed as SpeedIcon,
  Timeline as TimelineIcon,
  PlayArrow as PlayIcon,
  Pause as PauseIcon,
  Refresh as RefreshIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import TrafficMap from '../components/TrafficMap';
import VehicleDetectionPanel from '../components/VehicleDetectionPanel';
import TrafficMetricsChart from '../components/TrafficMetricsChart';
import { mockTrafficLights, mockTrafficMetrics, generateRealTimeUpdate } from '../utils/mockData';

const Dashboard: React.FC = () => {
  const [realTimeData, setRealTimeData] = useState(generateRealTimeUpdate());
  const [isLive, setIsLive] = useState(true);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  useEffect(() => {
    let interval: any;
    
    if (isLive) {
      interval = setInterval(() => {
        setRealTimeData(generateRealTimeUpdate());
        setLastUpdate(new Date());
      }, 3000); // Update every 3 seconds
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isLive]);

  const toggleLiveMode = () => {
    setIsLive(!isLive);
  };

  const refreshData = () => {
    setRealTimeData(generateRealTimeUpdate());
    setLastUpdate(new Date());
  };

  const totalVehicles = realTimeData.metrics.reduce((sum, metric) => sum + metric.vehicleCount, 0);
  const avgWaitTime = Math.round(
    realTimeData.metrics.reduce((sum, metric) => sum + metric.avgWaitTime, 0) / realTimeData.metrics.length
  );
  const congestionLevel = realTimeData.metrics.filter(m => m.congestionLevel === 'high').length;

  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Box>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
            Live Traffic Dashboard
          </Typography>
          <Typography variant="subtitle1" sx={{ color: '#b0b0b0' }}>
            Real-time AI-powered traffic monitoring and control
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Tooltip title={isLive ? 'Pause Live Updates' : 'Resume Live Updates'}>
            <IconButton
              onClick={toggleLiveMode}
              sx={{
                backgroundColor: isLive ? '#ff5722' : '#00e676',
                color: '#000',
                '&:hover': {
                  backgroundColor: isLive ? '#d84315' : '#00c965',
                },
              }}
            >
              {isLive ? <PauseIcon /> : <PlayIcon />}
            </IconButton>
          </Tooltip>
          <Tooltip title="Refresh Data">
            <IconButton
              onClick={refreshData}
              sx={{
                backgroundColor: '#333',
                color: '#fff',
                '&:hover': {
                  backgroundColor: '#555',
                },
              }}
            >
              <RefreshIcon />
            </IconButton>
          </Tooltip>
          <Chip
            label={isLive ? 'LIVE' : 'PAUSED'}
            color={isLive ? 'success' : 'warning'}
            sx={{ fontWeight: 600 }}
          />
          <Typography variant="caption" sx={{ color: '#b0b0b0' }}>
            Last updated: {lastUpdate.toLocaleTimeString()}
          </Typography>
        </Box>
      </Box>

      {/* Key Metrics */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <CarIcon sx={{ color: '#00e676', mr: 1 }} />
                  <Typography variant="h6">Total Vehicles</Typography>
                </Box>
                <Typography variant="h3" sx={{ fontWeight: 700, color: '#00e676' }}>
                  {totalVehicles.toLocaleString()}
                </Typography>
                <Typography variant="caption" sx={{ color: '#b0b0b0' }}>
                  Detected across all intersections
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <SpeedIcon sx={{ color: '#ffeb3b', mr: 1 }} />
                  <Typography variant="h6">Avg Wait Time</Typography>
                </Box>
                <Typography variant="h3" sx={{ fontWeight: 700, color: '#ffeb3b' }}>
                  {avgWaitTime}s
                </Typography>
                <Typography variant="caption" sx={{ color: '#b0b0b0' }}>
                  12% reduction from baseline
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <TrafficIcon sx={{ color: '#ff5722', mr: 1 }} />
                  <Typography variant="h6">High Congestion</Typography>
                </Box>
                <Typography variant="h3" sx={{ fontWeight: 700, color: '#ff5722' }}>
                  {congestionLevel}
                </Typography>
                <Typography variant="caption" sx={{ color: '#b0b0b0' }}>
                  Intersections requiring attention
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <TimelineIcon sx={{ color: '#2196f3', mr: 1 }} />
                  <Typography variant="h6">AI Efficiency</Typography>
                </Box>
                <Typography variant="h3" sx={{ fontWeight: 700, color: '#2196f3' }}>
                  94.2%
                </Typography>
                <Typography variant="caption" sx={{ color: '#b0b0b0' }}>
                  YOLOv8 detection accuracy
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      </Grid>

      {/* Main Dashboard Grid */}
      <Grid container spacing={3}>
        {/* Traffic Map */}
        <Grid item xs={12} lg={8}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Paper sx={{ p: 3, height: '600px' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                  City Traffic Map
                </Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Chip label="Delhi" color="primary" size="small" />
                  <Chip label="4 Active Intersections" variant="outlined" size="small" />
                </Box>
              </Box>
              <TrafficMap trafficLights={realTimeData.trafficLights} />
            </Paper>
          </motion.div>
        </Grid>

        {/* Vehicle Detection Panel */}
        <Grid item xs={12} lg={4}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Paper sx={{ p: 3, height: '600px' }}>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
                YOLOv8 Vehicle Detection
              </Typography>
              <VehicleDetectionPanel detections={realTimeData.vehicleDetections} />
            </Paper>
          </motion.div>
        </Grid>

        {/* Traffic Metrics Chart */}
        <Grid item xs={12}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Paper sx={{ p: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
                Real-time Traffic Flow Analysis
              </Typography>
              <TrafficMetricsChart metrics={realTimeData.metrics} />
            </Paper>
          </motion.div>
        </Grid>

        {/* Signal Status */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Paper sx={{ p: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
                Traffic Signal Status
              </Typography>
              <Box sx={{ maxHeight: '400px', overflowY: 'auto' }}>
                {realTimeData.trafficLights.map((light) => (
                  <Box key={light.id} sx={{ mb: 3, p: 2, border: '1px solid #333', borderRadius: 1 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                      <Typography variant="h6">{light.location}</Typography>
                      <Chip
                        label={light.status.toUpperCase()}
                        sx={{
                          backgroundColor: 
                            light.status === 'green' ? '#4caf50' : 
                            light.status === 'yellow' ? '#ffeb3b' : '#f44336',
                          color: light.status === 'yellow' ? '#000' : '#fff',
                          fontWeight: 600,
                        }}
                      />
                    </Box>
                    <Typography variant="body2" sx={{ mb: 1, color: '#b0b0b0' }}>
                      Phase: {light.phase} | Countdown: {light.countdown}s
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={(light.countdown / 60) * 100}
                      sx={{
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: 
                            light.status === 'green' ? '#4caf50' : 
                            light.status === 'yellow' ? '#ffeb3b' : '#f44336',
                        },
                      }}
                    />
                  </Box>
                ))}
              </Box>
            </Paper>
          </motion.div>
        </Grid>

        {/* System Performance */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Paper sx={{ p: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
                AI Performance Metrics
              </Typography>
              <Box sx={{ space: 2 }}>
                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body1">YOLOv8 Detection Rate</Typography>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>28.5 FPS</Typography>
                  </Box>
                  <LinearProgress variant="determinate" value={95} color="primary" />
                </Box>
                
                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body1">RL Model Confidence</Typography>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>89.3%</Typography>
                  </Box>
                  <LinearProgress variant="determinate" value={89} color="success" />
                </Box>
                
                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body1">Network Latency</Typography>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>12ms</Typography>
                  </Box>
                  <LinearProgress variant="determinate" value={85} color="warning" />
                </Box>
                
                <Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body1">System Uptime</Typography>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>99.7%</Typography>
                  </Box>
                  <LinearProgress variant="determinate" value={99.7} color="info" />
                </Box>
              </Box>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;