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
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import {
  CheckCircle as CheckIcon,
  Warning as WarningIcon,
  Error as ErrorIcon,
  Videocam as CameraIcon,
  Router as NetworkIcon,
  Storage as ServerIcon,
  Cloud as CloudIcon,
  Timeline as MetricsIcon,
  Speed as PerformanceIcon,
  Memory as ProcessorIcon,
  PowerSettingsNew as PowerIcon,
  NetworkCheck as ConnectivityIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const SystemStatus: React.FC = () => {
  const systemOverview = [
    {
      title: 'Traffic Cameras',
      status: 'Operational',
      value: '245/250',
      percentage: 98,
      icon: <CameraIcon sx={{ color: '#00e676' }} />,
      color: '#00e676'
    },
    {
      title: 'Network Infrastructure',
      status: 'Good',
      value: '99.2%',
      percentage: 99,
      icon: <NetworkIcon sx={{ color: '#00e676' }} />,
      color: '#00e676'
    },
    {
      title: 'AI Processing Units',
      status: 'Healthy',
      value: '18/20',
      percentage: 90,
      icon: <ProcessorIcon sx={{ color: '#ffb74d' }} />,
      color: '#ffb74d'
    },
    {
      title: 'Cloud Connectivity',
      status: 'Stable',
      value: '100%',
      percentage: 100,
      icon: <CloudIcon sx={{ color: '#00e676' }} />,
      color: '#00e676'
    },
  ];

  const intersectionStatus = [
    { id: 'INT-001', location: 'MG Road x Brigade Road', status: 'Active', cameras: 4, lastUpdate: '2 min ago', performance: 94 },
    { id: 'INT-002', location: 'Koramangala Ring Road', status: 'Active', cameras: 3, lastUpdate: '1 min ago', performance: 89 },
    { id: 'INT-003', location: 'Whitefield Main Road', status: 'Warning', cameras: 2, lastUpdate: '5 min ago', performance: 76 },
    { id: 'INT-004', location: 'Electronic City Phase 1', status: 'Active', cameras: 4, lastUpdate: '1 min ago', performance: 92 },
    { id: 'INT-005', location: 'HSR Layout Sector 1', status: 'Maintenance', cameras: 1, lastUpdate: '15 min ago', performance: 45 },
    { id: 'INT-006', location: 'Indiranagar 100 Feet Road', status: 'Active', cameras: 3, lastUpdate: '3 min ago', performance: 88 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return '#00e676';
      case 'Warning': return '#ffb74d';
      case 'Maintenance': return '#f44336';
      default: return '#666';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Active': return <CheckIcon sx={{ color: '#00e676' }} />;
      case 'Warning': return <WarningIcon sx={{ color: '#ffb74d' }} />;
      case 'Maintenance': return <ErrorIcon sx={{ color: '#f44336' }} />;
      default: return <CheckIcon />;
    }
  };

  const performanceMetrics = [
    { metric: 'Average Response Time', value: '47ms', target: '<50ms', status: 'good' },
    { metric: 'Detection Accuracy', value: '99.1%', target: '>98%', status: 'excellent' },
    { metric: 'System Uptime', value: '99.8%', target: '>99%', status: 'excellent' },
    { metric: 'Data Processing Rate', value: '2.4GB/h', target: '<3GB/h', status: 'good' },
    { metric: 'Power Consumption', value: '145kW', target: '<200kW', status: 'good' },
    { metric: 'Alert Response Time', value: '12s', target: '<15s', status: 'good' },
  ];

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
            System Status
          </Typography>
          <Typography variant="h5" sx={{ color: '#b0b0b0' }}>
            Real-time Infrastructure Health & Performance Monitoring
          </Typography>
        </Box>
      </motion.div>

      {/* System Overview Cards */}
      <Grid container spacing={3} sx={{ mb: 6 }}>
        {systemOverview.map((item, index) => (
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
                    {item.icon}
                    <Box sx={{ ml: 2, flexGrow: 1 }}>
                      <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
                        {item.title}
                      </Typography>
                      <Typography variant="h5" sx={{ fontWeight: 700 }}>
                        {item.value}
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
                        Status
                      </Typography>
                      <Typography variant="body2" sx={{ color: item.color }}>
                        {item.percentage}%
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={item.percentage}
                      sx={{
                        height: 6,
                        borderRadius: 3,
                        backgroundColor: '#333',
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: item.color,
                          borderRadius: 3
                        }
                      }}
                    />
                  </Box>
                  <Chip
                    label={item.status}
                    sx={{
                      backgroundColor: `${item.color}20`,
                      color: item.color,
                      border: `1px solid ${item.color}40`
                    }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Performance Metrics */}
      <Paper sx={{ p: 4, mb: 6, backgroundColor: '#1a1a1a', border: '1px solid #333' }}>
        <Typography variant="h5" sx={{ mb: 4, fontWeight: 600 }}>
          <MetricsIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
          Performance Metrics
        </Typography>
        <Grid container spacing={3}>
          {performanceMetrics.map((metric, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box sx={{ p: 2, border: '1px solid #333', borderRadius: 1 }}>
                <Typography variant="body1" sx={{ fontWeight: 600, mb: 1 }}>
                  {metric.metric}
                </Typography>
                <Typography variant="h6" sx={{ color: '#00e676', mb: 1 }}>
                  {metric.value}
                </Typography>
                <Typography variant="caption" sx={{ color: '#b0b0b0' }}>
                  Target: {metric.target}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Intersection Status Table */}
      <Paper sx={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }}>
        <Box sx={{ p: 3, borderBottom: '1px solid #333' }}>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            <CameraIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
            Intersection Status Monitor
          </Typography>
        </Box>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ '& th': { borderBottom: '1px solid #333', backgroundColor: '#111' } }}>
                <TableCell>Intersection ID</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Active Cameras</TableCell>
                <TableCell>Last Update</TableCell>
                <TableCell>Performance</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {intersectionStatus.map((intersection, index) => (
                <TableRow 
                  key={intersection.id}
                  sx={{ 
                    '& td': { borderBottom: '1px solid #333' },
                    '&:hover': { backgroundColor: 'rgba(0, 230, 118, 0.05)' }
                  }}
                >
                  <TableCell sx={{ fontWeight: 600 }}>{intersection.id}</TableCell>
                  <TableCell>{intersection.location}</TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      {getStatusIcon(intersection.status)}
                      <Typography 
                        sx={{ 
                          ml: 1, 
                          color: getStatusColor(intersection.status),
                          fontWeight: 600 
                        }}
                      >
                        {intersection.status}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{intersection.cameras}/4</TableCell>
                  <TableCell sx={{ color: '#b0b0b0' }}>{intersection.lastUpdate}</TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <LinearProgress
                        variant="determinate"
                        value={intersection.performance}
                        sx={{
                          width: 60,
                          height: 6,
                          borderRadius: 3,
                          backgroundColor: '#333',
                          mr: 1,
                          '& .MuiLinearProgress-bar': {
                            backgroundColor: intersection.performance > 85 ? '#00e676' : 
                                          intersection.performance > 70 ? '#ffb74d' : '#f44336',
                            borderRadius: 3
                          }
                        }}
                      />
                      <Typography variant="body2">{intersection.performance}%</Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
};

export default SystemStatus;