# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SynthArmor is a Vue.js web application that generates custom 3D models for synthesizer protective covers. Users can adjust dimensions and export STL files for 3D printing.

## Commands

### Development
- `npm install` - Install dependencies
- `npm run dev` - Start development server (Vite)
- `npm run build` - Build for production
- `npm run serve` - Preview production build locally

### Deployment
The project automatically deploys to GitHub Pages via GitHub Actions:
- Push to `main` branch → deploys to `/SynthArmor/dev/`
- Create a GitHub release → deploys to `/SynthArmor/`

## Architecture

### Technology Stack
- Vue 3 with Composition API
- Vite for building
- JSCAD for 3D geometry generation
- Three.js for 3D visualization
- Tailwind CSS for styling

### Key Components

1. **State Management**: `App.vue` manages all application state. Child components receive props and emit events for updates.

2. **3D Geometry Generation** (`src/jscad/geometry.js`):
   - Uses JSCAD's CSG operations
   - Creates a protective cover with bottom borders, top borders (inset), and a top plate
   - Holes are created using boolean subtraction
   - Important: Right hole appears on left border, left hole on right border (coordinate system quirk)

3. **Component Communication Pattern**:
   ```
   App.vue (state owner)
     ├── BasicForm.vue (emits dimension changes)
     ├── AdvancedForm.vue (emits advanced settings)
     ├── HoleOptionsForm.vue (emits hole configurations)
     └── ModelViewer.vue (receives geometry, handles STL export)
   ```

### Build Configuration

The Vite config uses dynamic base paths:
- Production (`DEPLOY_ENV=production`): `/SynthArmor/`
- Development (`DEPLOY_ENV=development`): `/SynthArmor/dev/`

### Key Files

- `src/jscad/geometry.js` - Core 3D modeling logic
- `src/components/ModelViewer.vue` - Three.js integration and STL export
- `src/App.vue` - Main application state and component orchestration
- `.github/workflows/` - Deployment automation

## Development Notes

1. **No Test Suite**: The project currently lacks tests. Consider adding Vitest for future development.

2. **No Linting/Formatting**: No ESLint or Prettier configuration exists. Code style should follow existing patterns.

3. **3D Coordinate System**: The JSCAD coordinate system has some quirks - particularly with hole positioning where left/right are swapped in the visual output.

4. **Performance Consideration**: 3D geometry regenerates on every parameter change. For complex models, this could impact performance.

5. **STL Export**: Uses @jscad/stl-serializer to convert JSCAD geometry to STL format for 3D printing.