
> my-v0-project@0.1.0 dev C:\Users\ifunanya\Desktop\crowsstack-portfolio (1)
> next dev "--turbo"

   ▲ Next.js 15.2.4 (Turbopack)
   - Local:        http://localhost:3000
   - Network:      http://10.0.0.6:3000

 ✓ Starting...
 ✓ Ready in 7.9s
 ○ Compiling / ...
 ✓ Compiled / in 9.4s
 GET / 200 in 10278ms
 ○ Compiling /icon ...
 ✓ Compiled /icon in 6.9s
 ⨯ [Error: No response is returned from route handler '[project]/app/icon--route-entry.js'. Ensure you return a `Response` or a `NextResponse` in all branches of your handler.]
 ⨯ [Error: No response is returned from route handler '[project]/app/icon--route-entry.js'. Ensure you return a `Response` or a `NextResponse` in all branches of your handler.]
 GET /icon?7a902fc41a894522 500 in 7416ms

C:\Users\ifunanya\Desktop\crowsstack-portfolio (1)>


C:\Users\ifunanya\Desktop\crowsstack-portfolio (1)>

C:\Users\ifunanya\Desktop\crowsstack-portfolio (1)>pnpm build

> my-v0-project@0.1.0 build C:\Users\ifunanya\Desktop\crowsstack-portfolio (1)
> next build

   ▲ Next.js 15.2.4

   Creating an optimized production build ...
 ✓ Compiled successfully
   Skipping validation of types
   Skipping linting
 ✓ Collecting page data    
Error occurred prerendering page "/icon". Read more: https://nextjs.org/docs/messages/prerender-error
Error: No response is returned from route handler 'next-metadata-route-loader?filePath=C%3A%5CUsers%5Cifunanya%5CDesktop%5Ccrowsstack-portfolio%20(1)%5Capp%5Cicon.tsx&isDynamicRouteExtension=1!?__next_metadata_route__'. Ensure you return a `Response` or a `NextResponse` in all branches of your handler.
    at to.do (C:\Users\ifunanya\Desktop\crowsstack-portfolio (1)\node_modules\.pnpm\next@15.2.4_react-dom@19.1.1_react@19.1.1__react@19.1.1\node_modules\next\dist\compiled\next-server\app-route.runtime.prod.js:18:19348)
    at async to.handle (C:\Users\ifunanya\Desktop\crowsstack-portfolio (1)\node_modules\.pnpm\next@15.2.4_react-dom@19.1.1_react@19.1.1__react@19.1.1\node_modules\next\dist\compiled\next-server\app-route.runtime.prod.js:18:23632)
    at async exportAppRoute (C:\Users\ifunanya\Desktop\crowsstack-portfolio (1)\node_modules\.pnpm\next@15.2.4_react-dom@19.1.1_react@19.1.1__react@19.1.1\node_modules\next\dist\export\routes\app-route.js:94:26)
    at async Span.traceAsyncFn (C:\Users\ifunanya\Desktop\crowsstack-portfolio (1)\node_modules\.pnpm\next@15.2.4_react-dom@19.1.1_react@19.1.1__react@19.1.1\node_modules\next\dist\trace\trace.js:157:20)    
    at async exportPage (C:\Users\ifunanya\Desktop\crowsstack-portfolio (1)\node_modules\.pnpm\next@15.2.4_react-dom@19.1.1_react@19.1.1__react@19.1.1\node_modules\next\dist\export\worker.js:357:18)
    at async exportPageWithRetry (C:\Users\ifunanya\Desktop\crowsstack-portfolio (1)\node_modules\.pnpm\next@15.2.4_react-dom@19.1.1_react@19.1.1__react@19.1.1\node_modules\next\dist\export\worker.js:247:26)
    at async Promise.all (index 3)
    at async Object.exportPages (C:\Users\ifunanya\Desktop\crowsstack-portfolio (1)\node_modules\.pnpm\next@15.2.4_react-dom@19.1.1_react@19.1.1__react@19.1.1\node_modules\next\dist\export\worker.js:334:31) 
Export encountered an error on /icon/route: /icon, exiting the build.
 ⨯ Next.js build worker exited with code: 1 and signal: null
 ELIFECYCLE  Command failed with exit code 1.

C:\Users\ifunanya\Desktop\crowsstack-portfolio (1)>

C:\Users\ifunanya\Desktop\crowsstack-portfolio (1)>Certifications
'Certifications' is not recognized as an internal or external command,