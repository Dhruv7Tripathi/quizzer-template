export const navItems = [
  { name: "Home", href: "/" },
  { name: "Quizzes", href: "/#" },
  { name: "About", href: "/#" },
  { name: "profile", href: "/#" },
];

export const faqItems = [
  {
    question: "How do I create a quiz?",
    answer: "Creating a quiz is simple! Click on 'Create Your First Quiz' button, choose a template or start from scratch, add your questions, and customize the design. Our intuitive interface guides you through the process step by step."
  },
  {
    question: "Can I share my quizzes?",
    answer: "Absolutely! Once your quiz is created, you'll get a unique shareable link. You can also embed quizzes on websites, share on social media, or send direct links to your audience."
  },
  {
    question: "Is the platform free?",
    answer: "We offer a free tier with basic features and limited quizzes. Premium plans are available for advanced features, unlimited quizzes, and detailed analytics."
  },
  {
    question: "Do I need any technical skills?",
    answer: "Not at all! Our platform is designed to be user-friendly for everyone. No coding or design skills are required to create professional-looking, engaging quizzes."
  },
  {
    question: "Can I track quiz results?",
    answer: "Yes! Our platform provides comprehensive analytics, including individual and aggregate quiz results, time taken, and performance insights."
  },
  {
    question: "Can I customize the look of my quiz?",
    answer: "Yes, you can choose from various themes, fonts, and colors to match your brand or personal style."
  },
];

export const Plans = [
  {
    name: "Starter",
    price: "50",
    yearlyPrice: "40",
    period: "month",
    features: [
      "Up to 10 projects",
      "Basic analytics",
      "48-hour support response time",
      "Limited API access",
      "Community support",
    ],
    description: "Perfect for individuals and small projects.",
    buttonText: "Start Free Trial",
    href: "#",
  },
  {
    name: "Professional",
    price: "99",
    yearlyPrice: "79",
    period: "month",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "24-hour support response time",
      "Full API access",
      "Priority support & Team collaboration",
    ],
    description: "Ideal for growing teams and businesses.",
    buttonText: "Get Started",
    href: "#",
    isPopular: true,
  },
  {
    name: "Enterprise",
    price: "299",
    yearlyPrice: "239",
    period: "month",
    features: [
      "Everything in Professional",
      "Custom solutions & integrations",
      "Dedicated account manager",
      "SSO Authentication & Advanced security",
    ],
    description: "For large organizations with specific needs.",
    buttonText: "Contact Sales",
    href: "#",
  },
]
