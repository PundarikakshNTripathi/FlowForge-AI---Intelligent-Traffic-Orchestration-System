import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  Divider,
} from '@mui/material';
import {
  Home as HomeIcon,
  Dashboard as DashboardIcon,
  Psychology as AIIcon,
  Science as SimulatorIcon,
  Analytics as AnalyticsIcon,
  MonitorHeart as SystemIcon,
  Engineering as TechIcon,
  Assessment as ReportsIcon,
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

interface SidebarProps {
  open: boolean;
  onToggle: () => void;
}

const menuItems = [
  { path: '/', label: 'Home', icon: HomeIcon },
  { path: '/dashboard', label: 'Live Dashboard', icon: DashboardIcon },
  { path: '/ai-control', label: 'AI Control Center', icon: AIIcon },
  { path: '/simulator', label: 'What-If Simulator', icon: SimulatorIcon },
  { path: '/analytics', label: 'Analytics Hub', icon: AnalyticsIcon },
  { path: '/system-status', label: 'System Status', icon: SystemIcon },
  { path: '/technology', label: 'Technology', icon: TechIcon },
  { path: '/reports', label: 'Reports', icon: ReportsIcon },
];

const Sidebar: React.FC<SidebarProps> = ({ open }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      sx={{
        width: open ? 280 : 80,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: open ? 280 : 80,
          boxSizing: 'border-box',
          backgroundColor: theme.palette.background.paper,
          borderRight: `1px solid ${theme.palette.mode === 'dark' ? '#333' : '#e0e0e0'}`,
          mt: 8,
          transition: 'width 0.3s',
          overflowX: 'hidden',
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        {open && (
          <Typography variant="h6" sx={{ color: '#00e676', fontWeight: 600 }}>
            Traffic Control
          </Typography>
        )}
      </Box>
      <Divider sx={{ borderColor: theme.palette.mode === 'dark' ? '#333' : '#e0e0e0' }} />
      
      <List>
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <ListItem key={item.path} disablePadding>
              <ListItemButton
                onClick={() => navigate(item.path)}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  backgroundColor: isActive ? 'rgba(0, 230, 118, 0.1)' : 'transparent',
                  borderRight: isActive ? '3px solid #00e676' : 'none',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 230, 118, 0.05)',
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: isActive ? '#00e676' : theme.palette.text.secondary,
                  }}
                >
                  <Icon />
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  sx={{
                    opacity: open ? 1 : 0,
                    color: isActive ? '#00e676' : theme.palette.text.primary,
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      
      {open && (
        <>
          <Divider sx={{ borderColor: theme.palette.mode === 'dark' ? '#333' : '#e0e0e0', mt: 2 }} />
          <Box sx={{ p: 2 }}>
            <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
              Version 1.0.0
            </Typography>
            <br />
            <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
              Smart India Hackathon 2025
            </Typography>
          </Box>
        </>
      )}
    </Drawer>
  );
};

export default Sidebar;