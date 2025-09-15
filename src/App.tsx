import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import AIControlCenter from './pages/AIControlCenter';
import Simulator from './pages/Simulator';
import Analytics from './pages/Analytics';
import SystemStatus from './pages/SystemStatus';
import Technology from './pages/Technology';
import Reports from './pages/Reports';
import { ThemeContext } from './hooks/useTheme';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#00e676',
        light: '#66ffa6',
        dark: '#00b248',
        contrastText: '#000000',
      },
      secondary: {
        main: darkMode ? '#ff5722' : '#1976d2',
        light: darkMode ? '#ff8a50' : '#42a5f5',
        dark: darkMode ? '#c41c00' : '#1565c0',
        contrastText: '#ffffff',
      },
      error: {
        main: darkMode ? '#f44336' : '#d32f2f',
        light: darkMode ? '#e57373' : '#ef5350',
        dark: darkMode ? '#d32f2f' : '#c62828',
      },
      warning: {
        main: darkMode ? '#ffb74d' : '#ed6c02',
        light: darkMode ? '#ffcc80' : '#ff9800',
        dark: darkMode ? '#f57c00' : '#e65100',
      },
      info: {
        main: darkMode ? '#29b6f6' : '#0288d1',
        light: darkMode ? '#4fc3f7' : '#03a9f4',
        dark: darkMode ? '#0277bd' : '#01579b',
      },
      success: {
        main: '#00e676',
        light: '#66ffa6',
        dark: '#00b248',
      },
      background: {
        default: darkMode ? '#0a0a0a' : '#fafafa',
        paper: darkMode ? '#1a1a1a' : '#ffffff',
      },
      text: {
        primary: darkMode ? '#ffffff' : '#212121',
        secondary: darkMode ? '#b0b0b0' : '#757575',
        disabled: darkMode ? '#666666' : '#bdbdbd',
      },
      divider: darkMode ? '#333333' : '#e0e0e0',
      action: {
        hover: darkMode ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.04)',
        selected: darkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
        disabled: darkMode ? 'rgba(255, 255, 255, 0.26)' : 'rgba(0, 0, 0, 0.26)',
        disabledBackground: darkMode ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)',
      },
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: darkMode ? '#1a1a1a' : '#ffffff',
            border: `1px solid ${darkMode ? '#333333' : '#e0e0e0'}`,
            '&:hover': {
              borderColor: darkMode ? '#444444' : '#d0d0d0',
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: darkMode ? '#1a1a1a' : '#ffffff',
            border: `1px solid ${darkMode ? '#333333' : '#e0e0e0'}`,
          },
        },
      },
      MuiTableContainer: {
        styleOverrides: {
          root: {
            backgroundColor: darkMode ? '#111111' : '#fafafa',
          },
        },
      },
      MuiTableHead: {
        styleOverrides: {
          root: {
            backgroundColor: darkMode ? '#1a1a1a' : '#f5f5f5',
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            borderBottom: `1px solid ${darkMode ? '#333333' : '#e0e0e0'}`,
          },
        },
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontSize: '2.5rem',
        fontWeight: 700,
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 600,
      },
      h3: {
        fontSize: '1.75rem',
        fontWeight: 600,
      },
    },
  });

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
        <Box sx={{ display: 'flex', minHeight: '100vh' }}>
          <Header 
            onToggleSidebar={toggleSidebar}
            onToggleTheme={toggleTheme}
            darkMode={darkMode}
          />
          <Sidebar open={sidebarOpen} onToggle={toggleSidebar} />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              mt: 8,
              ml: sidebarOpen ? '280px' : '80px',
              transition: theme.transitions.create(['margin'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
              }),
              backgroundColor: theme.palette.background.default,
            }}
          >
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/ai-control" element={<AIControlCenter />} />
              <Route path="/simulator" element={<Simulator />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/system-status" element={<SystemStatus />} />
              <Route path="/technology" element={<Technology />} />
              <Route path="/reports" element={<Reports />} />
            </Routes>
          </Box>
        </Box>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export default App;