import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  MenuItem,
  Select,
  FormControl,
  InputLabel,

  TextField,
  IconButton,
  Tabs,
  Tab,
} from '@mui/material';
import {
  Download as DownloadIcon,
  Assessment as ReportIcon,
  TrendingUp as TrendIcon,
  PictureAsPdf as PdfIcon,
  TableChart as ExcelIcon,
  BarChart as ChartIcon,
  Refresh as RefreshIcon,
  Filter as FilterIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`reports-tabpanel-${index}`}
      aria-labelledby={`reports-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

const Reports: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);
  const [reportPeriod, setReportPeriod] = useState('weekly');

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const performanceReports = [
    {
      id: 'RPT-001',
      title: 'Weekly Traffic Performance Summary',
      period: 'March 10-16, 2025',
      type: 'Performance',
      size: '2.4 MB',
      generated: '2 hours ago',
      status: 'Ready',
      description: 'Comprehensive analysis of signal optimization and traffic flow improvements'
    },
    {
      id: 'RPT-002',
      title: 'Monthly Fuel Savings Report',
      period: 'February 2025',
      type: 'Environmental',
      size: '5.1 MB',
      generated: '1 day ago',
      status: 'Ready',
      description: 'Detailed breakdown of fuel consumption reduction and cost savings'
    },
    {
      id: 'RPT-003',
      title: 'AI Model Performance Metrics',
      period: 'Q1 2025',
      type: 'Technical',
      size: '8.3 MB',
      generated: '3 days ago',
      status: 'Ready',
      description: 'Reinforcement learning algorithm performance and optimization results'
    },
    {
      id: 'RPT-004',
      title: 'Peak Hour Analysis Report',
      period: 'March 1-15, 2025',
      type: 'Operations',
      size: '3.7 MB',
      generated: '5 days ago',
      status: 'Ready',
      description: 'Rush hour traffic patterns and optimization effectiveness'
    },
  ];

  const trendAnalysis = [
    {
      metric: 'Average Commute Time',
      change: '-15.2%',
      period: 'vs Last Month',
      trend: 'improving',
      value: '22.4 min',
      target: '20.0 min'
    },
    {
      metric: 'Fuel Consumption',
      change: '-18.7%',
      period: 'vs Last Month',
      trend: 'improving',
      value: '₹4.2 Cr',
      target: '₹3.8 Cr'
    },
    {
      metric: 'Signal Response Time',
      change: '-23.1%',
      period: 'vs Last Month',
      trend: 'improving',
      value: '47ms',
      target: '< 50ms'
    },
    {
      metric: 'Intersection Efficiency',
      change: '+12.8%',
      period: 'vs Last Month',
      trend: 'improving',
      value: '94.1%',
      target: '> 95%'
    },
  ];

  const customReports = [
    { name: 'Intersection Performance', description: 'Individual intersection analysis and optimization metrics' },
    { name: 'Environmental Impact', description: 'CO2 emissions, fuel savings, and environmental benefits' },
    { name: 'Cost-Benefit Analysis', description: 'Financial impact and ROI analysis for traffic optimization' },
    { name: 'Algorithm Performance', description: 'Deep dive into RL algorithm decisions and learning progress' },
    { name: 'Comparative Analysis', description: 'Before/after comparisons and baseline performance metrics' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Ready': return '#00e676';
      case 'Processing': return '#ffb74d';
      case 'Failed': return '#f44336';
      default: return '#666';
    }
  };

  const getTrendColor = (trend: string) => {
    return trend === 'improving' ? '#00e676' : trend === 'declining' ? '#f44336' : '#ffb74d';
  };

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
            Reports & Analytics
          </Typography>
          <Typography variant="h5" sx={{ color: '#b0b0b0' }}>
            Downloadable traffic reports, trend analysis, and performance insights
          </Typography>
        </Box>
      </motion.div>

      {/* Report Tabs */}
      <Paper sx={{ backgroundColor: '#1a1a1a', border: '1px solid #333', mb: 4 }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          sx={{
            borderBottom: '1px solid #333',
            '& .MuiTab-root': { color: '#b0b0b0' },
            '& .MuiTab-root.Mui-selected': { color: '#00e676' },
            '& .MuiTabs-indicator': { backgroundColor: '#00e676' }
          }}
        >
          <Tab label="Generated Reports" icon={<ReportIcon />} />
          <Tab label="Trend Analysis" icon={<TrendIcon />} />
          <Tab label="Custom Reports" icon={<ChartIcon />} />
        </Tabs>

        {/* Generated Reports Tab */}
        <TabPanel value={tabValue} index={0}>
          <Box sx={{ mb: 3, display: 'flex', gap: 2, alignItems: 'center' }}>
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <InputLabel>Period</InputLabel>
              <Select
                value={reportPeriod}
                label="Period"
                onChange={(e) => setReportPeriod(e.target.value)}
              >
                <MenuItem value="daily">Daily</MenuItem>
                <MenuItem value="weekly">Weekly</MenuItem>
                <MenuItem value="monthly">Monthly</MenuItem>
                <MenuItem value="quarterly">Quarterly</MenuItem>
              </Select>
            </FormControl>
            <IconButton sx={{ color: '#00e676' }}>
              <RefreshIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1 }} />
            <Button variant="contained" startIcon={<FilterIcon />}>
              Advanced Filters
            </Button>
          </Box>

          <TableContainer component={Paper} sx={{ backgroundColor: '#111' }}>
            <Table>
              <TableHead>
                <TableRow sx={{ '& th': { borderBottom: '1px solid #333', backgroundColor: '#1a1a1a' } }}>
                  <TableCell>Report ID</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>Period</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Size</TableCell>
                  <TableCell>Generated</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {performanceReports.map((report, index) => (
                  <TableRow 
                    key={report.id}
                    sx={{ 
                      '& td': { borderBottom: '1px solid #333' },
                      '&:hover': { backgroundColor: 'rgba(0, 230, 118, 0.05)' }
                    }}
                  >
                    <TableCell sx={{ fontWeight: 600 }}>{report.id}</TableCell>
                    <TableCell>
                      <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
                        {report.title}
                      </Typography>
                      <Typography variant="caption" sx={{ color: '#b0b0b0' }}>
                        {report.description}
                      </Typography>
                    </TableCell>
                    <TableCell>{report.period}</TableCell>
                    <TableCell>
                      <Chip 
                        label={report.type} 
                        size="small"
                        sx={{ backgroundColor: 'rgba(0, 230, 118, 0.1)', color: '#00e676' }}
                      />
                    </TableCell>
                    <TableCell>{report.size}</TableCell>
                    <TableCell sx={{ color: '#b0b0b0' }}>{report.generated}</TableCell>
                    <TableCell>
                      <Chip 
                        label={report.status}
                        size="small"
                        sx={{ 
                          backgroundColor: `${getStatusColor(report.status)}20`,
                          color: getStatusColor(report.status)
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        <IconButton size="small" sx={{ color: '#00e676' }}>
                          <PdfIcon />
                        </IconButton>
                        <IconButton size="small" sx={{ color: '#00e676' }}>
                          <ExcelIcon />
                        </IconButton>
                        <IconButton size="small" sx={{ color: '#00e676' }}>
                          <DownloadIcon />
                        </IconButton>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>

        {/* Trend Analysis Tab */}
        <TabPanel value={tabValue} index={1}>
          <Grid container spacing={3}>
            {trendAnalysis.map((trend, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card sx={{ backgroundColor: '#111', border: '1px solid #333' }}>
                    <CardContent>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          {trend.metric}
                        </Typography>
                        <Chip
                          label={trend.change}
                          sx={{
                            backgroundColor: `${getTrendColor(trend.trend)}20`,
                            color: getTrendColor(trend.trend),
                            fontWeight: 600
                          }}
                        />
                      </Box>
                      <Typography variant="h4" sx={{ color: '#00e676', mb: 1 }}>
                        {trend.value}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#b0b0b0', mb: 1 }}>
                        Target: {trend.target}
                      </Typography>
                      <Typography variant="caption" sx={{ color: '#888' }}>
                        {trend.period}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </TabPanel>

        {/* Custom Reports Tab */}
        <TabPanel value={tabValue} index={2}>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Generate Custom Reports
            </Typography>
            <Typography variant="body2" sx={{ color: '#b0b0b0', mb: 3 }}>
              Create customized reports based on specific metrics, time periods, and analysis requirements.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {customReports.map((report, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card sx={{ 
                    backgroundColor: '#111', 
                    border: '1px solid #333',
                    '&:hover': {
                      borderColor: '#00e676',
                      transform: 'translateY(-2px)',
                      transition: 'all 0.3s'
                    }
                  }}>
                    <CardContent>
                      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                        {report.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#b0b0b0', mb: 3 }}>
                        {report.description}
                      </Typography>
                      <Button 
                        variant="outlined" 
                        startIcon={<ChartIcon />}
                        sx={{ 
                          borderColor: '#00e676',
                          color: '#00e676',
                          '&:hover': {
                            borderColor: '#00e676',
                            backgroundColor: 'rgba(0, 230, 118, 0.1)'
                          }
                        }}
                      >
                        Generate Report
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </TabPanel>
      </Paper>
    </Container>
  );
};

export default Reports;