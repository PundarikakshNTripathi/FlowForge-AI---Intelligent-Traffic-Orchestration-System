import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Paper,
  Button,
  Chip,
  Switch,
  FormControlLabel,
  LinearProgress,
  Alert,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import {
  Psychology as AIIcon,
  Traffic as TrafficIcon,
  Tune as TuneIcon,
  Timeline as TimelineIcon,
  Speed as SpeedIcon,
  Warning as WarningIcon,
  CheckCircle as CheckIcon,
  Pause as PauseIcon,
  PlayArrow as PlayIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const AIControlCenter: React.FC = () => {
  const [isAIEnabled, setIsAIEnabled] = useState(true);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('DQN');
  const [learningProgress, setLearningProgress] = useState(85);
  const [isTraining, setIsTraining] = useState(false);

  // Mock intersection data
  const intersections = [
    {
      id: 'INT001',
      name: 'MG Road x Brigade Road',
      status: 'Optimized',
      confidence: 94,
      waitTime: '45s',
      throughput: '120 vehicles/min',
      aiAction: 'Extended green for main road'
    },
    {
      id: 'INT002', 
      name: 'Commercial Street x St. Marks',
      status: 'Learning',
      confidence: 87,
      waitTime: '52s',
      throughput: '95 vehicles/min',
      aiAction: 'Analyzing traffic patterns'
    },
    {
      id: 'INT003',
      name: 'Koramangala 5th Block',
      status: 'Manual Override',
      confidence: 0,
      waitTime: '68s',
      throughput: '78 vehicles/min',
      aiAction: 'Manual control active'
    },
    {
      id: 'INT004',
      name: 'HSR Layout Main Road',
      status: 'Optimized',
      confidence: 91,
      waitTime: '38s',
      throughput: '135 vehicles/min',
      aiAction: 'Coordinated with adjacent signals'
    }
  ];

  const algorithmMetrics = {
    DQN: {
      accuracy: '92.3%',
      avgReward: '+1.85',
      convergence: '89%',
      description: 'Deep Q-Network for discrete signal timing optimization'
    },
    PPO: {
      accuracy: '94.1%',
      avgReward: '+2.12',
      convergence: '91%',
      description: 'Proximal Policy Optimization for continuous traffic flow control'
    },
    A3C: {
      accuracy: '90.7%',
      avgReward: '+1.73',
      convergence: '87%',
      description: 'Asynchronous Actor-Critic for multi-intersection coordination'
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isTraining) {
        setLearningProgress(prev => Math.min(prev + Math.random() * 2, 100));
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isTraining]);

  const handleAlgorithmChange = (event: React.MouseEvent<HTMLElement>, newAlgorithm: string) => {
    if (newAlgorithm !== null) {
      setSelectedAlgorithm(newAlgorithm);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Optimized': return '#00e676';
      case 'Learning': return '#ffb74d';
      case 'Manual Override': return '#f44336';
      default: return '#757575';
    }
  };

  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
            AI Control Center
          </Typography>
          <Typography variant="h5" sx={{ color: '#b0b0b0', mb: 3 }}>
            Real-time Reinforcement Learning Traffic Optimization
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
            <FormControlLabel
              control={
                <Switch
                  checked={isAIEnabled}
                  onChange={(e) => setIsAIEnabled(e.target.checked)}
                  color="primary"
                />
              }
              label="AI Optimization Enabled"
            />
            <Button
              variant={isTraining ? "outlined" : "contained"}
              startIcon={isTraining ? <PauseIcon /> : <PlayIcon />}
              onClick={() => setIsTraining(!isTraining)}
              color="primary"
            >
              {isTraining ? 'Pause Training' : 'Start Training'}
            </Button>
          </Box>
        </Box>
      </motion.div>

      {/* Algorithm Selection */}
      <Paper sx={{ p: 3, mb: 4, backgroundColor: '#1a1a1a', border: '1px solid #333' }}>
        <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
          <AIIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
          Reinforcement Learning Algorithm
        </Typography>
        <Box sx={{ mb: 3 }}>
          <ToggleButtonGroup
            value={selectedAlgorithm}
            exclusive
            onChange={handleAlgorithmChange}
            sx={{ mb: 2 }}
          >
            <ToggleButton value="DQN">DQN</ToggleButton>
            <ToggleButton value="PPO">PPO</ToggleButton>
            <ToggleButton value="A3C">A3C</ToggleButton>
          </ToggleButtonGroup>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {algorithmMetrics[selectedAlgorithm as keyof typeof algorithmMetrics].description}
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" sx={{ color: '#b0b0b0', mb: 1 }}>
                Learning Progress: {learningProgress.toFixed(1)}%
              </Typography>
              <LinearProgress
                variant="determinate"
                value={learningProgress}
                sx={{
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: '#333',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: '#00e676'
                  }
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Chip 
                label={`Accuracy: ${algorithmMetrics[selectedAlgorithm as keyof typeof algorithmMetrics].accuracy}`}
                color="primary"
              />
              <Chip 
                label={`Avg Reward: ${algorithmMetrics[selectedAlgorithm as keyof typeof algorithmMetrics].avgReward}`}
                color="primary"
              />
              <Chip 
                label={`Convergence: ${algorithmMetrics[selectedAlgorithm as keyof typeof algorithmMetrics].convergence}`}
                color="primary"
              />
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Real-time Intersection Status */}
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
        <TrafficIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
        Live Intersection Control
      </Typography>
      
      {!isAIEnabled && (
        <Alert severity="warning" sx={{ mb: 3 }}>
          AI optimization is disabled. Traffic signals are operating on fixed timing.
        </Alert>
      )}

      <TableContainer component={Paper} sx={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#0d1117' }}>
              <TableCell>Intersection</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>AI Confidence</TableCell>
              <TableCell>Wait Time</TableCell>
              <TableCell>Throughput</TableCell>
              <TableCell>Current AI Action</TableCell>
              <TableCell>Controls</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {intersections.map((intersection) => (
              <TableRow key={intersection.id} hover>
                <TableCell>
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {intersection.name}
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#b0b0b0' }}>
                      ID: {intersection.id}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Chip
                    label={intersection.status}
                    size="small"
                    sx={{
                      backgroundColor: `${getStatusColor(intersection.status)}20`,
                      color: getStatusColor(intersection.status),
                      border: `1px solid ${getStatusColor(intersection.status)}60`
                    }}
                  />
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography variant="body2">{intersection.confidence}%</Typography>
                    <LinearProgress
                      variant="determinate"
                      value={intersection.confidence}
                      sx={{
                        width: 60,
                        height: 6,
                        borderRadius: 3,
                        backgroundColor: '#333',
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: intersection.confidence > 80 ? '#00e676' : 
                                         intersection.confidence > 60 ? '#ffb74d' : '#f44336'
                        }
                      }}
                    />
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography variant="body2" sx={{ 
                    color: parseInt(intersection.waitTime) > 60 ? '#f44336' : '#00e676'
                  }}>
                    {intersection.waitTime}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">{intersection.throughput}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
                    {intersection.aiAction}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Button
                    size="small"
                    variant={intersection.status === 'Manual Override' ? 'contained' : 'outlined'}
                    color={intersection.status === 'Manual Override' ? 'error' : 'primary'}
                  >
                    {intersection.status === 'Manual Override' ? 'Resume AI' : 'Manual Override'}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Performance Metrics */}
      <Grid container spacing={3} sx={{ mt: 4 }}>
        <Grid item xs={12} md={3}>
          <Card sx={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <SpeedIcon sx={{ fontSize: 40, color: '#00e676', mb: 1 }} />
              <Typography variant="h4" sx={{ fontWeight: 700, color: '#00e676' }}>
                15%
              </Typography>
              <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
                Average Wait Time Reduction
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card sx={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <TimelineIcon sx={{ fontSize: 40, color: '#00e676', mb: 1 }} />
              <Typography variant="h4" sx={{ fontWeight: 700, color: '#00e676' }}>
                94.1%
              </Typography>
              <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
                AI Decision Accuracy
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card sx={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <CheckIcon sx={{ fontSize: 40, color: '#00e676', mb: 1 }} />
              <Typography variant="h4" sx={{ fontWeight: 700, color: '#00e676' }}>
                98.7%
              </Typography>
              <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
                System Uptime
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card sx={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <TuneIcon sx={{ fontSize: 40, color: '#00e676', mb: 1 }} />
              <Typography variant="h4" sx={{ fontWeight: 700, color: '#00e676' }}>
                247
              </Typography>
              <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
                Active Optimizations/Hour
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AIControlCenter;