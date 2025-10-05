Create a modern React frontend application for a Contract Analysis Platform with the following structure:

1. Initialize a new React app with TypeScript and Tailwind CSS
2. Set up the project with these main components:
   - Layout component with dark theme
   - Sidebar navigation with purple accent colors
   - Header with Dashboard, Upload Document, and Logout options
   - Main content area with document upload functionality
   - Authentication components (Login/Register forms)

3. Use these exact styling requirements:
   - Dark background (#1a1a1a or similar)
   - Purple primary color (#8b5cf6 or similar)
   - Clean, minimalist design
   - Responsive layout

4. Create the folder structure:
src/
├── components/
│ ├── Layout/
│ ├── Auth/
│ ├── Dashboard/
│ └── Common/
├── pages/
├── hooks/
├── services/
└── utils/

Generate the complete package.json with all necessary dependencies including React Router, Axios, and Tailwind CSS.

Create the main layout components for the Contract Analysis Platform:

1. **Header Component** with:
   - Logo/title "Contract Analysis Platform" in purple
   - Navigation links: Dashboard, Upload Document
   - Logout button (purple background)
   - Responsive design

2. **Sidebar Component** with:
   - "Upload Document" section with file picker
   - Purple "Upload" button
   - "Documents" section (empty for now)
   - Dark background with proper spacing

3. **Dashboard Layout** with:
   - Two-column layout (sidebar left, main content right)
   - Main content area showing "Select a document to view its analysis"
   - File upload functionality with drag-and-drop support
   - Proper responsive behavior

4. **Styling Requirements**:
   - Use Tailwind CSS classes
   - Dark theme throughout
   - Purple accent color (#8b5cf6)
   - Clean typography
   - Hover effects on interactive elements

Include proper TypeScript interfaces for all props and state management.

Create comprehensive authentication components for the Contract Analysis Platform:

1. **Login Page** with:
   - Email and password fields
   - "Remember me" checkbox
   - Login button (purple theme)
   - Link to register page
   - Form validation with error messages
   - Loading states

2. **Register Page** with:
   - Full name, email, password, confirm password fields
   - Terms and conditions checkbox
   - Register button
   - Link to login page
   - Form validation including password strength
   - Loading states

3. **Auth Layout** with:
   - Centered form design
   - Consistent with main app theme (dark background, purple accents)
   - Responsive design
   - Company branding

4. **Features to include**:
   - Form validation using React Hook Form
   - Password visibility toggle
   - Loading spinners
   - Error handling and display
   - Redirect logic after successful auth
   - TypeScript interfaces for form data

5. **Styling**:
   - Match the main app's dark theme
   - Purple primary buttons
   - Clean form inputs with proper focus states
   - Error message styling
   - Mobile-responsive design

Generate complete components with proper state management and validation logic.
Set up React Router for the Contract Analysis Platform with protected routes:

1. **Route Structure**:
/login - Public login page
/register - Public registration page
/ - Protected dashboard (main layout)
/dashboard - Protected dashboard content
/upload - Protected upload page
/documents/:id - Protected document analysis view


2. **Protected Route Component**:
- Check authentication status
- Redirect to login if not authenticated
- Show loading state while checking auth

3. **Navigation Logic**:
- Programmatic navigation after login/register
- Logout functionality with route redirect
- Active route highlighting in navigation

4. **App.js Structure**:
- Router setup with all routes
- Authentication context provider
- Layout wrapper for protected routes
- Error boundary implementation

5. **Include**:
- TypeScript types for route parameters
- Proper error handling
- Loading states
- Navigation guards

Create the complete routing setup with authentication flow.

Create state management and API services for the Contract Analysis Platform:

1. **Authentication Context**:
   - User state management
   - Login/logout functions
   - Token management (localStorage)
   - Authentication status checking
   - Auto-logout on token expiry

2. **API Services** (axios-based):
   - Base API configuration with interceptors
   - Auth endpoints (login, register, logout)
   - Document endpoints (upload, list, get, delete)
   - Error handling with proper types
   - Request/response interceptors for auth tokens

3. **Custom Hooks**:
   - useAuth for authentication logic
   - useApi for API calls with loading states
   - useDocuments for document management
   - useLocalStorage for persistent data

4. **Types & Interfaces**:
   - User interface
   - Document interface
   - API response types
   - Error types
   - Form data types

5. **Error Handling**:
   - Global error boundary
   - Toast notifications for errors
   - Form validation errors
   - Network error handling

Generate complete TypeScript code with proper error handling and loading states.

Create the document upload and management functionality:

1. **File Upload Component**:
   - Drag and drop file upload
   - File type validation (PDF, DOC, DOCX)
   - File size validation
   - Upload progress indicator
   - Multiple file selection support
   - Preview selected files before upload

2. **Document List Component**:
   - Display uploaded documents
   - Document metadata (name, size, upload date)
   - Delete document functionality
   - Click to view/analyze document
   - Search and filter documents
   - Loading states and error handling

3. **Upload Features**:
   - Progress bar during upload
   - Success/error notifications
   - Cancel upload functionality
   - Retry failed uploads
   - File validation messages

4. **Styling Requirements**:
   - Match existing dark theme
   - Purple accent colors
   - Clean file list design
   - Proper hover states
   - Mobile responsive

5. **Integration**:
   - Connect to backend API endpoints
   - Update document list after upload
   - Handle authentication in requests
   - Error boundary for upload failures

Include proper TypeScript types and comprehensive error handling.

Finalize the Contract Analysis Platform frontend with:

1. **Performance Optimization**:
   - Lazy loading for components
   - Image optimization
   - Bundle splitting
   - Memoization where needed

2. **Accessibility**:
   - ARIA labels and roles
   - Keyboard navigation
   - Screen reader support
   - Focus management

3. **Responsive Design**:
   - Mobile-first approach
   - Tablet and desktop breakpoints
   - Touch-friendly interactions
   - Collapsible sidebar on mobile

4. **Error Handling**:
   - Error boundaries
   - Fallback components
   - User-friendly error messages
   - Network error recovery

5. **Final Touches**:
   - Loading skeletons
   - Smooth transitions
   - Toast notifications
   - Confirmation dialogs
   - Empty states

6. **Build Configuration**:
   - Environment variables setup
   - Build optimization
   - ESLint and Prettier configuration
   - TypeScript strict mode

Generate the complete, production-ready frontend with proper documentation.
