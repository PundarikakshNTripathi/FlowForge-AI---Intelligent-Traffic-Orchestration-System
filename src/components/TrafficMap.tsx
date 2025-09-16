import React from 'react';
import { Box, Typography, Card, CardContent, Chip } from '@mui/material';
import { TrafficLight } from '../types';

interface TrafficMapProps {
  trafficLights: TrafficLight[];
}

const TrafficMap: React.FC<TrafficMapProps> = ({ trafficLights }) => {
  return (
    <Box 
      sx={{ 
        position: 'relative',
        width: '100%',
        height: '500px',
        backgroundColor: '#111',
        borderRadius: 2,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Map Background */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(90deg, #333 1px, transparent 1px),
            linear-gradient(#333 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          opacity: 0.3,
        }}
      />
      
      {/* Traffic Light Markers */}
      {trafficLights.map((light, index) => (
        <Card
          key={light.id}
          sx={{
            position: 'absolute',
            top: `${20 + index * 25}%`,
            left: `${15 + index * 20}%`,
            minWidth: '200px',
            backgroundColor: 'rgba(26, 26, 26, 0.9)',
            border: '1px solid #333',
            cursor: 'pointer',
            '&:hover': {
              transform: 'scale(1.05)',
              transition: 'transform 0.2s',
            },
          }}
        >
          <CardContent sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
              <Typography variant="h6" sx={{ fontSize: '0.9rem', fontWeight: 600 }}>
                {light.location}
              </Typography>
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  backgroundColor: 
                    light.status === 'green' ? '#4caf50' : 
                    light.status === 'yellow' ? '#ffeb3b' : '#f44336',
                  boxShadow: `0 0 10px ${
                    light.status === 'green' ? '#4caf50' : 
                    light.status === 'yellow' ? '#ffeb3b' : '#f44336'
                  }`,
                }}
              />
            </Box>
            <Typography variant="caption" sx={{ color: '#b0b0b0', display: 'block', mb: 1 }}>
              {light.phase} • {light.countdown}s
            </Typography>
            <Chip
              label={light.status.toUpperCase()}
              size="small"
              sx={{
                backgroundColor: 
                  light.status === 'green' ? '#4caf50' : 
                  light.status === 'yellow' ? '#ffeb3b' : '#f44336',
                color: light.status === 'yellow' ? '#000' : '#fff',
                fontWeight: 600,
                fontSize: '0.7rem',
              }}
            />
          </CardContent>
        </Card>
      ))}
      
      {/* Center Map Info */}
      <Box sx={{ textAlign: 'center', zIndex: 0 }}>
        <Typography variant="h4" sx={{ color: '#333', mb: 2 }}>
          Delhi Traffic Network
        </Typography>
        <Typography variant="h6" sx={{ color: '#555' }}>
          Interactive Map View
        </Typography>
        <Typography variant="caption" sx={{ color: '#666', display: 'block', mt: 2 }}>
          Click on intersection markers for details
        </Typography>
      </Box>
    </Box>
  );
};

export default TrafficMap;