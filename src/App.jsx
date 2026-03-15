/**
 * App — Root Application Component
 * ==================================
 * Thin wrapper: initialises analytics and renders the route tree.
 * All routes are defined in routes/AppRouter.jsx.
 *
 * @module App
 */

import React, { useEffect } from 'react';
import AppRouter from './routes/AppRouter';
import AnalyticsTracker from './components/common/AnalyticsTracker';
import { initAnalytics } from './utils/analytics';

/**
 * App component — entry point after providers in main.jsx.
 * @returns {JSX.Element}
 */
function App() {
  useEffect(() => {
    // Initialise GA4 once on app mount
    initAnalytics();
  }, []);

  return (
    <>
      {/* Fires a GA page-view on every route change */}
      <AnalyticsTracker />
      <AppRouter />
    </>
  );
}

export default App;
