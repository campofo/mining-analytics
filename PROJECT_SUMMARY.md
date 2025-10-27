# Mining Analytics Dashboard - Project Summary

## Overview
A comprehensive web-based predictive analytics dashboard for the mining industry, built with React, TypeScript, and Material-UI.

## Features Implemented

### 1. Dashboard (Main Overview)
- **KPI Cards**: Display key metrics including:
  - Total Production (24,532 tons, +12%)
  - Equipment Uptime (94.7%, +2.3%)
  - Safety Incidents (2 this month, -50%)
  - Environmental Alerts (1 active)
  
- **Production Volume Chart**: Line chart showing monthly production trends
- **Safety Incidents Chart**: Tracking incidents and near misses over time
- **Equipment Efficiency Chart**: Horizontal bar chart comparing current vs target performance
- **Resource Distribution Chart**: Donut chart showing mining output composition (Iron Ore 45%, Coal 30%, Copper 15%, Gold 10%)
- **24-Hour Operations Chart**: Stacked area chart displaying production, power usage, and workforce over 24 hours
- **Recent Alerts**: Real-time alert feed with severity indicators
- **Activity Timeline**: Chronological view of recent events
- **Expandable Charts**: All charts feature fullscreen capability for detailed analysis

### 2. Equipment Monitoring
- **Equipment Status Cards**: Real-time monitoring of:
  - Excavators
  - Haul Trucks
  - Drill Rigs
  - Bulldozers
  
- **Health & Utilization Metrics**: Visual progress bars showing:
  - Equipment health percentage
  - Utilization rates
  - Maintenance schedules
  - Active alerts per equipment
  
- **Performance Charts**:
  - Weekly efficiency and utilization trends
  - Maintenance overview (scheduled vs unscheduled)
  
- **Predictive Maintenance Alerts**:
  - Critical: 3 items requiring immediate attention
  - Warning: 7 items to monitor closely
  - Normal: 24 items operating normally
  
- **Equipment Utilization by Type**: Progress bars for different equipment categories

### 3. Worker Safety Monitoring
- **Safety KPIs**:
  - Days Without Incident: 23 days (+5 days)
  - Active Incidents: 2 (-50%)
  - Safety Training Completion: 94% (+2%)
  - Overall Risk Score: 65 (-8 points)
  
- **Incident Trends**: Multi-line chart tracking:
  - Total incidents
  - Near misses
  - Resolved cases
  
- **Incident Types**: Pie chart breakdown:
  - Equipment-related: 35%
  - Falls: 25%
  - Chemical: 15%
  - Electrical: 15%
  - Other: 10%
  
- **High-Risk Areas Analysis**:
  - North Pit (Risk Score: 85)
  - South Pit (Risk Score: 72)
  - Processing Plant (Risk Score: 68)
  - Transport Routes (Risk Score: 55)
  - Maintenance Bay (Risk Score: 45)
  
- **Recent Incidents Log**: Detailed cards showing:
  - Incident type and severity
  - Location and time
  - Description
  - Current status
  
- **Predictive Safety Alert**: AI-powered prediction showing 68% probability of incident in North Pit within 7 days

### 4. Environmental Monitoring
- **Environmental KPIs**:
  - Air Quality Index: 68 (Moderate)
  - Water Quality: Good (Within Limits)
  - Noise Levels: 1 Alert Active
  - CO₂ Emissions: -18% vs last year
  
- **Air Quality Monitoring**: Stacked area chart tracking:
  - PM2.5 levels
  - PM10 levels
  - Air Quality Index (AQI)
  
- **Noise Monitoring**: Real-time noise levels by location:
  - North Pit: 85 dB (Normal)
  - South Pit: 92 dB (Warning - exceeds 90 dB limit)
  - Processing: 88 dB (Normal)
  - Transport: 78 dB (Normal)
  
- **Water Quality Trends**: Multi-axis line chart showing:
  - pH levels
  - Turbidity (NTU)
  - Dissolved Oxygen (mg/L)
  
- **Carbon Footprint Tracking**: Composed chart displaying:
  - Scope 1, 2, 3 emissions (stacked bars)
  - Target reduction line overlay
  
- **Environmental Performance Radar**: 6-axis radar chart comparing:
  - Air Quality, Water Quality, Noise Levels
  - Dust Control, Waste Management, Biodiversity
  - Current vs Target performance
  
- **Biodiversity Impact Assessment**: Scatter plot showing:
  - Species count vs habitat quality
  - Bubble sizes represent baseline values
  - Interactive tooltips with species information
  
- **Legacy Emissions Tracking**: Bar chart displaying monthly:
  - CO₂ emissions (tons)
  - NOₓ emissions (kg)
  - SOₓ emissions (kg)
  
- **Monitoring Stations Status**: 4 stations with real-time updates
  
- **All Environmental Charts**: Feature expandable fullscreen capability

## Technical Stack

### Frontend
- **React 19.2.0**: Modern UI library
- **TypeScript 4.9.5**: Type-safe development
- **Material-UI (MUI) 7.3.4**: Component library
  - @mui/material: Core components, Dialog system for expandable charts
  - @mui/icons-material: Icon library (including Fullscreen icons)
  - @mui/lab: Experimental components (Timeline)
- **React Router DOM 7.9.4**: Client-side routing
- **Recharts 3.2.1**: Advanced data visualization library
  - LineChart, AreaChart, BarChart, PieChart
  - RadarChart, ScatterChart, ComposedChart
  - ResponsiveContainer for adaptive sizing

### Styling
- **Emotion**: CSS-in-JS styling
- **Material-UI theming**: Dark mode with custom color palette
  - Primary: #3f51b5 (Indigo)
  - Secondary: #f50057 (Pink)
  - Background: #121212 (Dark)

## Project Structure

```
mining-analytics/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Top navigation bar
│   │   └── Sidebar.tsx         # Side navigation menu
│   ├── pages/
│   │   ├── Dashboard.tsx       # Main overview page
│   │   ├── Equipment.tsx       # Equipment monitoring page
│   │   ├── Safety.tsx          # Safety analytics page
│   │   └── Environment.tsx     # Environmental monitoring page
│   ├── App.tsx                 # Main app component with routing
│   └── index.tsx               # Entry point
├── package.json
└── tsconfig.json
```

## Key Features for Presentation

### 1. Real-time Monitoring
- Live data visualization with automatic updates
- Color-coded alerts and status indicators
- Interactive charts and graphs

### 2. Predictive Analytics
- **Equipment**: Predictive maintenance alerts based on usage patterns
- **Safety**: Risk assessment and incident probability forecasting
- **Environment**: Environmental impact predictions

### 3. Data Visualization
- **7+ Chart Types**: Line, Bar, Pie, Area, Radar, Scatter, Composed charts
- **Interactive Features**: Expandable fullscreen charts, hover tooltips, clickable legends
- **Advanced Charts**: 
  - Radar charts for multi-dimensional performance analysis
  - Scatter plots for correlation analysis
  - Composed charts combining bars and lines
  - Donut charts with inner radius styling
- Progress bars and gauges
- Timeline views
- KPI cards with trend indicators

### 4. User Experience
- Responsive design (works on desktop, tablet, mobile)
- Dark theme for reduced eye strain
- Intuitive navigation with sidebar menu
- Collapsible sidebar for more screen space
- Clean, modern Material Design interface

## Sample Data Included

All pages include realistic sample data demonstrating:
- 7 months of historical production data
- Equipment health metrics for 4+ machines
- Safety incident logs and trends
- Environmental readings (air, water, noise, emissions)
- Predictive alerts and warnings

## Running the Application

```bash
# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm start

# Build for production
npm build
```

The application will be available at `http://localhost:3000`

## Navigation

- **Dashboard** (`/`): Overview of all metrics
- **Equipment** (`/equipment`): Detailed equipment monitoring
- **Safety** (`/safety`): Worker safety analytics
- **Environment** (`/environment`): Environmental monitoring

## Presentation Tips

1. **Start with Dashboard**: Show the high-level overview and explain KPIs
2. **Demonstrate Expandable Charts**: Click fullscreen icons to show the new feature
3. **Navigate to Equipment**: Demonstrate predictive maintenance features
4. **Show Safety Page**: Highlight risk assessment and incident prediction
5. **End with Environment**: Display advanced environmental analytics (radar, scatter plots)
6. **Emphasize Chart Variety**: Showcase 7+ different chart types
7. **Emphasize Predictive Features**: Point out the AI-powered alerts on each page

## Future Enhancements (Suggestions)

- Real-time data integration with IoT sensors
- Machine learning models for more accurate predictions
- User authentication and role-based access
- Export functionality (PDF reports, CSV data)
- Mobile app version
- Integration with existing mining management systems
- Historical data analysis and reporting
- Customizable dashboards and alerts

## Notes

- All Grid components have been updated to use stable MUI Grid with proper item props
- Charts are fully responsive and expandable to 90% viewport size
- All data is simulated for demonstration purposes
- The predictive alerts are based on sample algorithms and would need real ML models in production
- Expandable chart feature uses Material-UI Dialog components for optimal user experience

## Contact & Support

This is a prototype/demonstration application created for academic presentation purposes.
