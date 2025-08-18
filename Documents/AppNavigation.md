# Application Navigation & Flow

---

## **Authentication & Login**
- The app starts at the login screen.
- Users log in as either **admin** or **user** (`password: password`).
- On successful login, the app navigates to the main tabbed interface.

## **Route Protection**
- All main tabs are protected by an **AuthGuard**.
- Only authenticated users can access the tabs.
- If not logged in, users are redirected to the login page.

## **Role-Based UI**
- Tab navigation shows/hides tabs based on the user’s role:
  - **admin**: Sees all tabs (Safe Harbor, High Cost, Points & Fees, State Regulatory Tests).
  - **user**: Sees all except State Regulatory Tests.
- The header displays the logged-in username and a logout button for both roles.

## **Tabbed Navigation**
- The main interface uses tabs for different compliance tests.
- The default tab is **Points & Fees**.
- Users can switch between tabs to view different test results.

## **Data Loading**
- Each tab loads its test results from a corresponding JSON file in `Data`.
- Data is displayed in a modern, responsive UI with color-coded status.

## **Actions & UI**
- Users can interact with forms (e.g., Points & Fees calculator).
- Actions and UI elements are shown/hidden based on role.

## **Error Handling**
- All uncaught errors are handled by a centralized **GlobalErrorHandler**.
- HTTP errors are intercepted and logged by an **HttpErrorInterceptor**.

## **Logout**
- Clicking the logout button logs the user out and redirects to the login page.

## **Customization & Extensibility**
- The app uses Angular 20 best practices and is easy to extend with new tabs, roles, or features.

---
