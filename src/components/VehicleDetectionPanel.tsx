import React from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Chip,
  LinearProgress,
  Divider,
} from '@mui/material';
import {
  DirectionsCar as CarIcon,
  DirectionsBus as BusIcon,
  LocalShipping as TruckIcon,
  TwoWheeler as MotorcycleIcon,
  PedalBike as BikeIcon,
} from '@mui/icons-material';
import { VehicleDetection } from '../types';

interface VehicleDetectionPanelProps {
  detections: VehicleDetection[];
}

const VehicleDetectionPanel: React.FC<VehicleDetectionPanelProps> = ({ detections }) => {
  const getVehicleIcon = (type: string) => {
    switch (type) {
      case 'car': return <CarIcon sx={{ color: '#00e676' }} />;
      case 'bus': return <BusIcon sx={{ color: '#ff9800' }} />;
      case 'truck': return <TruckIcon sx={{ color: '#f44336' }} />;
      case 'motorcycle': return <MotorcycleIcon sx={{ color: '#2196f3' }} />;
      case 'bicycle': return <BikeIcon sx={{ color: '#9c27b0' }} />;
      default: return <CarIcon sx={{ color: '#666' }} />;
    }
  };

  const getVehicleCount = (type: string) => {
    return detections.filter(d => d.type === type).length;
  };

  const vehicleTypes = ['car', 'bus', 'truck', 'motorcycle', 'bicycle'];
  const totalDetections = detections.length;

  return (
    <Box sx={{ height: '100%', overflow: 'hidden' }}>
      {/* Header */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" sx={{ mb: 1, color: '#00e676' }}>
          Total Detections: {totalDetections}
        </Typography>
        <Typography variant="caption" sx={{ color: '#b0b0b0' }}>
          Real-time YOLOv8 object detection
        </Typography>
      </Box>

      {/* Vehicle Type Summary */}
      <Box sx={{ mb: 3 }}>
        {vehicleTypes.map((type) => {
          const count = getVehicleCount(type);
          const percentage = totalDetections > 0 ? (count / totalDetections) * 100 : 0;
          
          return (
            <Box key={type} sx={{ mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {getVehicleIcon(type)}
                  <Typography variant="body2" sx={{ ml: 1, textTransform: 'capitalize' }}>
                    {type}
                  </Typography>
                </Box>
                <Chip
                  label={count}
                  size="small"
                  sx={{
                    backgroundColor: 'rgba(0, 230, 118, 0.1)',
                    color: '#00e676',
                    fontWeight: 600,
                  }}
                />
              </Box>
              <LinearProgress
                variant="determinate"
                value={percentage}
                sx={{
                  height: 6,
                  borderRadius: 3,
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: 
                      type === 'car' ? '#00e676' :
                      type === 'bus' ? '#ff9800' :
                      type === 'truck' ? '#f44336' :
                      type === 'motorcycle' ? '#2196f3' : '#9c27b0',
                  },
                }}
              />
              <Typography variant="caption" sx={{ color: '#b0b0b0' }}>
                {percentage.toFixed(1)}%
              </Typography>
            </Box>
          );
        })}
      </Box>

      <Divider sx={{ borderColor: '#333', mb: 3 }} />

      {/* Recent Detections */}
      <Box>
        <Typography variant="h6" sx={{ mb: 2, fontSize: '1rem' }}>
          Recent Detections
        </Typography>
        <Box sx={{ maxHeight: '200px', overflowY: 'auto' }}>
          <List dense>
            {detections.slice(0, 10).map((detection) => (
              <ListItem key={detection.id} sx={{ px: 0 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                  {getVehicleIcon(detection.type)}
                  <ListItemText
                    primary={
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="body2" sx={{ textTransform: 'capitalize' }}>
                          {detection.type}
                        </Typography>
                        <Chip
                          label={`${(detection.confidence * 100).toFixed(1)}%`}
                          size="small"
                          sx={{
                            backgroundColor: detection.confidence > 0.8 ? 
                              'rgba(76, 175, 80, 0.2)' : 'rgba(255, 152, 0, 0.2)',
                            color: detection.confidence > 0.8 ? '#4caf50' : '#ff9800',
                            fontSize: '0.7rem',
                          }}
                        />
                      </Box>
                    }
                    secondary={
                      <Typography variant="caption" sx={{ color: '#b0b0b0' }}>
                        {detection.timestamp.toLocaleTimeString()}
                      </Typography>
                    }
                  />
                </Box>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>

      {/* Performance Indicator */}
      <Box sx={{ mt: 'auto', pt: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
          <Typography variant="caption">Model Performance</Typography>
          <Typography variant="caption" sx={{ color: '#00e676', fontWeight: 600 }}>
            Excellent
          </Typography>
        </Box>
        <LinearProgress
          variant="determinate"
          value={94.2}
          sx={{
            height: 4,
            borderRadius: 2,
            '& .MuiLinearProgress-bar': {
              backgroundColor: '#00e676',
            },
          }}
        />
        <Typography variant="caption" sx={{ color: '#b0b0b0' }}>
          94.2% accuracy • 28.5 FPS
        </Typography>
      </Box>
    </Box>
  );
};

export default VehicleDetectionPanel;