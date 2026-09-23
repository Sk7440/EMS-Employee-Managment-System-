# 🚀 TaskSpace — Role-Based Task Management System

[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v3%2Fv4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Bundled%20with-Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**TaskSpace** is a lightweight, responsive task management web application built with React and Tailwind CSS. It features full role-based access control (RBAC), dividing responsibilities between an **Administrator** (who assigns and oversees team workflows) and **Employees** (who track progress and submit completed tasks), backed by synchronized client-side persistence via `localStorage`.

---

## 📌 Features

### 🛡️ Admin Portal
- **Global Team Overview:** View live performance metrics across all employees, including tallies for `New`, `Active`, `Done`, and `Failed` tasks.
- **Dynamic Task Assignment:** Assign tasks directly to registered team members with real-time UI state updates.
- **Attribute Controls:** Configure task priority (`Low`, `Medium`, `High`), due dates, title, and detailed descriptions.
- **Immediate State Synchronization:** Assigned tasks reflect instantaneously in both admin metrics and the employee's personal dashboard.

### 👤 Employee Dashboard
- **Live Metrics Counter:** Real-time counters displaying counts for Total Assigned, Pending, Active, and Completed tasks.
- **Interactive Task Execution:** Review project instructions and click **"Submit Task"** to mark tasks completed in real time.
- **Dynamic Priority & Date Badging:** Color-coded priority tags (`High` in rose, `Medium` in amber, `Low` in emerald).
- **Dynamic Profile Initials:** Automatically resolves dynamic avatars and initials according to the logged-in user's identity.

### ⚡ Authentication & State Management
- **Role-Based Routing:** Automatically renders the Admin Workspace or Employee Dashboard based on verified user credentials.
- **Session Persistence:** Persistent login sessions saved in `localStorage`.
- **Zero-Configuration Seeding:** Pre-populates default mock employees, administrators, and tasks on first launch.

---

## 🛠️ Tech Stack

- **Frontend Library:** React (Hooks: `useState`, `useEffect`, `useContext`, `createContext`)
- **Styling:** Tailwind CSS (Modern Slate & Indigo dark/light theme)
- **State & Data Store:** React Context API + LocalStorage
- **Build Tool:** Vite

---

## 📂 Project Architecture

```plaintext
src/
├── components/
│   ├── Admin Dashboard Components/
│   │   ├── AdminNavbar.jsx          # Admin top bar with logout
│   │   ├── CreateTaskform.jsx       # Form to assign tasks to employees
│   │   └── Header.jsx               # Workspace title and badge
│   ├── Auth/
│   │   └── Login.jsx                # Universal authentication form
│   ├── Dashboard/
│   │   ├── AdminDashboard.jsx       # Admin portal layout & employee metrics
│   │   └── EmployeeDasboard.jsx     # Main employee dashboard & task grids
│   └── Employeedashboard Components/
│       ├── Navbar.jsx               # Dynamic user profile bar
│       ├── OverviewStat.jsx         # Summary cards wrapper
│       ├── TaskList.jsx             # Individual interactive task card
│       ├── Welcmbanner.jsx          # Welcome greetings & logout
│       └── TaskList box/
│           ├── AcceptTask.jsx       # Total assigned count
│           ├── CompleteTAsk.jsx     # Completed tasks count
│           ├── Inprogress.jsx       # Active tasks count
│           └── NewTask.jsx          # Pending tasks count
├── context/
│   └── AuthProvider.jsx             # Global context for employee & task state
├── utils/
│   └── localStorage.jsx            # Default datasets & initial store hydration
├── App.jsx                          # Main router & session state coordinator
└── main.jsx                         # Application root mount
```

---

## 🔑 Demo Credentials

You can test both roles using the pre-seeded credentials below:

### 👑 Admin
- **Email:** `admin@company.com`
- **Password:** `123`

### 👷 Employees
| Name | Email | Password | Role |
| :--- | :--- | :--- | :--- |
| **Alex Morgan** | `alex.morgan@company.com` | `123` | Product Designer |
| **Sarah Chen** | `sarah.chen@company.com` | `123` | Frontend Developer |
| **David Miller** | `david.miller@company.com` | `123` | Backend Developer |
| **Emma Watson** | `emma.watson@company.com` | `123` | Data Scientist |
| **James Wilson** | `james.wilson@company.com` | `123` | Database Engineer |

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v16.x or newer recommended) and `npm` installed.

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/taskspace.git
cd taskspace
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```

Visit the displayed local address (typically `http://localhost:5173`) in your browser.

### 4. Build for Production
```bash
npm run build
```

---

## 📝 Resetting Local Data
Because data is persisted in browser storage, you can reset all tasks and employees to their initial mock state at any time by opening the browser DevTools console (F12) and running:
```javascript
localStorage.clear();
location.reload();
```

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).