// @ts-nocheck
import React from 'react';
import { Box, Grid, Paper, Typography, Card, CardContent, Chip, Avatar, LinearProgress, useMediaQuery, Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import WarningIcon from '@mui/icons-material/Warning';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PersonIcon from '@mui/icons-material/Person';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SecurityIcon from '@mui/icons-material/Security';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import CloseIcon from '@mui/icons-material/Close';

// Sample data
const incidentTrendData = [
  { month: 'Jan', incidents: 5, nearMisses: 8, resolved: 12 },
  { month: 'Feb', incidents: 3, nearMisses: 6, resolved: 8 },
  { month: 'Mar', incidents: 4, nearMisses: 7, resolved: 10 },
  { month: 'Apr', incidents: 2, nearMisses: 5, resolved: 6 },
  { month: 'May', incidents: 3, nearMisses: 4, resolved: 7 },
  { month: 'Jun', incidents: 1, nearMisses: 3, resolved: 4 },
  { month: 'Jul', incidents: 2, nearMisses: 2, resolved: 4 },
];

const incidentTypeData = [
  { name: 'Equipment', value: 35, color: '#3f51b5' },
  { name: 'Falls', value: 25, color: '#f50057' },
  { name: 'Chemical', value: 15, color: '#ff9800' },
  { name: 'Electrical', value: 15, color: '#4caf50' },
  { name: 'Other', value: 10, color: '#9c27b0' },
];

const riskAreaData = [
  { area: 'North Pit', riskScore: 85, incidents: 12, workers: 45 },
  { area: 'South Pit', riskScore: 72, incidents: 8, workers: 38 },
  { area: 'Processing Plant', riskScore: 68, incidents: 6, workers: 52 },
  { area: 'Transport Routes', riskScore: 55, incidents: 4, workers: 28 },
  { area: 'Maintenance Bay', riskScore: 45, incidents: 3, workers: 22 },
];

const recentIncidents = [
  {
    id: 1,
    date: '2023-10-08',
    time: '14:30',
    type: 'Near Miss',
    severity: 'medium',
    location: 'North Pit',
    description: 'Worker nearly struck by moving equipment',
    status: 'Under Investigation',
  },
  {
    id: 2,
    date: '2023-10-05',
    time: '09:15',
    type: 'Incident',
    severity: 'low',
    location: 'Processing Plant',
    description: 'Minor slip on wet surface',
    status: 'Resolved',
  },
  {
    id: 3,
    date: '2023-10-03',
    time: '16:45',
    type: 'Near Miss',
    severity: 'high',
    location: 'South Pit',
    description: 'Rockfall near active work area',
    status: 'Corrective Action Taken',
  },
];

const safetyKPIs = [
  { title: 'Days Without Incident', value: '23', trend: '+5 days', color: 'success.main', icon: <CheckCircleIcon /> },
  { title: 'Active Incidents', value: '2', trend: '-50%', color: 'warning.main', icon: <WarningIcon /> },
  { title: 'Safety Training', value: '94%', trend: '+2%', color: 'primary.main', icon: <PersonIcon /> },
  { title: 'Risk Score', value: '65', trend: '-8 points', color: 'success.main', icon: <SecurityIcon /> },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
  height: '100%',
  width: '100%',
  minWidth: 0,
}));

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case 'high':
      return '#f44336';
    case 'medium':
      return '#ff9800';
    case 'low':
      return '#4caf50';
    default:
      return '#9e9e9e';
  }
};

const Safety = () => {
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down('md'));
  const downSm = useMediaQuery(theme.breakpoints.down('sm'));
  const chartHeight = downSm ? 260 : downMd ? 300 : 360;
  
  const [expandedChart, setExpandedChart] = React.useState<string | null>(null);
  
  const handleExpandChart = (chartId: string) => {
    setExpandedChart(chartId);
  };
  
  const handleCloseChart = () => {
    setExpandedChart(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" gutterBottom>
          Worker Safety Monitoring
        </Typography>
        <Chip 
          icon={<SecurityIcon />} 
          label="Real-time Safety Analytics" 
          color="primary" 
          variant="outlined"
          sx={{ pl: 1 }}
        />
      </Box>
      
      {/* KPI Cards */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        {safetyKPIs.map((kpi, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <Item>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Avatar sx={{ bgcolor: kpi.color, mr: 2 }}>
                  {kpi.icon}
                </Avatar>
                <Box>
                  <Typography variant="subtitle2" color="text.secondary">
                    {kpi.title}
                  </Typography>
                  <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
                    {kpi.value}
                  </Typography>
                </Box>
              </Box>
              <Typography variant="body2" color={kpi.color}>
                {kpi.trend}
              </Typography>
            </Item>
          </Grid>
        ))}
      </Grid>

      {/* Charts Row */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} md={8}>
          <Item>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
              <Typography variant="h6">Incident Trends</Typography>
              <IconButton 
                size="small" 
                onClick={() => handleExpandChart('trends')}
                sx={{ color: 'text.secondary' }}
              >
                <FullscreenIcon />
              </IconButton>
            </Box>
            <div style={{ width: '100%', height: chartHeight }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={incidentTrendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="incidents" stroke="#f44336" name="Incidents" strokeWidth={2} />
                  <Line type="monotone" dataKey="nearMisses" stroke="#ff9800" name="Near Misses" strokeWidth={2} />
                  <Line type="monotone" dataKey="resolved" stroke="#4caf50" name="Resolved" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
              <Typography variant="h6">Incident Types</Typography>
              <IconButton 
                size="small" 
                onClick={() => handleExpandChart('types')}
                sx={{ color: 'text.secondary' }}
              >
                <FullscreenIcon />
              </IconButton>
            </Box>
            <div style={{ width: '100%', height: chartHeight }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={incidentTypeData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }: any) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {incidentTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Item>
        </Grid>
      </Grid>

      {/* Risk Areas */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12}>
          <Item>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <WarningIcon color="warning" sx={{ mr: 1 }} />
              <Typography variant="h6">High-Risk Areas - Predictive Analysis</Typography>
            </Box>
            <Grid container spacing={2}>
              {riskAreaData.map((area, index) => (
                <Grid item key={index} xs={12} md={6} lg={4}>
                  <Card variant="outlined">
                    <CardContent>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                        <Typography variant="h6">{area.area}</Typography>
                        <Chip 
                          label={`Risk: ${area.riskScore}`}
                          color={
                            area.riskScore > 75 ? 'error' : 
                            area.riskScore > 60 ? 'warning' : 'success'
                          }
                          size="small"
                        />
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                          <Typography variant="caption" color="text.secondary">Risk Score</Typography>
                          <Typography variant="caption">{area.riskScore}/100</Typography>
                        </Box>
                        <LinearProgress 
                          variant="determinate" 
                          value={area.riskScore} 
                          color={
                            area.riskScore > 75 ? 'error' : 
                            area.riskScore > 60 ? 'warning' : 'success'
                          }
                          sx={{ height: 8, borderRadius: 5 }}
                        />
                      </Box>
                      <Grid container spacing={1}>
                        <Grid item xs={6}>
                          <Typography variant="caption" display="block" color="text.secondary">Incidents (YTD)</Typography>
                          <Typography variant="body2">{area.incidents}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="caption" display="block" color="text.secondary">Active Workers</Typography>
                          <Typography variant="body2">{area.workers}</Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Item>
        </Grid>
      </Grid>

      {/* Recent Incidents */}
      <Item>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <LocalHospitalIcon sx={{ mr: 1 }} />
          <Typography variant="h6">Recent Incidents & Near Misses</Typography>
        </Box>
        <Box>
          {recentIncidents.map((incident) => (
            <Card key={incident.id} sx={{ mb: 2 }} variant="outlined">
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                  <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <Chip 
                        label={incident.type} 
                        size="small"
                        color={incident.type === 'Incident' ? 'error' : 'warning'}
                      />
                      <Chip 
                        label={incident.severity.toUpperCase()} 
                        size="small"
                        sx={{ 
                          bgcolor: getSeverityColor(incident.severity),
                          color: 'white'
                        }}
                      />
                      <Typography variant="caption" color="text.secondary">
                        {incident.date} at {incident.time}
                      </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ mb: 0.5 }}>
                      {incident.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Location: {incident.location}
                    </Typography>
                  </Box>
                  <Chip 
                    label={incident.status}
                    color={incident.status === 'Resolved' ? 'success' : 'default'}
                    variant="outlined"
                  />
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Item>

      {/* Predictive Alert */}
      <Box sx={{ mt: 3 }}>
        <Paper 
          sx={{ 
            p: 3, 
            bgcolor: 'warning.dark',
            color: 'warning.contrastText',
            borderLeft: '6px solid',
            borderColor: 'warning.main'
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <TrendingDownIcon sx={{ fontSize: 40, mr: 2 }} />
            <Box>
              <Typography variant="h6" gutterBottom>
                Predictive Safety Alert
              </Typography>
              <Typography variant="body1">
                Based on historical data and current conditions, there is a 68% probability of a safety incident 
                in the North Pit area within the next 7 days. Recommended actions: Increase safety inspections, 
                conduct additional training, and review equipment maintenance schedules.
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
      
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
            {expandedChart === 'trends' ? 'Incident Trends' : 'Incident Types'}
          </Typography>
          <IconButton onClick={handleCloseChart}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ p: 3 }}>
          <div style={{ width: '100%', height: '60vh' }}>
            <ResponsiveContainer width="100%" height="100%">
              {expandedChart === 'trends' ? (
                <LineChart data={incidentTrendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="incidents" stroke="#f44336" name="Incidents" strokeWidth={3} />
                  <Line type="monotone" dataKey="nearMisses" stroke="#ff9800" name="Near Misses" strokeWidth={3} />
                  <Line type="monotone" dataKey="resolved" stroke="#4caf50" name="Resolved" strokeWidth={3} />
                </LineChart>
              ) : (
                <PieChart>
                  <Pie
                    data={incidentTypeData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }: any) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {incidentTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={getSeverityColor(entry.severity)} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              )}
            </ResponsiveContainer>
          </div>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Safety;
