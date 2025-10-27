// @ts-nocheck
import React from 'react';
import { Box, Grid, Paper, Typography, useMediaQuery, Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import WarningIcon from '@mui/icons-material/Warning';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import CloseIcon from '@mui/icons-material/Close';

// Sample data for the dashboard
const productionData = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 5000 },
  { name: 'Apr', value: 2780 },
  { name: 'May', value: 1890 },
  { name: 'Jun', value: 2390 },
  { name: 'Jul', value: 3490 },
];

const safetyData = [
  { name: 'Jan', incidents: 3, nearMisses: 1 },
  { name: 'Feb', incidents: 2, nearMisses: 2 },
  { name: 'Mar', incidents: 1, nearMisses: 1 },
  { name: 'Apr', incidents: 4, nearMisses: 0 },
  { name: 'May', incidents: 2, nearMisses: 1 },
  { name: 'Jun', incidents: 1, nearMisses: 0 },
  { name: 'Jul', incidents: 0, nearMisses: 1 },
];

const equipmentEfficiency = [
  { name: 'Excavator 1', efficiency: 87, target: 90 },
  { name: 'Excavator 2', efficiency: 92, target: 90 },
  { name: 'Haul Truck 1', efficiency: 78, target: 85 },
  { name: 'Haul Truck 2', efficiency: 85, target: 85 },
  { name: 'Drill Rig 1', efficiency: 94, target: 90 },
  { name: 'Crusher', efficiency: 89, target: 88 },
];

const resourceDistribution = [
  { name: 'Iron Ore', value: 45, color: '#8884d8' },
  { name: 'Coal', value: 30, color: '#82ca9d' },
  { name: 'Copper', value: 15, color: '#ffc658' },
  { name: 'Gold', value: 10, color: '#ff7300' },
];

const dailyOperations = [
  { time: '00:00', production: 120, power: 85, workers: 45 },
  { time: '04:00', production: 180, power: 92, workers: 78 },
  { time: '08:00', production: 250, power: 98, workers: 120 },
  { time: '12:00', production: 280, power: 95, workers: 125 },
  { time: '16:00', production: 260, power: 88, workers: 115 },
  { time: '20:00', production: 200, power: 82, workers: 85 },
];

const kpiData = [
  { title: 'Total Production', value: '24,532', unit: 'tons', trend: '+12%', color: 'success.main' },
  { title: 'Equipment Uptime', value: '94.7%', unit: 'uptime', trend: '+2.3%', color: 'success.main' },
  { title: 'Safety Incidents', value: '2', unit: 'this month', trend: '-50%', color: 'error.main' },
  { title: 'Environmental Alerts', value: '1', unit: 'active', trend: '0%', color: 'warning.main' },
];

const alerts = [
  { 
    id: 1, 
    time: '09:30 AM', 
    message: 'High temperature detected on Excavator #3', 
    severity: 'high',
    status: 'new'
  },
  { 
    id: 2, 
    time: 'Yesterday', 
    message: 'Scheduled maintenance for Haul Truck #7 completed', 
    severity: 'low',
    status: 'completed'
  },
  { 
    id: 3, 
    time: '2 days ago', 
    message: 'Dust levels exceeded at North Pit', 
    severity: 'medium',
    status: 'acknowledged'
  },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1.5),
  color: theme.palette.text.secondary,
  height: '100%',
  width: '100%',
  minWidth: 0,
}));

const Dashboard = () => {
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down('md'));
  const downSm = useMediaQuery(theme.breakpoints.down('sm'));
  const chartHeight = downSm ? 350 : downMd ? 450 : 500;
  
  const [expandedChart, setExpandedChart] = React.useState<string | null>(null);
  
  const handleExpandChart = (chartId: string) => {
    setExpandedChart(chartId);
  };
  
  const handleCloseChart = () => {
    setExpandedChart(null);
  };

  return (
    <Box sx={{ flexGrow: 1, width: '100%' }}>
      <Typography variant="h4" gutterBottom>
        Mining Operations Overview
      </Typography>
      
      {/* KPI Cards */}
      <Grid container spacing={3} sx={{ mb: 3, width: '100%' }}>
        {kpiData.map((kpi, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Item>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                {kpi.title}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', mr: 1 }}>
                  {kpi.value}
                </Typography>
                <Typography variant="body2" color={kpi.color} sx={{ mb: 0.5 }}>
                  {kpi.trend}
                </Typography>
              </Box>
              <Typography variant="caption" color="text.secondary">
                {kpi.unit}
              </Typography>
            </Item>
          </Grid>
        ))}
      </Grid>

      {/* Charts Row */}
      <Grid container spacing={3} sx={{ mb: 2, width: '100%', mx: 0 }}>
        <Grid item xs={12} md={9} sx={{ height: 'auto' }}>
          <Item>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
              <Typography variant="h6">Production Volume (tons)</Typography>
              <IconButton 
                size="small" 
                onClick={() => handleExpandChart('production')}
                sx={{ color: 'text.secondary' }}
              >
                <FullscreenIcon />
              </IconButton>
            </Box>
            <Box sx={{ width: '100%', height: chartHeight, minWidth: 0, overflow: 'hidden' }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={productionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="value" stroke="#3f51b5" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={12} md={3} sx={{ height: 'auto' }}>
          <Item sx={{ height: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
              <Typography variant="h6">Safety Incidents</Typography>
              <IconButton 
                size="small" 
                onClick={() => handleExpandChart('safety')}
                sx={{ color: 'text.secondary' }}
              >
                <FullscreenIcon />
              </IconButton>
            </Box>
            <Box sx={{ width: '100%', height: chartHeight, minWidth: 0, overflow: 'hidden' }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={safetyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="incidents" stroke="#f50057" name="Incidents" />
                  <Line type="monotone" dataKey="nearMisses" stroke="#ff9800" name="Near Misses" />
                </LineChart>
              </ResponsiveContainer>
            </Box>
          </Item>
        </Grid>
      </Grid>

      {/* Alerts and Timeline */}
      <Grid container spacing={3} sx={{ mb: 3, width: '100%' }}>
        <Grid item xs={12} md={6}>
          <Item>
            <Typography variant="h6" gutterBottom>Recent Alerts</Typography>
            <Box sx={{ maxHeight: 300, overflow: 'auto' }}>
              {alerts.map((alert) => (
                <Box 
                  key={alert.id} 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    p: 1.5,
                    mb: 1,
                    borderRadius: 1,
                    bgcolor: 'background.paper',
                    borderLeft: `4px solid ${
                      alert.severity === 'high' ? '#f44336' : 
                      alert.severity === 'medium' ? '#ff9800' : '#4caf50'
                    }`
                  }}
                >
                  <Box sx={{ mr: 2 }}>
                    {alert.severity === 'high' ? (
                      <ErrorIcon color="error" />
                    ) : alert.severity === 'medium' ? (
                      <WarningIcon color="warning" />
                    ) : (
                      <CheckCircleIcon color="success" />
                    )}
                  </Box>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="body2">{alert.message}</Typography>
                    <Typography variant="caption" color="text.secondary">{alert.time}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Item>
        </Grid>
        <Grid item xs={12} md={6}>
          <Item>
            <Typography variant="h6" gutterBottom>Recent Activities</Typography>
            <Timeline position="right" sx={{ maxHeight: 300, overflow: 'auto' }}>
              {alerts.map((alert, index) => (
                <TimelineItem key={index}>
                  <TimelineOppositeContent color="text.secondary">
                    {alert.time}
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot color={
                      alert.severity === 'high' ? 'error' : 
                      alert.severity === 'medium' ? 'warning' : 'success'
                    } />
                    {index < alerts.length - 1 && <TimelineConnector />}
                  </TimelineSeparator>
                  <TimelineContent>{alert.message}</TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </Item>
        </Grid>
      </Grid>
      
      {/* Expanded Chart Dialog */}
      <Dialog 
        open={!!expandedChart} 
        onClose={handleCloseChart}
        maxWidth={false}
        PaperProps={{
          sx: {
            width: '90vw',
            height: '80vh',
            maxWidth: 'none',
            maxHeight: 'none'
          }
        }}
      >
        <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h5">
            {expandedChart === 'production' ? 'Production Volume (tons)' : 
             expandedChart === 'safety' ? 'Safety Incidents' :
             expandedChart === 'equipment' ? 'Equipment Efficiency' :
             expandedChart === 'resources' ? 'Resource Distribution' :
             '24-Hour Operations Overview'}
          </Typography>
          <IconButton onClick={handleCloseChart}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ p: 3 }}>
          <div style={{ width: '100%', height: '60vh' }}>
            <ResponsiveContainer width="100%" height="100%">
              {expandedChart === 'production' ? (
                <LineChart data={productionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="value" stroke="#3f51b5" strokeWidth={3} dot={{ r: 6 }} activeDot={{ r: 8 }} />
                </LineChart>
              ) : expandedChart === 'safety' ? (
                <LineChart data={safetyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="incidents" stroke="#f50057" name="Incidents" strokeWidth={3} />
                  <Line type="monotone" dataKey="nearMisses" stroke="#ff9800" name="Near Misses" strokeWidth={3} />
                </LineChart>
              ) : expandedChart === 'equipment' ? (
                <BarChart data={equipmentEfficiency} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis dataKey="name" type="category" width={100} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="efficiency" fill="#3f51b5" name="Current %" />
                  <Bar dataKey="target" fill="#e0e0e0" name="Target %" />
                </BarChart>
              ) : expandedChart === 'resources' ? (
                <PieChart>
                  <Pie
                    data={resourceDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={150}
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {resourceDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                </PieChart>
              ) : (
                <AreaChart data={dailyOperations}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="production" stackId="1" stroke="#3f51b5" fill="#3f51b5" fillOpacity={0.6} name="Production (tons)" />
                  <Area type="monotone" dataKey="power" stackId="2" stroke="#ff9800" fill="#ff9800" fillOpacity={0.6} name="Power Usage (%)" />
                  <Area type="monotone" dataKey="workers" stackId="3" stroke="#4caf50" fill="#4caf50" fillOpacity={0.6} name="Active Workers" />
                </AreaChart>
              )}
            </ResponsiveContainer>
          </div>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Dashboard;
