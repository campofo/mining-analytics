// @ts-nocheck
import React from 'react';
import { Box, Grid, Paper, Typography, Card, CardContent, Chip, LinearProgress, Alert, useMediaQuery, Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ComposedChart, Scatter, ScatterChart, ZAxis } from 'recharts';
import NatureIcon from '@mui/icons-material/Nature';
import WaterIcon from '@mui/icons-material/Water';
import AirIcon from '@mui/icons-material/Air';
import TerrainIcon from '@mui/icons-material/Terrain';
import WarningIcon from '@mui/icons-material/Warning';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import CloseIcon from '@mui/icons-material/Close';

// Sample data
const airQualityData = [
  { time: '00:00', pm25: 35, pm10: 45, aqi: 65 },
  { time: '04:00', pm25: 32, pm10: 42, aqi: 62 },
  { time: '08:00', pm25: 48, pm10: 58, aqi: 78 },
  { time: '12:00', pm25: 55, pm10: 68, aqi: 85 },
  { time: '16:00', pm25: 52, pm10: 65, aqi: 82 },
  { time: '20:00', pm25: 38, pm10: 48, aqi: 68 },
  { time: '24:00', pm25: 35, pm10: 45, aqi: 65 },
];

const waterQualityData = [
  { month: 'Jan', ph: 7.2, turbidity: 12, dissolved: 8.5 },
  { month: 'Feb', ph: 7.3, turbidity: 11, dissolved: 8.6 },
  { month: 'Mar', ph: 7.1, turbidity: 15, dissolved: 8.3 },
  { month: 'Apr', ph: 7.4, turbidity: 10, dissolved: 8.7 },
  { month: 'May', ph: 7.2, turbidity: 13, dissolved: 8.4 },
  { month: 'Jun', ph: 7.3, turbidity: 12, dissolved: 8.5 },
  { month: 'Jul', ph: 7.2, turbidity: 11, dissolved: 8.6 },
];

const noiseData = [
  { location: 'North Pit', current: 85, limit: 90, status: 'normal' },
  { location: 'South Pit', current: 92, limit: 90, status: 'warning' },
  { location: 'Processing', current: 88, limit: 90, status: 'normal' },
  { location: 'Transport', current: 78, limit: 85, status: 'normal' },
];

const emissionsData = [
  { month: 'Jan', co2: 1200, nox: 45, sox: 32 },
  { month: 'Feb', co2: 1150, nox: 42, sox: 30 },
  { month: 'Mar', co2: 1180, nox: 44, sox: 31 },
  { month: 'Apr', co2: 1100, nox: 40, sox: 28 },
  { month: 'May', co2: 1050, nox: 38, sox: 26 },
  { month: 'Jun', co2: 1020, nox: 36, sox: 25 },
  { month: 'Jul', co2: 980, nox: 34, sox: 23 },
];

const environmentalKPIs = [
  { title: 'Air Quality Index', value: '68', status: 'Moderate', color: 'warning.main', icon: <AirIcon /> },
  { title: 'Water Quality', value: 'Good', status: 'Within Limits', color: 'success.main', icon: <WaterIcon /> },
  { title: 'Noise Levels', value: '1', status: 'Alert Active', color: 'warning.main', icon: <WarningIcon /> },
  { title: 'CO₂ Emissions', value: '-18%', status: 'vs Last Year', color: 'success.main', icon: <TrendingUpIcon /> },
];

const monitoringStations = [
  { id: 1, name: 'Station A - North', status: 'operational', alerts: 0, lastUpdate: '2 min ago' },
  { id: 2, name: 'Station B - South', status: 'warning', alerts: 1, lastUpdate: '1 min ago' },
  { id: 3, name: 'Station C - East', status: 'operational', alerts: 0, lastUpdate: '3 min ago' },
  { id: 4, name: 'Station D - West', status: 'operational', alerts: 0, lastUpdate: '2 min ago' },
];

const environmentalRadar = [
  { subject: 'Air Quality', A: 85, B: 90, fullMark: 100 },
  { subject: 'Water Quality', A: 78, B: 85, fullMark: 100 },
  { subject: 'Noise Levels', A: 92, B: 88, fullMark: 100 },
  { subject: 'Dust Control', A: 88, B: 82, fullMark: 100 },
  { subject: 'Waste Management', A: 95, B: 90, fullMark: 100 },
  { subject: 'Biodiversity', A: 72, B: 75, fullMark: 100 },
];

const carbonFootprint = [
  { month: 'Jan', scope1: 1200, scope2: 800, scope3: 400, target: 2000 },
  { month: 'Feb', scope1: 1150, scope2: 750, scope3: 380, target: 1950 },
  { month: 'Mar', scope1: 1100, scope2: 720, scope3: 360, target: 1900 },
  { month: 'Apr', scope1: 1080, scope2: 700, scope3: 340, target: 1850 },
  { month: 'May', scope1: 1050, scope2: 680, scope3: 320, target: 1800 },
  { month: 'Jun', scope1: 1000, scope2: 650, scope3: 300, target: 1750 },
];

const biodiversityData = [
  { species: 'Birds', count: 45, baseline: 50, x: 30, y: 45 },
  { species: 'Mammals', count: 12, baseline: 15, x: 60, y: 12 },
  { species: 'Reptiles', count: 8, baseline: 10, x: 80, y: 8 },
  { species: 'Plants', count: 120, baseline: 100, x: 40, y: 120 },
  { species: 'Insects', count: 200, baseline: 180, x: 70, y: 200 },
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

const Environment = () => {
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
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" gutterBottom>
          Environmental Monitoring
        </Typography>
        <Chip 
          icon={<NatureIcon />} 
          label="Real-time Environmental Data" 
          color="success" 
          variant="outlined"
          sx={{ pl: 1 }}
        />
      </Box>
      
      {/* KPI Cards */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        {environmentalKPIs.map((kpi, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <Item>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
                <Box sx={{ 
                  bgcolor: kpi.color, 
                  borderRadius: 1, 
                  p: 1, 
                  mr: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {kpi.icon}
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                    {kpi.title}
                  </Typography>
                  <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                    {kpi.value}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {kpi.status}
                  </Typography>
                </Box>
              </Box>
            </Item>
          </Grid>
        ))}
      </Grid>

      {/* Air Quality */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} md={9}>
          <Item>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AirIcon sx={{ mr: 1 }} />
                <Typography variant="h6">Air Quality Monitoring (24h)</Typography>
              </Box>
              <IconButton 
                size="small" 
                onClick={() => handleExpandChart('airquality')}
                sx={{ color: 'text.secondary' }}
              >
                <FullscreenIcon />
              </IconButton>
            </Box>
            <Box sx={{ width: '100%', height: chartHeight, minWidth: 0, overflow: 'hidden' }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={airQualityData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="pm25" stackId="1" stroke="#3f51b5" fill="#3f51b5" name="PM2.5 (μg/m³)" />
                  <Area type="monotone" dataKey="pm10" stackId="1" stroke="#f50057" fill="#f50057" name="PM10 (μg/m³)" />
                  <Area type="monotone" dataKey="aqi" stroke="#ff9800" fill="#ff9800" name="AQI" fillOpacity={0.3} />
                </AreaChart>
              </ResponsiveContainer>
            </Box>
            <Alert severity="info" sx={{ mt: 2 }}>
              Current AQI: 68 (Moderate) - Sensitive groups should limit prolonged outdoor exposure
            </Alert>
          </Item>
        </Grid>
        <Grid item xs={12} md={3}>
          <Item>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <WarningIcon sx={{ mr: 1 }} />
              <Typography variant="h6">Noise Monitoring</Typography>
            </Box>
            <Box>
              {noiseData.map((location, index) => (
                <Box key={index} sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                    <Typography variant="body2">{location.location}</Typography>
                    <Chip 
                      label={location.status === 'warning' ? 'Warning' : 'Normal'}
                      color={location.status === 'warning' ? 'warning' : 'success'}
                      size="small"
                    />
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                    <Typography variant="caption" color="text.secondary">
                      {location.current} dB / {location.limit} dB limit
                    </Typography>
                    <Typography variant="caption">
                      {((location.current / location.limit) * 100).toFixed(0)}%
                    </Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={(location.current / location.limit) * 100} 
                    color={location.status === 'warning' ? 'warning' : 'success'}
                    sx={{ height: 8, borderRadius: 5 }}
                  />
                </Box>
              ))}
            </Box>
          </Item>
        </Grid>
      </Grid>

      {/* Water Quality */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} md={8}>
          <Item>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <WaterIcon sx={{ mr: 1 }} />
                <Typography variant="h6">Water Quality Trends</Typography>
              </Box>
              <IconButton 
                size="small" 
                onClick={() => handleExpandChart('waterquality')}
                sx={{ color: 'text.secondary' }}
              >
                <FullscreenIcon />
              </IconButton>
            </Box>
            <Box sx={{ width: '100%', height: chartHeight, minWidth: 0, overflow: 'hidden' }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={waterQualityData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Line yAxisId="left" type="monotone" dataKey="ph" stroke="#3f51b5" name="pH Level" strokeWidth={2} />
                  <Line yAxisId="right" type="monotone" dataKey="turbidity" stroke="#f50057" name="Turbidity (NTU)" strokeWidth={2} />
                  <Line yAxisId="right" type="monotone" dataKey="dissolved" stroke="#4caf50" name="Dissolved O₂ (mg/L)" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
            <Typography variant="h6" gutterBottom>Water Quality Summary</Typography>
            <Box sx={{ p: 2 }}>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Current Status: Good
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Last Updated: 2 hours ago
              </Typography>
            </Box>
          </Item>
        </Grid>
      </Grid>

      {/* Carbon Footprint - Full Width */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12}>
          <Item>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <TerrainIcon sx={{ mr: 1 }} />
                <Typography variant="h6">Carbon Footprint Tracking</Typography>
              </Box>
              <IconButton 
                size="small" 
                onClick={() => handleExpandChart('carbon')}
                sx={{ color: 'text.secondary' }}
              >
                <FullscreenIcon />
              </IconButton>
            </Box>
            <Box sx={{ width: '100%', height: chartHeight, minWidth: 0, overflow: 'hidden' }}>
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={carbonFootprint}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="scope1" stackId="a" fill="#f44336" name="Scope 1 (Direct)" />
                  <Bar dataKey="scope2" stackId="a" fill="#ff9800" name="Scope 2 (Electricity)" />
                  <Bar dataKey="scope3" stackId="a" fill="#ffc107" name="Scope 3 (Indirect)" />
                  <Line type="monotone" dataKey="target" stroke="#4caf50" strokeWidth={3} name="Target" />
                </ComposedChart>
              </ResponsiveContainer>
            </Box>
          </Item>
        </Grid>
      </Grid>

      {/* New Environmental Visuals */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} md={8}>
          <Item>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <NatureIcon sx={{ mr: 1 }} />
                <Typography variant="h6">Environmental Performance Radar</Typography>
              </Box>
              <IconButton 
                size="small" 
                onClick={() => handleExpandChart('radar')}
                sx={{ color: 'text.secondary' }}
              >
                <FullscreenIcon />
              </IconButton>
            </Box>
            <Box sx={{ width: '100%', height: chartHeight, minWidth: 0, overflow: 'hidden' }}>
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={environmentalRadar}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} />
                  <Radar name="Current" dataKey="A" stroke="#3f51b5" fill="#3f51b5" fillOpacity={0.3} strokeWidth={2} />
                  <Radar name="Target" dataKey="B" stroke="#4caf50" fill="#4caf50" fillOpacity={0.2} strokeWidth={2} />
                  <Legend />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
            <Typography variant="h6" gutterBottom>Environmental Summary</Typography>
            <Box sx={{ p: 2 }}>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Overall Score: 78/100
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Status: Within Targets
              </Typography>
            </Box>
          </Item>
        </Grid>
      </Grid>

      {/* Biodiversity - Full Width */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12}>
          <Item>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <CheckCircleIcon sx={{ mr: 1 }} />
                <Typography variant="h6">Biodiversity Impact Assessment</Typography>
              </Box>
              <IconButton 
                size="small" 
                onClick={() => handleExpandChart('biodiversity')}
                sx={{ color: 'text.secondary' }}
              >
                <FullscreenIcon />
              </IconButton>
            </Box>
            <Box sx={{ width: '100%', height: chartHeight, minWidth: 0, overflow: 'hidden' }}>
              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart data={biodiversityData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="x" name="Habitat Quality" unit="%" />
                  <YAxis dataKey="y" name="Species Count" />
                  <ZAxis dataKey="baseline" range={[50, 200]} name="Baseline" />
                  <Tooltip cursor={{ strokeDasharray: '3 3' }} 
                    formatter={(value, name) => [
                      name === 'Habitat Quality' ? `${value}%` : value,
                      name
                    ]}
                    labelFormatter={(label) => `Species: ${biodiversityData.find(d => d.x === label)?.species || ''}`}
                  />
                  <Scatter name="Species" fill="#4caf50" />
                </ScatterChart>
              </ResponsiveContainer>
            </Box>
          </Item>
        </Grid>
      </Grid>

      {/* Emissions Section - Updated */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} md={8}>
          <Item>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <TerrainIcon sx={{ mr: 1 }} />
                <Typography variant="h6">Legacy Emissions Tracking</Typography>
              </Box>
              <IconButton 
                size="small" 
                onClick={() => handleExpandChart('emissions')}
                sx={{ color: 'text.secondary' }}
              >
                <FullscreenIcon />
              </IconButton>
            </Box>
            <Box sx={{ width: '100%', height: chartHeight, minWidth: 0, overflow: 'hidden' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={emissionsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="co2" fill="#3f51b5" name="CO₂ (tons)" />
                  <Bar dataKey="nox" fill="#f50057" name="NOₓ (kg)" />
                  <Bar dataKey="sox" fill="#ff9800" name="SOₓ (kg)" />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Item>
        </Grid>
      </Grid>

      {/* Monitoring Stations */}
      <Item sx={{ mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <CheckCircleIcon sx={{ mr: 1 }} />
          <Typography variant="h6">Monitoring Stations Status</Typography>
        </Box>
        <Grid container spacing={2}>
          {monitoringStations.map((station) => (
            <Grid item key={station.id} xs={12} sm={6} md={3}>
              <Card variant="outlined">
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                      {station.name}
                    </Typography>
                    <Chip 
                      label={station.status === 'operational' ? 'Active' : 'Warning'}
                      color={station.status === 'operational' ? 'success' : 'warning'}
                      size="small"
                    />
                  </Box>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Active Alerts: {station.alerts}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Last Update: {station.lastUpdate}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Item>

      {/* Predictive Environmental Alert */}
      <Paper 
        sx={{ 
          p: 3, 
          bgcolor: 'info.dark',
          color: 'info.contrastText',
          borderLeft: '6px solid',
          borderColor: 'info.main'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <NatureIcon sx={{ fontSize: 40, mr: 2 }} />
          <Box>
            <Typography variant="h6" gutterBottom>
              Predictive Environmental Alert
            </Typography>
            <Typography variant="body1">
              Based on weather patterns and operational forecasts, dust levels are predicted to exceed 
              recommended thresholds in the South Pit area within the next 48 hours. Recommended actions: 
              Increase water spraying frequency, adjust blasting schedules, and implement additional dust 
              suppression measures.
            </Typography>
          </Box>
        </Box>
      </Paper>
      
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
            {expandedChart === 'airquality' ? 'Air Quality Trends' : 
             expandedChart === 'waterquality' ? 'Water Quality Monitoring' :
             expandedChart === 'carbon' ? 'Carbon Footprint Analysis' :
             expandedChart === 'radar' ? 'Environmental Impact Radar' :
             expandedChart === 'biodiversity' ? 'Biodiversity Impact Assessment' :
             'Emissions Overview'}
          </Typography>
          <IconButton onClick={handleCloseChart}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ p: 3 }}>
          <div style={{ width: '100%', height: '60vh' }}>
            <ResponsiveContainer width="100%" height="100%">
              {expandedChart === 'airquality' ? (
                <AreaChart data={airQualityData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="pm25" stackId="1" stroke="#3f51b5" fill="#3f51b5" fillOpacity={0.6} name="PM2.5 (μg/m³)" />
                  <Area type="monotone" dataKey="pm10" stackId="2" stroke="#ff9800" fill="#ff9800" fillOpacity={0.6} name="PM10 (μg/m³)" />
                  <Area type="monotone" dataKey="co2" stackId="3" stroke="#4caf50" fill="#4caf50" fillOpacity={0.6} name="CO₂ (ppm)" />
                </AreaChart>
              ) : expandedChart === 'waterquality' ? (
                <LineChart data={waterQualityData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="ph" stroke="#3f51b5" name="pH Level" strokeWidth={3} />
                  <Line type="monotone" dataKey="turbidity" stroke="#ff9800" name="Turbidity (NTU)" strokeWidth={3} />
                  <Line type="monotone" dataKey="dissolvedOxygen" stroke="#4caf50" name="Dissolved Oxygen (mg/L)" strokeWidth={3} />
                </LineChart>
              ) : expandedChart === 'carbon' ? (
                <ComposedChart data={carbonFootprint}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="emissions" fill="#f44336" name="Emissions (tons CO₂)" />
                  <Line type="monotone" dataKey="target" stroke="#4caf50" name="Target" strokeWidth={3} />
                </ComposedChart>
              ) : expandedChart === 'radar' ? (
                <RadarChart data={environmentalRadar}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} />
                  <Radar name="Current" dataKey="A" stroke="#3f51b5" fill="#3f51b5" fillOpacity={0.6} />
                  <Radar name="Target" dataKey="B" stroke="#4caf50" fill="#4caf50" fillOpacity={0.6} />
                  <Legend />
                </RadarChart>
              ) : expandedChart === 'biodiversity' ? (
                <ScatterChart data={biodiversityData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" dataKey="x" name="Distance from Mine (km)" />
                  <YAxis type="number" dataKey="y" name="Species Count" />
                  <ZAxis type="number" dataKey="z" range={[60, 400]} name="Impact Score" />
                  <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                  <Scatter name="Biodiversity Impact" data={biodiversityData} fill="#4caf50" />
                </ScatterChart>
              ) : (
                <BarChart data={emissionsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="co2" fill="#3f51b5" name="CO₂ (tons)" />
                  <Bar dataKey="nox" fill="#f50057" name="NOₓ (kg)" />
                  <Bar dataKey="sox" fill="#ff9800" name="SOₓ (kg)" />
                </BarChart>
              )}
            </ResponsiveContainer>
          </div>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Environment;
