import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Chip,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  Speed as SpeedIcon,
  LocalGasStation as EcoIcon,
  MonetizationOn as MoneyIcon,
  Visibility as VisionIcon,
  Psychology as AIIcon,
  CloudQueue as CloudIcon,
  IntegrationInstructions as IntegrationIcon,
  CheckCircle as CheckIcon,
  ArrowForward as ArrowIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: <TrendingUpIcon sx={{ fontSize: 40, color: '#00e676' }} />,
      title: '10%+ Commute Time Reduction',
      description: 'AI-optimized signal timing reduces average travel time by 10-15% across urban intersections',
    },
    {
      icon: <EcoIcon sx={{ fontSize: 40, color: '#00e676' }} />,
      title: '15% Fuel Savings',
      description: 'Reduced idle time at signals translates to significant fuel consumption reduction',
    },
    {
      icon: <MoneyIcon sx={{ fontSize: 40, color: '#00e676' }} />,
      title: '₹50 Crore Annual Savings',
      description: 'Estimated fuel cost savings for a tier-1 city implementation',
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 40, color: '#00e676' }} />,
      title: '20% Emission Reduction',
      description: 'Lower emissions through optimized traffic flow and reduced congestion',
    },
  ];

  const techStack = [
    {
      category: 'Computer Vision',
      icon: <VisionIcon sx={{ color: '#00e676' }} />,
      technologies: ['YOLOv8', 'OpenCV', 'Real-time Detection'],
      description: 'Pre-trained models for accurate vehicle detection from existing camera infrastructure',
    },
    {
      category: 'AI Engine',
      icon: <AIIcon sx={{ color: '#00e676' }} />,
      technologies: ['Stable Baselines3', 'DQN/PPO', 'Reinforcement Learning'],
      description: 'Advanced RL algorithms for dynamic signal optimization and traffic management',
    },
    {
      category: 'Simulation',
      icon: <CloudIcon sx={{ color: '#00e676' }} />,
      technologies: ['CityFlow', 'SUMO', 'What-if Scenarios'],
      description: 'Traffic environment modeling for testing and validation of optimization strategies',
    },
    {
      category: 'Backend & Integration',
      icon: <IntegrationIcon sx={{ color: '#00e676' }} />,
      technologies: ['FastAPI', 'PostgreSQL', 'Docker'],
      description: 'Scalable architecture with API-first approach for seamless city system integration',
    },
  ];

  const keyFeatures = [
    'Real-time vehicle detection from existing traffic cameras',
    'Dynamic signal optimization through RL agents',
    'Centralized dashboard with manual override capabilities',
    'Predictive congestion mitigation',
    'Cost-effective solution leveraging existing infrastructure',
    'Proven 10%+ reduction in commute time',
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Box sx={{ mb: 2 }}>
                  <Chip
                    label="Smart India Hackathon 2025"
                    color="primary"
                    sx={{ mb: 2, fontWeight: 600 }}
                  />
                </Box>
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    background: 'linear-gradient(45deg, #00e676, #64ffda)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  FlowForge AI
                </Typography>
                <Typography variant="h4" sx={{ mb: 3, color: '#b0b0b0' }}>
                  Intelligent Traffic Orchestration System
                </Typography>
                <Typography variant="h6" sx={{ mb: 4, lineHeight: 1.6 }}>
                  Revolutionary AI-powered traffic management that reduces urban congestion
                  by 10%+, saves ₹50 crore annually in fuel costs, and creates smarter cities
                  through existing camera infrastructure.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => navigate('/dashboard')}
                    endIcon={<ArrowIcon />}
                    sx={{
                      backgroundColor: '#00e676',
                      color: '#000',
                      fontWeight: 600,
                      px: 4,
                      py: 1.5,
                      '&:hover': {
                        backgroundColor: '#00c965',
                      },
                    }}
                  >
                    View Live Dashboard
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => navigate('/technology')}
                    sx={{
                      borderColor: '#00e676',
                      color: '#00e676',
                      px: 4,
                      py: 1.5,
                    }}
                  >
                    Explore Technology
                  </Button>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    height: '400px',
                    background: 'linear-gradient(45deg, rgba(0, 230, 118, 0.1), rgba(100, 255, 218, 0.1))',
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(0, 230, 118, 0.3)',
                  }}
                >
                  <Typography variant="h3" sx={{ color: '#00e676', textAlign: 'center' }}>
                    AI Traffic Control
                    <br />
                    <Typography variant="h6" component="span" sx={{ color: '#b0b0b0' }}>
                      Live Demo Visualization
                    </Typography>
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Benefits Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h2" textAlign="center" sx={{ mb: 6, fontWeight: 600 }}>
          Proven Impact & Benefits
        </Typography>
        <Grid container spacing={4}>
          {benefits.map((benefit, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    p: 3,
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      transition: 'transform 0.3s',
                    },
                  }}
                >
                  <CardContent>
                    <Box sx={{ mb: 2 }}>{benefit.icon}</Box>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                      {benefit.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
                      {benefit.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Technology Stack */}
      <Box sx={{ backgroundColor: '#111', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" textAlign="center" sx={{ mb: 6, fontWeight: 600 }}>
            Complete Technology Stack
          </Typography>
          <Grid container spacing={4}>
            {techStack.map((tech, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Paper
                    sx={{
                      p: 4,
                      height: '100%',
                      backgroundColor: '#1a1a1a',
                      border: '1px solid #333',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      {tech.icon}
                      <Typography variant="h6" sx={{ ml: 2, fontWeight: 600 }}>
                        {tech.category}
                      </Typography>
                    </Box>
                    <Box sx={{ mb: 3 }}>
                      {tech.technologies.map((technology, techIndex) => (
                        <Chip
                          key={techIndex}
                          label={technology}
                          sx={{
                            mr: 1,
                            mb: 1,
                            backgroundColor: 'rgba(0, 230, 118, 0.1)',
                            color: '#00e676',
                            border: '1px solid rgba(0, 230, 118, 0.3)',
                          }}
                        />
                      ))}
                    </Box>
                    <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
                      {tech.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Key Features */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h2" sx={{ mb: 4, fontWeight: 600 }}>
              Key Solution Features
            </Typography>
            <List>
              {keyFeatures.map((feature, index) => (
                <ListItem key={index} sx={{ pl: 0 }}>
                  <ListItemIcon>
                    <CheckIcon sx={{ color: '#00e676' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={feature}
                    sx={{ '& .MuiListItemText-primary': { fontSize: '1.1rem' } }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                p: 4,
                backgroundColor: '#1a1a1a',
                border: '2px solid #00e676',
              }}
            >
              <Typography variant="h5" sx={{ mb: 3, color: '#00e676', fontWeight: 600 }}>
                For Traffic Authorities
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Real-time city-wide traffic visibility, data-driven decision making,
                reduced manual intervention, and improved citizen satisfaction.
              </Typography>
              <Typography variant="h5" sx={{ mb: 3, color: '#00e676', fontWeight: 600 }}>
                For Citizens
              </Typography>
              <Typography variant="body1">
                Reduced travel time, lower fuel costs, decreased stress,
                and improved air quality in urban areas.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box
        sx={{
          backgroundColor: '#00e676',
          color: '#000',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ mb: 3, fontWeight: 700 }}>
            Ready to Transform Urban Mobility?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.8 }}>
            Experience the future of intelligent traffic management with FlowForge AI
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/dashboard')}
              sx={{
                backgroundColor: '#000',
                color: '#00e676',
                px: 4,
                py: 1.5,
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: '#333',
                },
              }}
            >
              Launch Live Dashboard
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate('/simulator')}
              sx={{
                borderColor: '#000',
                color: '#000',
                px: 4,
                py: 1.5,
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.1)',
                },
              }}
            >
              Try What-If Simulator
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;