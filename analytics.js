// Import and inject Vercel Analytics
import { inject } from './node_modules/@vercel/analytics/dist/index.mjs';


// Initialize Vercel Analytics
inject({
    mode: 'auto', // auto-detect environment (production/development)
    debug: true   // enable debug logging in development
});
