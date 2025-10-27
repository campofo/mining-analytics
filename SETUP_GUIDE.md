# Mining Analytics Dashboard - Setup Guide

## Quick Start

### 1. Install Dependencies
```bash
cd mining-analytics
npm install --legacy-peer-deps
```

**Note**: We use `--legacy-peer-deps` due to React 19 and MUI v7 peer dependency conflicts.

### 2. Start Development Server
```bash
npm start
```

The application will automatically open in your browser at `http://localhost:3000`

### 3. Build for Production
```bash
npm run build
```

## Troubleshooting

### Grid Component Updates

**✅ RESOLVED**: All Grid components have been updated to use the stable MUI Grid API with proper `item` props. The application should now compile without Grid-related errors.

**What was fixed:**
- Removed `Unstable_Grid2` imports
- Added `item` prop to all Grid children
- Updated Grid containers with proper spacing
- Added `minWidth: 0` to Item components for proper flex behavior

**Chart Responsiveness:**
- All charts now expand properly to fill their Grid columns
- Expandable chart feature added with fullscreen dialogs
- Charts scale from small containers to 90% viewport size

### Port Already in Use

If port 3000 is already in use:
```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill -9

# Or run on a different port
PORT=3001 npm start
```

### Module Not Found Errors

If you see module not found errors:
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

### React Version Conflicts

If you encounter React version issues:
```bash
# Force install with legacy peer deps
npm install --legacy-peer-deps --force
```

## Development Tips

### Hot Reload
The app uses React Fast Refresh. Changes to components will automatically reload without losing state.

### Browser DevTools
- Open Chrome DevTools (F12)
- Use React DevTools extension for component inspection
- Check Console for any runtime errors

### Code Structure
```
src/
├── components/       # Reusable UI components
│   ├── Navbar.tsx   # Top navigation
│   └── Sidebar.tsx  # Side menu
├── pages/           # Main application pages
│   ├── Dashboard.tsx    # 5 expandable charts, KPIs
│   ├── Equipment.tsx    # Predictive maintenance
│   ├── Safety.tsx      # Risk analysis, expandable charts
│   └── Environment.tsx # Radar, scatter, composed charts
└── App.tsx          # Main app with routing, Dialog system
```

### New Features Added
- **Expandable Charts**: All charts feature fullscreen capability
- **7+ Chart Types**: Line, Bar, Pie, Area, Radar, Scatter, Composed
- **Advanced Visualizations**: Environmental radar, biodiversity scatter plots
- **Responsive Design**: Charts adapt from small containers to fullscreen

## Customization

### Changing Theme Colors
Edit `src/App.tsx`:
```typescript
const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#3f51b5', // Change this
    },
    secondary: {
      main: '#f50057', // Change this
    },
  },
};
```

### Adding New Pages
1. Create component in `src/pages/`
2. Add route in `src/App.tsx`
3. Add menu item in `src/components/Sidebar.tsx`

### Modifying Sample Data
Each page has sample data at the top of the file. Modify these arrays to change the displayed data.

## Performance Optimization

### Production Build
```bash
npm run build
```
Creates optimized production build in `build/` directory.

### Serve Production Build Locally
```bash
npm install -g serve
serve -s build
```

## Browser Compatibility

Tested and working on:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Known Issues

1. **✅ Grid Issues Resolved**: All Grid components now use stable API
2. **MUI v7 Features**: Dialog system for expandable charts works perfectly
3. **Large Bundle Size**: Can be optimized with code splitting if needed
4. **Chart Performance**: Large datasets may need virtualization for production use

## Getting Help

### Common Commands
```bash
# Install dependencies
npm install --legacy-peer-deps

# Start dev server
npm start

# Run tests
npm test

# Build for production
npm run build

# Check for outdated packages
npm outdated
```

### Useful Resources
- [React Documentation](https://react.dev/)
- [Material-UI Documentation](https://mui.com/)
- [Recharts Documentation](https://recharts.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

## Next Steps

1. **Run the application**: `npm start`
2. **Explore all pages**: Dashboard, Equipment, Safety, Environment
3. **Test expandable charts**: Click fullscreen icons (⛶) on any chart
4. **Review chart variety**: Notice 7+ different chart types
5. **Review the code**: Check how components are structured
6. **Customize data**: Modify sample data to match your needs
7. **Practice presentation**: Navigate through all features and demonstrate expandable charts

## Deployment Options

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop build/ folder to Netlify
```

### GitHub Pages
```bash
npm install --save-dev gh-pages

# Add to package.json:
# "homepage": "https://yourusername.github.io/mining-analytics"
# "predeploy": "npm run build"
# "deploy": "gh-pages -d build"

npm run deploy
```

## Support

For issues or questions about this prototype:
1. Check this guide first
2. Review the PROJECT_SUMMARY.md
3. Check browser console for errors
4. Verify all dependencies are installed

---

**Ready to start?** Run `npm start` and open http://localhost:3000 🚀
