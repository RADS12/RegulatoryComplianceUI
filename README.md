
# RegulatoryComplianceUI

RegulatoryComplianceUI is an Angular 20 application for managing and displaying regulatory compliance test results for loans. It features:

- Tabbed navigation for Safe Harbor, High Cost, Points & Fees, and State Regulatory Tests
- Dynamic data loading from JSON files in `src/assets/Data`
- Authentication module for login/logout and access control
- Modern Angular 20 syntax and best practices
- Responsive UI with color-coded test results

## Features

- **Authentication**: All components use a shared authentication service. Only authenticated users can view compliance data.
- **Dynamic Data**: Test results are loaded from JSON files and displayed in each tab.
- **Status Colors**: Test status is color-coded (e.g., blue for passed, red for failed).
- **Angular 20 Syntax**: Uses new control flow and class binding features where supported.

## Getting Started

To start the development server:

```bash
ng serve
```

Open your browser at `http://localhost:4200/`.

## Authentication

The app uses a simple authentication service. To log in, use:

- Username: `admin`
- Password: `password`

You can extend the authentication logic in `src/app/Services/auth.service.ts`.

## Data Files

Compliance test results are stored in JSON files in `src/assets/Data/`. You can edit these files to update the displayed results.

## Building

To build the project:

```bash
ng build
```

Build output is in the `dist/RegulatoryComplianceUI` directory.

## Testing

To run unit tests:

```bash
ng test
```

## Customization

- Add new tabs or components using Angular CLI
- Update styles in the relevant CSS files
- Extend authentication for real-world use

## More Info

For Angular CLI documentation, see [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).
