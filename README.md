
# RegulatoryComplianceUI

RegulatoryComplianceUI is an Angular 20 application for managing and displaying regulatory compliance test results for loans. It features:

- Tabbed navigation for Safe Harbor, High Cost, Points & Fees, and State Regulatory Tests
- Dynamic data loading from JSON files in `src/assets/Data`
- Authentication module for login/logout and access control
- Modern Angular 20 syntax and best practices
- Responsive UI with color-coded test results

## Features

- **Authentication & Route Protection**: Uses an AuthGuard (`auth.guard.ts`) to protect routes. Only authenticated users can access main tabs.
- **Role-Based UI**: Tabs and actions are shown/hidden based on user role. Two roles are supported:
	- `admin`: Sees all tabs (Safe Harbor, High Cost, Points & Fees, State Regulatory Tests)
	- `user`: Sees all except State Regulatory Tests
	- Both use password `password` for login
- **Centralized Error Handling**: All uncaught errors are handled by a global error handler (`global-error-handler.ts`).
- **HTTP Error Interceptor**: All HTTP errors are caught and logged by a centralized interceptor (`http-error.interceptor.ts`).
- **Dynamic Data**: Test results are loaded from JSON files and displayed in each tab.
- **Status Colors**: Test status is color-coded (e.g., blue for passed, red for failed).
- **Angular 20 Syntax**: Uses new control flow and class binding features where supported.

## Authentication & Roles

The app uses a simple authentication service. To log in, use:

- Username: `admin` or `user`
- Password: `password`

Role-based UI:
- `admin`: Sees all tabs
- `user`: Sees all except State Regulatory Tests

You can extend the authentication logic in `src/app/Services/auth.service.ts`.

## Data Files

Compliance test results are stored in JSON files in `src/assets/Data/`. You can edit these files to update the displayed results. This mimics data from a DQL server database.

## Customization

- Add new tabs or components using Angular CLI
- Update styles in the relevant CSS files
- Extend authentication and role logic for real-world use
- Customize error handling and HTTP interceptor for notifications or logging

