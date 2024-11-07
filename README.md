# Stencil-Starter
Starter for Stencil.js to generate Angular, React and Vue component libraries. 

For more information read the official [docs](https://stenciljs.com/docs/introduction).

## Setup
Clone the repository
```
git clone https://github.com/kasual1/stencil-starter.git
```

Install dependencies
```
cd stencil-starter
npm install
```

## Project Structure
- All component libraries are located under `packages/libs`
- All demo applications are located under `packages/demos`


## Development

1. Add new components under `packages/libs/stencil/src/components`

2. Generate components for Angular, React and Vue (run from root)
```
npm run build
```

3. Open demo projects of the framework of your choice to see the component library in action
```
npm run start-demo-angular
npm run start-demo-react
npm run start-demo-vue
```
