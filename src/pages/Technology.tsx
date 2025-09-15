import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Paper,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import {
  Psychology as AIIcon,
  Visibility as VisionIcon,
  Memory as ProcessorIcon,
  CloudQueue as CloudIcon,
  Speed as PerformanceIcon,
  Security as SecurityIcon,
  ExpandMore as ExpandMoreIcon,
  CheckCircle as CheckIcon,
  Engineering as TechIcon,
  DataObject as DataIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Technology: React.FC = () => {
  const architectureComponents = [
    {
      title: 'YOLOv8 Computer Vision',
      icon: <VisionIcon sx={{ color: '#00e676' }} />,
      description: 'Real-time object detection for vehicle identification and counting',
      features: ['80+ FPS processing', '99.2% detection accuracy', 'Works with existing cameras', 'All weather conditions'],
      tech: ['PyTorch', 'OpenCV', 'CUDA optimization']
    },
    {
      title: 'Deep Reinforcement Learning',
      icon: <AIIcon sx={{ color: '#00e676' }} />,
      description: 'DQN/PPO algorithms for intelligent signal timing optimization',
      features: ['Self-learning optimization', 'Multi-intersection coordination', 'Traffic pattern adaptation', 'Real-time decision making'],
      tech: ['Stable Baselines3', 'TensorFlow', 'Ray RLlib']
    },
    {
      title: 'Edge Computing',
      icon: <ProcessorIcon sx={{ color: '#00e676' }} />,
      description: 'Local processing for minimal latency and maximum reliability',
      features: ['<50ms response time', 'Offline capability', 'Data privacy protection', 'Scalable deployment'],
      tech: ['NVIDIA Jetson', 'Intel NUC', 'ARM processors']
    },
    {
      title: 'Cloud Integration',
      icon: <CloudIcon sx={{ color: '#00e676' }} />,
      description: 'Centralized monitoring and model updates across the city',
      features: ['City-wide analytics', 'Model synchronization', 'Performance monitoring', 'Remote management'],
      tech: ['FastAPI', 'PostgreSQL', 'Docker', 'Kubernetes']
    }
  ];

  const workflowSteps = [
    { title: 'Video Input', description: 'Existing traffic cameras capture live footage' },
    { title: 'Vehicle Detection', description: 'YOLOv8 identifies and counts vehicles in real-time' },
    { title: 'Traffic Analysis', description: 'Queue lengths, speeds, and patterns are analyzed' },
    { title: 'RL Decision', description: 'DQN/PPO agent determines optimal signal timing' },
    { title: 'Signal Control', description: 'Traffic signals are dynamically adjusted' },
    { title: 'Performance Monitoring', description: 'Results are tracked and model is continuously improved' }
  ];

  const specifications = [
    {
      category: 'Performance Metrics',
      items: [
        '10-15% reduction in average commute time',
        '15% fuel consumption savings',
        '20% emission reduction',
        '₹50 crore annual savings for tier-1 cities'
      ]
    },
    {
      category: 'Technical Requirements',
      items: [
        'Minimum 1080p camera resolution',
        'GPU with 4GB+ VRAM for edge processing',
        'Stable network connection (optional for offline mode)',
        'Compatible with existing signal control systems'
      ]
    },
    {
      category: 'Deployment Options',
      items: [
        'Single intersection pilot deployment',
        'Corridor-level optimization (3-5 intersections)',
        'City-wide comprehensive implementation',
        'Hybrid cloud-edge architecture'
      ]
    }
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
            Technology Architecture
          </Typography>
          <Typography variant="h5" sx={{ color: '#b0b0b0', mb: 4 }}>
            Advanced Computer Vision + Reinforcement Learning Integration
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Chip label="YOLOv8" color="primary" />
            <Chip label="Deep Q-Network" color="primary" />
            <Chip label="PPO Algorithm" color="primary" />
            <Chip label="Edge Computing" color="primary" />
            <Chip label="Real-time Processing" color="primary" />
          </Box>
        </Box>
      </motion.div>

      {/* Architecture Components */}
      <Grid container spacing={4} sx={{ mb: 6 }}>
        {architectureComponents.map((component, index) => (
          <Grid item xs={12} md={6} key={index}>
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card sx={{ height: '100%', backgroundColor: '#1a1a1a', border: '1px solid #333' }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    {component.icon}
                    <Typography variant="h6" sx={{ ml: 2, fontWeight: 600 }}>
                      {component.title}
                    </Typography>
                  </Box>
                  <Typography variant="body1" sx={{ mb: 3, color: '#b0b0b0' }}>
                    {component.description}
                  </Typography>
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle2" sx={{ mb: 1, color: '#00e676' }}>
                      Key Features:
                    </Typography>
                    {component.features.map((feature, idx) => (
                      <Box key={idx} sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                        <CheckIcon sx={{ fontSize: 16, color: '#00e676', mr: 1 }} />
                        <Typography variant="body2">{feature}</Typography>
                      </Box>
                    ))}
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" sx={{ mb: 1, color: '#00e676' }}>
                      Technologies:
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      {component.tech.map((tech, idx) => (
                        <Chip
                          key={idx}
                          label={tech}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(0, 230, 118, 0.1)',
                            color: '#00e676',
                            border: '1px solid rgba(0, 230, 118, 0.3)'
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Workflow Steps - Alternative to Timeline */}
      <Paper sx={{ p: 4, mb: 6, backgroundColor: '#111', border: '1px solid #333' }}>
        <Typography variant="h4" sx={{ mb: 4, textAlign: 'center', fontWeight: 600 }}>
          System Workflow
        </Typography>
        <Grid container spacing={3}>
          {workflowSteps.map((step, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card sx={{ height: '100%', backgroundColor: '#1a1a1a', border: '1px solid #333' }}>
                  <CardContent sx={{ textAlign: 'center', p: 3 }}>
                    <Box sx={{
                      width: 50,
                      height: 50,
                      borderRadius: '50%',
                      backgroundColor: '#00e676',
                      color: '#000',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 16px',
                      fontWeight: 700,
                      fontSize: '1.2rem'
                    }}>
                      {index + 1}
                    </Box>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                      {step.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
                      {step.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Technical Specifications */}
      <Typography variant="h4" sx={{ mb: 4, textAlign: 'center', fontWeight: 600 }}>
        Technical Specifications
      </Typography>
      <Grid container spacing={3}>
        {specifications.map((spec, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Accordion sx={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: '#00e676' }} />}
                sx={{ borderBottom: '1px solid #333' }}
              >
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#00e676' }}>
                  {spec.category}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List dense>
                  {spec.items.map((item, idx) => (
                    <ListItem key={idx} sx={{ pl: 0 }}>
                      <ListItemIcon>
                        <CheckIcon sx={{ color: '#00e676', fontSize: 18 }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={item}
                        primaryTypographyProps={{ variant: 'body2' }}
                      />
                    </ListItem>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Technology;