export const categoriesArray = [
    {
        text: "SaaS",
        icon: "💻",
    },
    {
        text: "Startups",
        icon: "🚀",
    },
    {
        text: "AI Tools",
        icon: "🤖",
    },
    {
        text: "Web Tools",
        icon: "🔨",
    },
    {
        text: "Social Media",
        icon: "💬",
    },
    {
        text: "Sales and Marketing",
        icon: "🗣",
    },
    {
        text: "Developer Tools",
        icon: "🔧",
    },
    {
        text: "Web Development",
        icon: "🛠",
    },
    {
        text: "Education",
        icon: "📚",
    },
    {
        text: "Email",
        icon: "📧",
    },
    {
        text: "Internet Marketing",
        icon: "🗣",
    },
    {
        text: "Apps",
        icon: "📱",
    },
    {
        text: "Content Creators",
        icon: "✍️",
    },
    {
        text: "Collaboration",
        icon: "👥",
    },
    {
        text: "To Do Lists",
        icon: "📝",
    },
    {
        text: "Design",
        icon: "📝",
    },
    {
        text: "Machine Learning",
        icon: "💻",
    },
    {
        text: "Finance Technology",
        icon: "💵",
    },
    {
        text: "Web3 & Crypto",
        icon: "🪙",
    },
]


export const url = process.env.NODE_ENV == "development" ? `${process.env.NEXT_PUBLIC_LOCAL_URL}/api` : `${process.env.NEXT_PUBLIC_URL}/api`
// `${process.env.NEXT_PUBLIC_URL}/api` || 