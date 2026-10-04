export type Job = {
  role: string;
  company: string;
  type?: string;
  period: string;
  duration?: string;
  location?: string;
  summary?: string;
  highlights?: string[];
  open?: boolean;
};

export const experience: Job[] = [
  {
    role: "Sales Executive (freelance)",
    company: "Pashov Audits Group",
    period: "Now",
    summary: "Owning the full sales cycle, from prospecting to closing.",
  },
  {
    role: "Business Developer Lead & Account Manager",
    company: "Request Network",
    type: "Full-time",
    period: "Apr 2024 to Apr 2026",
    duration: "2 yrs 1 mo",
    location: "Porto, Portugal · Remote",
    open: true,
    highlights: [
      "Led customer discovery with wallets/infra/protocol teams to validate pain points and urgency.",
      "Closed multiple mid-market ecosystem integrations across payments, invoicing, and checkout.",
      "Owned sales & GTM strategy execution (ICP definition, partner prioritization, outreach motion) informed by discovery findings.",
      "Owned a full-cycle sales pipeline of 100+ qualified accounts, consistently maintained at 3 to 5x target coverage, targeting $1M+ in monthly processing volume.",
      "Aligned partner requirements with the SDK/API by coordinating technical discovery with product and engineering.",
      "Built and leveraged a strong Telegram-based network of founders and operators.",
      "Attended 20+ events IRL and collected 500+ relevant contacts from fintech/igaming/banking/hackathon providers/stablecoin payment apps/privacy/security/VC/AI tech.",
      "Owned post-integration customer conversations focused on activation, transaction growth, and commercial expansion.",
      "Monitored account usage data to identify high-volume opportunities and led pricing discussions for customers exceeding expected transaction levels.",
      "Partnered with technical teams and client stakeholders to support integration progress and unblock onboarding.",
      "Tailored sales approach by account maturity, using more direct motions for smaller customers and more consultative discovery for complex opportunities.",
    ],
  },
  {
    role: "Business Development Manager",
    company: "Coinshift",
    type: "Full-time",
    period: "Aug 2022 to Feb 2024",
    duration: "1 yr 7 mos",
    location: "Porto, Portugal · Remote",
    highlights: [
      "Analysed user behaviour across onboarding, treasury usage, and transaction flows to identify drop-offs and expansion opportunities.",
      "Supported GTM execution for the launch of a new blockchain network by restructuring pipelines and account fields to track high-intent accounts.",
      "Led the implementation of the HubSpot Sales & Marketing Hub for CRM automation, reporting, and KPI tracking, improving BD efficiency.",
      "Partnered with product and engineering teams to improve user flows based on customer feedback and observed usage patterns.",
      "Supervised two business development interns, creating clear workflows for prospect research, CRM updates, and outreach follow-ups.",
      "Conducted market research to identify potential customers in the crypto payments and trading space, feeding insights into the go-to-market strategy, using Dune Analytics.",
      "Collaborated with marketing to produce long-form content (blogs, outreach scripts, community updates) using AI tools such as ChatGPT.",
      "Helped define success metrics for new features and monitored adoption post-launch.",
      "Represented Coinshift in Ethereum events.",
    ],
  },
  {
    role: "Business Analyst",
    company: "Sonae Fashion",
    type: "Full-time",
    period: "Nov 2020 to Mar 2022",
    duration: "1 yr 5 mos",
    location: "Maia, Porto, Portugal",
    highlights: [
      "Lead developer of Excel data models for statistical analysis and forecasting on Sonae's containers supply chain.",
      "Main accounting and financial reporter on monthly transportations costs.",
      "Provided superior visibility of product metrics and KPIs on business intelligence dashboards for top management to accompany all stages of the supply flow using Microsoft Power BI.",
      "Main reporter of inbound materials on the supply chain area.",
      "Facilitator of meetings with the commercial Spanish team to ensure their needs are met through quantitative analysis on the resource usage of the main distribution centers.",
      "Continuous improvement specialist, having automated existing processes and reports, with time savings of one hour per day.",
    ],
  },
  {
    role: "Junior Industrial Engineer",
    company: "Bosch Security and Safety Systems",
    type: "Internship",
    period: "Jul 2019 to Jul 2020",
    duration: "1 yr 1 mo",
    location: "Ovar, Aveiro, Portugal",
    highlights: [
      "Developed advanced Excel reports to be used by the Logistics and Procurement Departments. Savings of up to two hours of daily work.",
      "Package improvement lead through collaboration with the Quality Department with positive impact on costs and better inventory area occupation.",
      "Kanban changes through deep field analysis. Improved efficiency of the production lines and of space management required for raw materials.",
      "Developed and maintained an Access database that held information about transportations in the logistics department.",
    ],
  },
  {
    role: "Junior Process Engineer (Master Thesis Project), 17/20",
    company: "Tintas CIN",
    type: "Internship",
    period: "Aug 2018 to Feb 2019",
    duration: "7 mos",
    location: "Maia",
    highlights: [
      "Took leadership for a project involving data manipulation using R and Minitab. Weekly meetings to identify, monitor and display issues. Responsible for a financial revenue of 4.8% of the fixed manufacturing costs.",
      "Creation of weekly graphical reports, which supported top decision making by enabling KPI data visualization and understanding.",
    ],
  },
];
