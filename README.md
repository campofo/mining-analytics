# Mining Analytics Dashboard 

A comprehensive predictive analytics dashboard for the mining industry, demonstrating how big data can transform operational efficiency, worker safety, and environmental monitoring.

## Features

### Advanced Data Visualization
- **7+ Chart Types**: Line, Bar, Pie, Area, Radar, Scatter, Composed charts
- **Expandable Charts**: Click fullscreen icons for detailed analysis (90% viewport coverage)
- **Interactive Elements**: Hover tooltips, clickable legends, responsive design
- **Modern UI**: Dark theme with Material Design components

### Equipment Monitoring
- Real-time equipment status and health metrics
- Predictive maintenance alerts
- Horizontal bar charts showing efficiency vs targets
- Equipment utilization tracking

### Safety Analytics  
- Incident trends and risk assessment
- Predictive safety alerts with probability forecasting
- Interactive pie charts for incident type analysis
- High-risk area identification

### Environmental Monitoring
- Air quality monitoring with stacked area charts
- Water quality trends with multi-axis displays
- **Carbon Footprint Tracking**: Composed charts with Scope 1, 2, 3 emissions
- **Environmental Performance Radar**: 6-axis performance comparison
- **Biodiversity Impact Assessment**: Scatter plots with correlation analysis

## Technology Stack

- **React 19.2.0** + **TypeScript 4.9.5**
- **Material-UI 7.3.4** (Components, Icons, Dialog system)
- **Recharts 3.2.1** (Advanced data visualization)
- **React Router DOM 7.9.4** (Navigation)

## Quick Start

### Development (Local)

```bash
# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm start

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the dashboard.

### Docker Deployment

#### Using Docker Compose (Recommended)

```bash
# Build and start the container
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the container
docker-compose down
```

The application will be available at [http://localhost:8080](http://localhost:8080)

#### Using Docker directly

```bash
# Build the image
docker build -t mining-analytics .

# Run the container
docker run -d -p 8080:80 mining-analytics
```

The application will be available at [http://localhost:8080](http://localhost:8080)

## Navigation

- **Dashboard** (`/`) - Overview with KPIs and expandable charts
- **Equipment** (`/equipment`) - Predictive maintenance monitoring  
- **Safety** (`/safety`) - Worker safety analytics with risk forecasting
- **Environment** (`/environment`) - Environmental compliance with advanced charts

## Key Highlights for Presentations

### Expandable Chart Feature
- Click the fullscreen icon (⛶) on any chart
- Charts expand to 90% viewport size for detailed analysis
- Enhanced styling with thicker lines and larger elements

### Chart Variety Showcase
1. **Line Charts** - Production trends, incident tracking
2. **Horizontal Bar Charts** - Equipment efficiency comparison
3. **Donut Charts** - Resource distribution with inner radius
4. **Stacked Area Charts** - 24-hour operations overview
5. **Radar Charts** - Multi-dimensional environmental performance
6. **Scatter Plots** - Biodiversity impact correlation
7. **Composed Charts** - Carbon footprint with bars + line overlay

### Predictive Analytics
- Equipment maintenance predictions
- Safety incident probability forecasting (68% accuracy example)
- Environmental threshold breach predictions

## Sample Data Included

- 7 months of production data
- Equipment health metrics for 6+ machines
- Safety incident logs and risk scores
- Environmental readings (air, water, noise, emissions)
- Realistic predictive alerts and warnings

## Design Features

- **Responsive Design** - Works on desktop, tablet, mobile
- **Dark Theme** - Reduced eye strain with custom color palette
- **Collapsible Sidebar** - More screen space when needed
- **Material Design** - Modern, intuitive interface
- **Color-coded Alerts** - Visual severity indicators

## Presentation Tips

1. **Start with Dashboard** - Show KPIs and demonstrate expandable charts
2. **Navigate through pages** - Equipment → Safety → Environment
3. **Click fullscreen icons** - Showcase the expandable feature
4. **Emphasize chart variety** - Point out different visualization types
5. **Highlight predictive features** - AI-powered alerts on each page

## Technical Notes

- All Grid components use stable MUI Grid with proper item props
- Charts are fully responsive with `minWidth: 0` for proper flex behavior
- Expandable feature uses Material-UI Dialog components
- TypeScript provides type safety throughout the application

## Documentation

- `PRESENTATION_SCRIPT.md` - Detailed 10-minute presentation guide
- `PROJECT_SUMMARY.md` - Comprehensive feature overview
- `SETUP_GUIDE.md` - Installation and setup instructions
- `QUICK_REFERENCE.md` - Key features and navigation guide

## Perfect for Demonstrating

- Big Data analytics in industrial applications
- Predictive maintenance and safety forecasting
- Modern web development with React + TypeScript
- Advanced data visualization techniques
- Responsive design and user experience
