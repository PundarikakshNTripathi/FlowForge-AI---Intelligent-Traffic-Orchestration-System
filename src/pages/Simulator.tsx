import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Paper,
  Button,
  Slider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Alert,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import {
  PlayArrow as PlayIcon,
  Stop as StopIcon,
  Refresh as ResetIcon,
  Science as SimulationIcon,
  Traffic as TrafficIcon,
  Timeline as ResultsIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Simulator: React.FC = () => {
  const [isSimulating, setIsSimulating] = useState(false);
  const [vehicleDensity, setVehicleDensity] = useState(70);
  const [peakHourMultiplier, setPeakHourMultiplier] = useState(1.5);
  const [emergencyVehicles, setEmergencyVehicles] = useState(2);
  const [weatherCondition, setWeatherCondition] = useState('clear');
  const [selectedScenario, setSelectedScenario] = useState('rush_hour');

  const scenarios = [
    { id: 'rush_hour', name: 'Morning Rush Hour', description: 'High traffic volume, 7-9 AM simulation' },
    { id: 'accident', name: 'Traffic Incident', description: 'Road closure simulation with rerouting' },
    { id: 'event', name: 'Special Event', description: 'Stadium event with 50,000+ attendees' },
    { id: 'rain', name: 'Heavy Rain', description: 'Reduced visibility and speed conditions' },
    { id: 'custom', name: 'Custom Scenario', description: 'User-defined parameters' }
  ];

  const simulationResults = [
    {
      metric: 'Average Wait Time',
      before: '68 seconds',
      after: '45 seconds',
      improvement: '34% reduction',
      status: 'excellent'
    },
    {
      metric: 'Queue Length',
      before: '12.3 vehicles',
      after: '8.7 vehicles',
      improvement: '29% reduction',
      status: 'good'
    },
    {
      metric: 'Throughput',
      before: '1,240 vehicles/hour',
      after: '1,580 vehicles/hour',
      improvement: '27% increase',
      status: 'excellent'
    },
    {
      metric: 'Fuel Consumption',
      before: '45.2 L/hour',
      after: '32.8 L/hour',
      improvement: '27% reduction',
      status: 'excellent'
    },
    {
      metric: 'Emergency Response',
      before: '3.2 minutes',
      after: '1.8 minutes',
      improvement: '44% faster',
      status: 'excellent'
    }
  ];

  const handleSimulation = () => {
    setIsSimulating(!isSimulating);
    if (!isSimulating) {
      // Simulate for 5 seconds
      setTimeout(() => {
        setIsSimulating(false);
      }, 5000);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return '#00e676';
      case 'good': return '#ffb74d';
      case 'fair': return '#ff8a50';
      case 'poor': return '#f44336';
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
            What-If Simulator
          </Typography>
          <Typography variant="h5" sx={{ color: '#b0b0b0', mb: 3 }}>
            Test Traffic Scenarios & AI Predictions
          </Typography>
          <Chip 
            icon={<SimulationIcon />}
            label={isSimulating ? "Simulation Running..." : "Ready to Simulate"}
            color={isSimulating ? "warning" : "primary"}
            sx={{ fontSize: '1rem', px: 2, py: 1 }}
          />
        </Box>
      </motion.div>

      <Grid container spacing={4}>
        {/* Scenario Builder */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, backgroundColor: '#1a1a1a', border: '1px solid #333', height: 'fit-content' }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              <TrafficIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
              Scenario Builder
            </Typography>

            {/* Predefined Scenarios */}
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Select Scenario</InputLabel>
              <Select
                value={selectedScenario}
                label="Select Scenario"
                onChange={(e) => setSelectedScenario(e.target.value)}
              >
                {scenarios.map((scenario) => (
                  <MenuItem key={scenario.id} value={scenario.id}>
                    <Box>
                      <Typography variant="body1">{scenario.name}</Typography>
                      <Typography variant="caption" sx={{ color: '#b0b0b0' }}>
                        {scenario.description}
                      </Typography>
                    </Box>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Parameter Controls */}
            <Box sx={{ mb: 3 }}>
              <Typography variant="body2" sx={{ mb: 1, color: '#b0b0b0' }}>
                Vehicle Density: {vehicleDensity}%
              </Typography>
              <Slider
                value={vehicleDensity}
                onChange={(_, value) => setVehicleDensity(value as number)}
                min={10}
                max={150}
                sx={{ color: '#00e676' }}
              />
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography variant="body2" sx={{ mb: 1, color: '#b0b0b0' }}>
                Peak Hour Multiplier: {peakHourMultiplier}x
              </Typography>
              <Slider
                value={peakHourMultiplier}
                onChange={(_, value) => setPeakHourMultiplier(value as number)}
                min={1}
                max={3}
                step={0.1}
                sx={{ color: '#00e676' }}
              />
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography variant="body2" sx={{ mb: 1, color: '#b0b0b0' }}>
                Emergency Vehicles: {emergencyVehicles}
              </Typography>
              <Slider
                value={emergencyVehicles}
                onChange={(_, value) => setEmergencyVehicles(value as number)}
                min={0}
                max={10}
                sx={{ color: '#00e676' }}
              />
            </Box>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Weather Condition</InputLabel>
              <Select
                value={weatherCondition}
                label="Weather Condition"
                onChange={(e) => setWeatherCondition(e.target.value)}
              >
                <MenuItem value="clear">Clear</MenuItem>
                <MenuItem value="rain">Rain</MenuItem>
                <MenuItem value="heavy_rain">Heavy Rain</MenuItem>
                <MenuItem value="fog">Fog</MenuItem>
                <MenuItem value="snow">Snow</MenuItem>
              </Select>
            </FormControl>

            {/* Control Buttons */}
            <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column' }}>
              <Button
                variant="contained"
                size="large"
                startIcon={isSimulating ? <StopIcon /> : <PlayIcon />}
                onClick={handleSimulation}
                color={isSimulating ? "error" : "primary"}
                disabled={false}
              >
                {isSimulating ? 'Stop Simulation' : 'Start Simulation'}
              </Button>
              <Button
                variant="outlined"
                startIcon={<ResetIcon />}
                onClick={() => {
                  setVehicleDensity(70);
                  setPeakHourMultiplier(1.5);
                  setEmergencyVehicles(2);
                  setWeatherCondition('clear');
                  setSelectedScenario('rush_hour');
                }}
              >
                Reset Parameters
              </Button>
            </Box>
          </Paper>
        </Grid>

        {/* Simulation Visualization */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3, backgroundColor: '#1a1a1a', border: '1px solid #333', mb: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Live Simulation View
            </Typography>
            <Box sx={{
              height: '400px',
              backgroundColor: '#0d1117',
              border: '2px solid #333',
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {isSimulating ? (
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity
                  }}
                >
                  <Typography variant="h4" sx={{ color: '#00e676', textAlign: 'center' }}>
                    Simulation in Progress...
                    <br />
                    <Typography variant="body1" sx={{ color: '#b0b0b0', mt: 2 }}>
                      Analyzing traffic patterns with AI optimization
                    </Typography>
                  </Typography>
                </motion.div>
              ) : (
                <Typography variant="h5" sx={{ color: '#b0b0b0', textAlign: 'center' }}>
                  Traffic Flow Visualization
                  <br />
                  <Typography variant="body2" sx={{ mt: 2 }}>
                    Interactive city intersection simulation
                    <br />
                    Start simulation to see AI optimization in action
                  </Typography>
                </Typography>
              )}
            </Box>
          </Paper>

          {/* Results Table */}
          <Paper sx={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }}>
            <Box sx={{ p: 3, borderBottom: '1px solid #333' }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                <ResultsIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                Simulation Results
              </Typography>
              {!isSimulating && (
                <Alert severity="info" sx={{ mt: 2 }}>
                  Results from last simulation run. Start a new simulation to update these metrics.
                </Alert>
              )}
            </Box>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: '#0d1117' }}>
                    <TableCell>Metric</TableCell>
                    <TableCell>Before AI</TableCell>
                    <TableCell>After AI</TableCell>
                    <TableCell>Improvement</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {simulationResults.map((result, index) => (
                    <TableRow key={index} hover>
                      <TableCell sx={{ fontWeight: 600 }}>{result.metric}</TableCell>
                      <TableCell sx={{ color: '#f44336' }}>{result.before}</TableCell>
                      <TableCell sx={{ color: '#00e676' }}>{result.after}</TableCell>
                      <TableCell sx={{ color: '#00e676', fontWeight: 600 }}>{result.improvement}</TableCell>
                      <TableCell>
                        <Chip
                          label={result.status.toUpperCase()}
                          size="small"
                          sx={{
                            backgroundColor: `${getStatusColor(result.status)}20`,
                            color: getStatusColor(result.status),
                            border: `1px solid ${getStatusColor(result.status)}60`,
                            fontWeight: 600
                          }}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Simulator;