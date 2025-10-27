// @ts-nocheck
import React from 'react';
import { Box, Grid, Paper, Typography, Card, CardContent, LinearProgress, Divider, Chip, useMediaQuery, Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import WarningIcon from '@mui/icons-material/Warning';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import SpeedIcon from '@mui/icons-material/Speed';
import BuildIcon from '@mui/icons-material/Build';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import CloseIcon from '@mui/icons-material/Close';

// Sample data
const equipmentData = [
  { 
    id: 'EX-001', 
    name: 'Excavator #3', 
    type: 'Excavator', 
    status: 'operational', 
    uptime: 92.5,
    lastMaintenance: '2023-10-05',
    nextMaintenance: '2023-11-15',
    health: 85,
    utilization: 78,
    alerts: 2
  },
  { 
    id: 'HT-007', 
    name: 'Haul Truck #7', 
    type: 'Haul Truck', 
    status: 'maintenance', 
    uptime: 87.2,
    lastMaintenance: '2023-09-28',
    nextMaintenance: '2023-10-28',
    health: 65,
    utilization: 92,
    alerts: 5
  },
  { 
    id: 'DR-012', 
    name: 'Drill Rig #12', 
    type: 'Drill Rig', 
    status: 'warning', 
    uptime: 95.1,
    lastMaintenance: '2023-10-10',
    nextMaintenance: '2023-11-20',
    health: 72,
    utilization: 85,
    alerts: 3
  },
  { 
    id: 'BL-005', 
    name: 'Bulldozer #5', 
    type: 'Bulldozer', 
    status: 'operational', 
    uptime: 98.3,
    lastMaintenance: '2023-09-15',
    nextMaintenance: '2023-11-30',
    health: 91,
    utilization: 68,
    alerts: 0
  },
];

const performanceData = [
  { name: 'Mon', efficiency: 85, utilization: 78 },
  { name: 'Tue', efficiency: 82, utilization: 75 },
  { name: 'Wed', efficiency: 88, utilization: 82 },
  { name: 'Thu', efficiency: 79, utilization: 85 },
  { name: 'Fri', efficiency: 91, utilization: 88 },
  { name: 'Sat', efficiency: 84, utilization: 76 },
  { name: 'Sun', efficiency: 87, utilization: 80 },
];

const maintenanceData = [
  { name: 'Jan', scheduled: 12, unscheduled: 3 },
  { name: 'Feb', scheduled: 10, unscheduled: 2 },
  { name: 'Mar', scheduled: 15, unscheduled: 5 },
  { name: 'Apr', scheduled: 8, unscheduled: 1 },
  { name: 'May', scheduled: 11, unscheduled: 2 },
  { name: 'Jun', scheduled: 13, unscheduled: 4 },
  { name: 'Jul', scheduled: 9, unscheduled: 2 },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1.5),
  color: theme.palette.text.secondary,
  height: '100%',
}));

const StatusChip = ({ status }: { status: string }) => {
  switch (status) {
    case 'operational':
      return <Chip icon={<CheckCircleIcon />} label="Operational" color="success" size="small" />;
    case 'maintenance':
      return <Chip icon={<BuildIcon />} label="Maintenance" color="warning" size="small" />;
    case 'warning':
      return <Chip icon={<WarningIcon />} label="Needs Attention" color="error" size="small" />;
    default:
      return <Chip label={status} size="small" />;
  }
};

const EquipmentCard = ({ equipment }: { equipment: typeof equipmentData[0] }) => {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
          <Typography variant="h6" component="div">
            {equipment.name}
          </Typography>
          <StatusChip status={equipment.status} />
        </Box>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {equipment.type} • {equipment.id}
        </Typography>
        
        <Box sx={{ my: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
            <Typography variant="caption" color="text.secondary">Health</Typography>
            <Typography variant="caption">{equipment.health}%</Typography>
          </Box>
          <LinearProgress 
            variant="determinate" 
            value={equipment.health} 
            color={
              equipment.health > 80 ? 'success' : 
              equipment.health > 50 ? 'warning' : 'error'
            }
            sx={{ height: 8, borderRadius: 5 }}
          />
        </Box>
        
        <Box sx={{ my: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
            <Typography variant="caption" color="text.secondary">Utilization</Typography>
            <Typography variant="caption">{equipment.utilization}%</Typography>
          </Box>
          <LinearProgress 
            variant="determinate" 
            value={equipment.utilization} 
            color="primary"
            sx={{ height: 8, borderRadius: 5 }}
          />
        </Box>
        
        <Divider sx={{ my: 2 }} />
        
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Typography variant="caption" display="block" color="text.secondary">Last Maintenance</Typography>
            <Typography variant="body2">{equipment.lastMaintenance}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="caption" display="block" color="text.secondary">Next Maintenance</Typography>
            <Typography variant="body2">{equipment.nextMaintenance}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="caption" display="block" color="text.secondary">Uptime</Typography>
            <Typography variant="body2">{equipment.uptime}%</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="caption" display="block" color="text.secondary">Active Alerts</Typography>
            <Typography variant="body2" color={equipment.alerts > 0 ? 'error' : 'text.primary'}>
              {equipment.alerts} {equipment.alerts === 1 ? 'alert' : 'alerts'}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const Equipment = () => {
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
          Equipment Monitoring
        </Typography>
        <Chip 
          icon={<SpeedIcon />} 
          label="Real-time Monitoring" 
          color="primary" 
          variant="outlined"
          sx={{ pl: 1 }}
        />
      </Box>
      
      {/* Equipment Grid */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        {equipmentData.map((equipment) => (
          <Grid item xs={12} sm={6} md={3} key={equipment.id}>
            <EquipmentCard equipment={equipment} />
          </Grid>
        ))}
      </Grid>
      
      {/* Performance Charts */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} md={9} sx={{ height: 'auto' }}>
          <Item>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AssessmentIcon sx={{ mr: 1 }} />
                <Typography variant="h6">Equipment Performance</Typography>
              </Box>
              <IconButton 
                size="small" 
                onClick={() => handleExpandChart('performance')}
                sx={{ color: 'text.secondary' }}
              >
                <FullscreenIcon />
              </IconButton>
            </Box>
            <Box sx={{ width: '100%', height: chartHeight, minWidth: 0, overflow: 'hidden' }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" orientation="left" stroke="#3f51b5" />
                  <YAxis yAxisId="right" orientation="right" stroke="#f50057" />
                  <Tooltip />
                  <Legend />
                  <Line yAxisId="left" type="monotone" dataKey="efficiency" stroke="#3f51b5" name="Efficiency %" />
                  <Line yAxisId="right" type="monotone" dataKey="utilization" stroke="#f50057" name="Utilization %" />
                </LineChart>
              </ResponsiveContainer>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={12} md={3} sx={{ height: 'auto' }}>
          <Item>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <BuildIcon sx={{ mr: 1 }} />
                <Typography variant="h6">Maintenance Overview</Typography>
              </Box>
              <IconButton 
                size="small" 
                onClick={() => handleExpandChart('maintenance')}
                sx={{ color: 'text.secondary' }}
              >
                <FullscreenIcon />
              </IconButton>
            </Box>
            <Box sx={{ width: '100%', height: chartHeight, minWidth: 0, overflow: 'hidden' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={maintenanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="scheduled" fill="#4caf50" name="Scheduled" />
                  <Bar dataKey="unscheduled" fill="#f44336" name="Unscheduled" />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Item>
        </Grid>
      </Grid>
      
      {/* Predictive Maintenance */}
      <Item sx={{ mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <WarningIcon color="warning" sx={{ mr: 1 }} />
          <Typography variant="h6">Predictive Maintenance Alerts</Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Paper variant="outlined" sx={{ p: 2, borderLeft: '4px solid #f44336' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                  <Typography variant="subtitle2" color="error">Critical</Typography>
                  <Typography variant="h5">3</Typography>
                  <Typography variant="caption" color="text.secondary">Requires immediate attention</Typography>
                </Box>
                <ErrorIcon color="error" sx={{ fontSize: 40, opacity: 0.2 }} />
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper variant="outlined" sx={{ p: 2, borderLeft: '4px solid #ff9800' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                  <Typography variant="subtitle2" color="warning.main">Warning</Typography>
                  <Typography variant="h5">7</Typography>
                  <Typography variant="caption" color="text.secondary">Monitor closely</Typography>
                </Box>
                <WarningIcon color="warning" sx={{ fontSize: 40, opacity: 0.2 }} />
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper variant="outlined" sx={{ p: 2, borderLeft: '4px solid #4caf50' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                  <Typography variant="subtitle2" color="success.main">Normal</Typography>
                  <Typography variant="h5">24</Typography>
                  <Typography variant="caption" color="text.secondary">Operating normally</Typography>
                </Box>
                <CheckCircleIcon color="success" sx={{ fontSize: 40, opacity: 0.2 }} />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Item>
      
      {/* Equipment Utilization */}
      <Item>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <LocalShippingIcon sx={{ mr: 1 }} />
          <Typography variant="h6">Equipment Utilization by Type</Typography>
        </Box>
        <Grid container spacing={2}>
          {['Excavators', 'Haul Trucks', 'Drill Rigs', 'Bulldozers', 'Loaders', 'Graders'].map((type, index) => (
            <Grid item xs={12} sm={6} md={4} key={type}>
              <Box sx={{ mb: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                  <Typography variant="body2">{type}</Typography>
                  <Typography variant="body2" color="text.secondary">{75 + index * 3}%</Typography>
                </Box>
                <LinearProgress 
                  variant="determinate" 
                  value={75 + index * 3} 
                  color={
                    (75 + index * 3) > 90 ? 'error' : 
                    (75 + index * 3) > 80 ? 'warning' : 'primary'
                  }
                  sx={{ height: 8, borderRadius: 5 }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Item>
      
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
            {expandedChart === 'performance' ? 'Equipment Performance' : 'Maintenance Overview'}
          </Typography>
          <IconButton onClick={handleCloseChart}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ p: 3 }}>
          <div style={{ width: '100%', height: '60vh' }}>
            <ResponsiveContainer width="100%" height="100%">
              {expandedChart === 'performance' ? (
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" orientation="left" stroke="#3f51b5" />
                  <YAxis yAxisId="right" orientation="right" stroke="#f50057" />
                  <Tooltip />
                  <Legend />
                  <Line yAxisId="left" type="monotone" dataKey="efficiency" stroke="#3f51b5" name="Efficiency %" strokeWidth={3} />
                  <Line yAxisId="right" type="monotone" dataKey="utilization" stroke="#f50057" name="Utilization %" strokeWidth={3} />
                </LineChart>
              ) : (
                <BarChart data={maintenanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="scheduled" fill="#4caf50" name="Scheduled" />
                  <Bar dataKey="unscheduled" fill="#f44336" name="Unscheduled" />
                </BarChart>
              )}
            </ResponsiveContainer>
          </div>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Equipment;
