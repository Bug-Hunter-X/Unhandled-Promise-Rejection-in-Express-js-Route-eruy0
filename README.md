# Unhandled Promise Rejection in Express.js Route

This repository demonstrates a common error in Express.js applications: unhandled promise rejections in route handlers.  Asynchronous operations within routes should always have robust error handling to prevent silent failures and application crashes.

## Bug

The `bug.js` file showcases an Express.js server with a route that performs an asynchronous operation. If the operation throws an error, the error is caught, but not handled, leading to the error silently being swallowed without any indication of failure to the user or logs.

## Solution

The `bugSolution.js` file provides a corrected version.  It properly handles the error by logging it to the console and sending an appropriate error response to the client.  This ensures that the application doesn't fail silently and that developers receive useful information to help resolve the issue.

This example highlights the importance of comprehensive error handling in asynchronous operations to build robust and reliable Express.js applications.