const admin = [
    {
        id: "admin-01",
        email: "admin@company.com",
        password: "123"
    }
];

const employees = [
    {
        id: "emp-01",
        name: "Alex Morgan",
        designation: "Product designer",
        email: "alex.morgan@company.com",
        password: "123",
        tasks: [
            {
                taskTitle: "Redesign Checkout Flow",
                taskDescription: "Update wireframes and prototypes for mobile checkout user experience.",
                taskDate: "2026-09-03",
                priority: "High",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                taskTitle: "Update Design Tokens",
                taskDescription: "Publish updated color tokens to Figma component library.",
                taskDate: "2026-08-28",
                priority: "Low",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                taskTitle: "User Testing Session",
                taskDescription: "Conduct feedback sessions with 5 beta users on new onboarding.",
                taskDate: "2026-09-01",
                priority: "Medium",
                active: false,
                newTask: false,
                completed: false,
                failed: true
            },
            {
                taskTitle: "Accessibility Audit",
                taskDescription: "Check primary pages for WCAG AA compliance standards.",
                taskDate: "2026-09-05",
                priority: "High",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            }
        ]
    },
    {
        id: "emp-02",
        name: "Sarah Chen",
        designation: "Frontend devloper",
        email: "sarah.chen@company.com",
        password: "123",
        tasks: [
            {
                taskTitle: "Fix Responsive Dashboard Layout",
                taskDescription: "Resolve grid overflow issues on tablet viewports.",
                taskDate: "2026-08-30",
                priority: "Medium",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                taskTitle: "Optimize Bundle Size",
                taskDescription: "Implement code splitting and dynamic imports for vendor scripts.",
                taskDate: "2026-09-04",
                priority: "High",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                taskTitle: "Integrate Payment Gateway",
                taskDescription: "Connect Stripe checkout webhooks with backend endpoints.",
                taskDate: "2026-09-06",
                priority: "High",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            }
        ]
    },
    {
        id: "emp-03",
        name: "David Miller",
        designation: "backend developer",
        email: "david.miller@company.com",
        password: "123",
        tasks: [
            {
                taskTitle: "API Authentication Integration",
                taskDescription: "Implement JWT refresh tokens and session management.",
                taskDate: "2026-09-02",
                priority: "High",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            },
            {
                taskTitle: "Database Migration Script",
                taskDescription: "Migrate legacy user records to PostgreSQL schema.",
                taskDate: "2026-08-25",
                priority: "High",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                taskTitle: "Setup Redis Caching",
                taskDescription: "Cache API response payloads for frequent dashboard queries.",
                taskDate: "2026-08-31",
                priority: "Medium",
                active: false,
                newTask: false,
                completed: false,
                failed: true
            },
            {
                taskTitle: "Write API Documentation",
                taskDescription: "Document endpoints using Swagger/OpenAPI specification.",
                taskDate: "2026-09-07",
                priority: "Low",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            }
        ]
    },
    {
        id: "emp-04",
        name: "Emma Watson",
        designation: "Data Scientist",
        email: "emma.watson@company.com",
        password: "123",
        tasks: [
            {
                taskTitle: "Prepare Monthly KPI Report",
                taskDescription: "Compile department metrics and presentation slides.",
                taskDate: "2026-08-31",
                priority: "Medium",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                taskTitle: "Client Onboarding Calls",
                taskDescription: "Schedule and lead introductory calls with enterprise accounts.",
                taskDate: "2026-09-03",
                priority: "High",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                taskTitle: "Update Knowledge Base",
                taskDescription: "Revise help documentation articles for new features.",
                taskDate: "2026-09-08",
                priority: "Low",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            }
        ]
    },
    {
        id: "emp-05",
        name: "James Wilson",
        designation: "database engineer",
        email: "james.wilson@company.com",
        password: "123",
        tasks: [
            {
                taskTitle: "Configure CI/CD Pipelines",
                taskDescription: "Automate build and deployment checks using GitHub Actions.",
                taskDate: "2026-09-02",
                priority: "High",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            },
            {
                taskTitle: "Server Load Testing",
                taskDescription: "Simulate peak traffic conditions using k6 testing tools.",
                taskDate: "2026-08-27",
                priority: "High",
                active: false,
                newTask: false,
                completed: false,
                failed: true
            },
            {
                taskTitle: "SSL Certificate Renewal",
                taskDescription: "Update TLS certificates across staging and production clusters.",
                taskDate: "2026-08-29",
                priority: "Medium",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                taskTitle: "Set Up Log Monitoring",
                taskDescription: "Integrate Datadog log alerts for server error spikes.",
                taskDate: "2026-09-04",
                priority: "Medium",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                taskTitle: "S3 Bucket Cleanup",
                taskDescription: "Archive stale asset uploads to S3 Glacier storage tier.",
                taskDate: "2026-09-10",
                priority: "Low",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            }
        ]
    }
];

export function setLocalStorage() {
    localStorage.setItem("employees", JSON.stringify(employees))
    localStorage.setItem("admin", JSON.stringify(admin))

}
export function getLocalStorage() {
    const employees = JSON.parse(localStorage.getItem("employees"))
    const admin = JSON.parse(localStorage.getItem("admin"))
    return { admin, employees }


}