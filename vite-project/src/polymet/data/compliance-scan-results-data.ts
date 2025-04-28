export const COMPLIANCE_SCAN_RESULTS = {
  url: "smithjohnsonlaw.com",
  score: 33,
  jurisdiction: "California, US",
  status: "Non-compliant",
  issuesCount: 10,
  summary:
    "Your scan indicates that your website has some serious accessibility issues. Make your website accessible and mitigate legal risk now.",
  screenshot: "https://picsum.photos/seed/lawfirm123/600/400",

  requiredActions: {
    score: 58,
    items: [
      {
        id: 1,
        title: "Add Business Registration",
        description:
          "Business & Professions Code § 6155 - Penalty: Up to $10,000 USD",
        severity: "high",
      },
      {
        id: 2,
        title: "Add Unsubscribe Link",
        description: "CAN-SPAM Act - Penalty: Up to $43,792 USD per email",
        severity: "high",
      },
      {
        id: 3,
        title: "Add Legal Advertising Disclaimer",
        description: "ABA Model Rule 7.1-7.5 - Penalty: Up to $5,000 USD",
        severity: "high",
      },
      {
        id: 4,
        title: "Add AI Policy",
        description: "AI Ethics Framework - Penalty: Reputational Risk",
        severity: "medium",
      },
    ],
  },

  sections: [
    {
      id: "privacy",
      title: "Privacy and Data Protection",
      score: 58,
      items: [
        {
          id: "privacy-policy",
          title: "Privacy Policy",
          status: "present",
          info: "Your privacy policy is present but may need updates to comply with CCPA requirements.",
        },
        {
          id: "cookie-consent",
          title: "Cookie Consent",
          status: "missing",
          info: "No cookie consent mechanism found on your website.",
        },
        {
          id: "privacy-act",
          title: "CCPA Compliance",
          status: "present",
          info: "Your website includes California Consumer Privacy Act notices.",
        },
      ],
    },
    {
      id: "business",
      title: "Business and Legal Requirements",
      score: 58,
      items: [
        {
          id: "business-registration",
          title: "Business Registration Display",
          status: "missing",
          info: "Your website does not display required business registration information.",
        },
        {
          id: "legal-jurisdiction",
          title: "Legal Jurisdiction",
          status: "specified",
          info: "Your website properly specifies the legal jurisdiction.",
        },
        {
          id: "terms-service",
          title: "Terms of Service",
          status: "present",
          info: "Terms of service are present on your website.",
        },
      ],
    },
    {
      id: "email",
      title: "Email Marketing Compliance",
      score: 58,
      items: [
        {
          id: "unsubscribe",
          title: "Unsubscribe Option",
          status: "missing",
          info: "No unsubscribe option found in marketing emails.",
        },
        {
          id: "opt-out",
          title: "Opt-out Mechanism",
          status: "missing",
          info: "No opt-out mechanism found for email communications.",
        },
        {
          id: "email-disclaimer",
          title: "Commercial Email Disclaimer",
          status: "missing",
          info: "Missing required disclaimers in commercial emails.",
        },
      ],
    },
    {
      id: "ai",
      title: "AI and Technology Compliance",
      score: 58,
      items: [
        {
          id: "ai-disclosure",
          title: "Automated Content Disclosure",
          status: "missing",
          info: "No disclosure found for AI-generated content on your website.",
        },
        {
          id: "plagiarism",
          title: "Content Originality",
          status: "warning",
          info: "Potential plagiarism detected in 3 blog articles.",
        },
      ],
    },
    {
      id: "ada",
      title: "Accessibility Compliance",
      score: 58,
      items: [
        {
          id: "wcag-compliance",
          title: "WCAG 2.1 AA Compliance",
          status: "missing",
          info: "Multiple accessibility issues detected including missing alt text and poor contrast.",
        },
        {
          id: "keyboard-navigation",
          title: "Keyboard Navigation",
          status: "missing",
          info: "Website cannot be fully navigated using keyboard only.",
        },
      ],
    },
    {
      id: "advertising",
      title: "Legal Advertising Compliance",
      score: 58,
      items: [
        {
          id: "legal-advertising",
          title: "Legal Advertising Disclaimer",
          status: "missing",
          info: "Missing required advertising disclaimers per ABA Model Rules.",
        },
        {
          id: "no-guarantee",
          title: "No Guarantee Disclaimer",
          status: "missing",
          info: "No disclaimer about case results not guaranteeing future outcomes.",
        },
        {
          id: "results-disclaimer",
          title: "Results Disclaimer",
          status: "missing",
          info: "Missing disclaimer about past results not being indicative of future results.",
        },
      ],
    },
  ],
};
