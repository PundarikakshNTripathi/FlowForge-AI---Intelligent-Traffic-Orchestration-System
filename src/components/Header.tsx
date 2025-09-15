import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Switch,
  Tooltip,
  Badge,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  FormControlLabel,
  Checkbox,
  Slider,
  TextField,
  Paper,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Brightness4 as DarkModeIcon,
  Brightness7 as LightModeIcon,
  Notifications as NotificationsIcon,
  Settings as SettingsIcon,
  Warning as WarningIcon,
  Info as InfoIcon,
  CheckCircle as SuccessIcon,
  VolumeUp as VolumeIcon,
  Email as EmailIcon,
  Sms as SmsIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

interface HeaderProps {
  onToggleSidebar: () => void;
  onToggleTheme: () => void;
  darkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar, onToggleTheme, darkMode }) => {
  const theme = useTheme();
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [notificationSettings, setNotificationSettings] = useState({
    emailAlerts: true,
    smsAlerts: false,
    pushNotifications: true,
    soundEnabled: true,
    alertVolume: 70,
    trafficAlerts: true,
    systemAlerts: true,
    performanceAlerts: false,
  });

  const notifications = [
    {
      id: 1,
      type: 'warning',
      title: 'High Traffic Detected',
      message: 'Unusual congestion at MG Road intersection',
      time: '2 min ago',
      read: false
    },
    {
      id: 2,
      type: 'success',
      title: 'Optimization Complete',
      message: 'Signal timing optimized for peak hours',
      time: '15 min ago',
      read: false
    },
    {
      id: 3,
      type: 'info',
      title: 'System Update',
      message: 'New AI model deployed successfully',
      time: '1 hour ago',
      read: true
    },
  ];

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'warning': return <WarningIcon sx={{ color: '#ffb74d' }} />;
      case 'success': return <SuccessIcon sx={{ color: '#00e676' }} />;
      case 'info': return <InfoIcon sx={{ color: '#2196f3' }} />;
      default: return <InfoIcon />;
    }
  };

  const handleNotificationSettingChange = (setting: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setNotificationSettings({
      ...notificationSettings,
      [setting]: event.target.checked,
    });
  };

  const handleVolumeChange = (event: Event, newValue: number | number[]) => {
    setNotificationSettings({
      ...notificationSettings,
      alertVolume: newValue as number,
    });
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{ 
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: theme.palette.background.paper,
          borderBottom: `1px solid ${theme.palette.mode === 'dark' ? '#333' : '#e0e0e0'}`,
          color: theme.palette.text.primary,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="toggle sidebar"
            onClick={onToggleSidebar}
            edge="start"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
            <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
              FlowForge AI
            </Typography>
            <Box
              sx={{
                ml: 1,
                px: 1,
                py: 0.5,
                backgroundColor: '#00e676',
                color: '#000',
                borderRadius: 1,
                fontSize: '0.75rem',
                fontWeight: 600,
              }}
            >
              LIVE
            </Box>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Tooltip title="Toggle theme">
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LightModeIcon sx={{ mr: 1, color: darkMode ? '#666' : '#fff' }} />
                <Switch
                  checked={darkMode}
                  onChange={onToggleTheme}
                  color="primary"
                />
                <DarkModeIcon sx={{ ml: 1, color: darkMode ? '#fff' : '#666' }} />
              </Box>
            </Tooltip>

            <Tooltip title="Notifications">
              <IconButton 
                color="inherit" 
                onClick={() => setNotificationsOpen(true)}
              >
                <Badge badgeContent={unreadCount} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Tooltip>

            <Tooltip title="Settings">
              <IconButton 
                color="inherit"
                onClick={() => setSettingsOpen(true)}
              >
                <SettingsIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Notifications Dialog */}
      <Dialog
        open={notificationsOpen}
        onClose={() => setNotificationsOpen(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: theme.palette.background.paper,
            border: `1px solid ${theme.palette.mode === 'dark' ? '#333' : '#e0e0e0'}`,
          }
        }}
      >
        <DialogTitle sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          borderBottom: `1px solid ${theme.palette.mode === 'dark' ? '#333' : '#e0e0e0'}`
        }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Notifications ({unreadCount} unread)
          </Typography>
          <IconButton 
            onClick={() => setNotificationsOpen(false)}
            sx={{ color: theme.palette.text.primary }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ p: 0 }}>
          <List>
            {notifications.map((notification, index) => (
              <React.Fragment key={notification.id}>
                <ListItem 
                  sx={{ 
                    py: 2,
                    backgroundColor: notification.read ? 'transparent' : 'rgba(0, 230, 118, 0.05)'
                  }}
                >
                  <ListItemIcon>
                    {getNotificationIcon(notification.type)}
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="body1" sx={{ fontWeight: notification.read ? 400 : 600 }}>
                        {notification.title}
                      </Typography>
                    }
                    secondary={
                      <Box>
                        <Typography variant="body2" sx={{ color: '#b0b0b0', mb: 0.5 }}>
                          {notification.message}
                        </Typography>
                        <Typography variant="caption" sx={{ color: '#888' }}>
                          {notification.time}
                        </Typography>
                      </Box>
                    }
                  />
                </ListItem>
                {index < notifications.length - 1 && <Divider sx={{ borderColor: '#333' }} />}
              </React.Fragment>
            ))}
          </List>
        </DialogContent>
        <DialogActions sx={{ borderTop: '1px solid #333', p: 2 }}>
          <Button onClick={() => setNotificationsOpen(false)} color="primary">
            Mark All as Read
          </Button>
          <Button onClick={() => setNotificationsOpen(false)} variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Settings Dialog */}
      <Dialog
        open={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: '#1a1a1a',
            border: '1px solid #333',
          }
        }}
      >
        <DialogTitle sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          borderBottom: `1px solid ${theme.palette.mode === 'dark' ? '#333' : '#e0e0e0'}`
        }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            System Settings
          </Typography>
          <IconButton 
            onClick={() => setSettingsOpen(false)}
            sx={{ color: theme.palette.text.primary }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ p: 3 }}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ mb: 2, color: '#00e676' }}>
              Notification Preferences
            </Typography>
            <Paper sx={{ p: 2, backgroundColor: '#111', border: '1px solid #333' }}>
              <FormControlLabel
                control={
                  <Checkbox 
                    checked={notificationSettings.emailAlerts}
                    onChange={handleNotificationSettingChange('emailAlerts')}
                    color="primary"
                  />
                }
                label="Email Alerts"
              />
              <FormControlLabel
                control={
                  <Checkbox 
                    checked={notificationSettings.smsAlerts}
                    onChange={handleNotificationSettingChange('smsAlerts')}
                    color="primary"
                  />
                }
                label="SMS Alerts"
              />
              <FormControlLabel
                control={
                  <Checkbox 
                    checked={notificationSettings.pushNotifications}
                    onChange={handleNotificationSettingChange('pushNotifications')}
                    color="primary"
                  />
                }
                label="Push Notifications"
              />
            </Paper>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ mb: 2, color: '#00e676' }}>
              Alert Categories
            </Typography>
            <Paper sx={{ p: 2, backgroundColor: '#111', border: '1px solid #333' }}>
              <FormControlLabel
                control={
                  <Checkbox 
                    checked={notificationSettings.trafficAlerts}
                    onChange={handleNotificationSettingChange('trafficAlerts')}
                    color="primary"
                  />
                }
                label="Traffic Alerts"
              />
              <FormControlLabel
                control={
                  <Checkbox 
                    checked={notificationSettings.systemAlerts}
                    onChange={handleNotificationSettingChange('systemAlerts')}
                    color="primary"
                  />
                }
                label="System Alerts"
              />
              <FormControlLabel
                control={
                  <Checkbox 
                    checked={notificationSettings.performanceAlerts}
                    onChange={handleNotificationSettingChange('performanceAlerts')}
                    color="primary"
                  />
                }
                label="Performance Alerts"
              />
            </Paper>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ mb: 2, color: '#00e676' }}>
              Sound Settings
            </Typography>
            <Paper sx={{ p: 2, backgroundColor: '#111', border: '1px solid #333' }}>
              <FormControlLabel
                control={
                  <Checkbox 
                    checked={notificationSettings.soundEnabled}
                    onChange={handleNotificationSettingChange('soundEnabled')}
                    color="primary"
                  />
                }
                label="Enable Sound Alerts"
              />
              <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                <VolumeIcon sx={{ color: '#b0b0b0' }} />
                <Slider
                  value={notificationSettings.alertVolume}
                  onChange={handleVolumeChange}
                  disabled={!notificationSettings.soundEnabled}
                  sx={{ flexGrow: 1 }}
                  min={0}
                  max={100}
                  valueLabelDisplay="auto"
                  color="primary"
                />
                <Typography variant="body2" sx={{ minWidth: 40 }}>
                  {notificationSettings.alertVolume}%
                </Typography>
              </Box>
            </Paper>
          </Box>

          <Box>
            <Typography variant="h6" sx={{ mb: 2, color: '#00e676' }}>
              System Information
            </Typography>
            <Paper sx={{ p: 2, backgroundColor: '#111', border: '1px solid #333' }}>
              <TextField
                label="System Version"
                value="FlowForge AI v2.1.0"
                fullWidth
                disabled
                sx={{ mb: 2 }}
              />
              <TextField
                label="Last Update"
                value="March 15, 2025 - 14:30 IST"
                fullWidth
                disabled
                sx={{ mb: 2 }}
              />
              <TextField
                label="License"
                value="Smart India Hackathon 2025 - Academic License"
                fullWidth
                disabled
              />
            </Paper>
          </Box>
        </DialogContent>
        <DialogActions sx={{ borderTop: '1px solid #333', p: 2 }}>
          <Button onClick={() => setSettingsOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={() => setSettingsOpen(false)} variant="contained">
            Save Settings
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Header;