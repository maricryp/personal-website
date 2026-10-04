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
      "Closed multiple mid-market ecosystem integrations across payments, invoicing, and checkout.",
      "Partnered with technical teams and client stakeholders to support integration progress and unblock onboarding.",
      "Aligned partner requirements with the SDK/API by coordinating technical discovery with product and engineering.",
      "Owned post-integration customer conversations focused on activation, transaction growth, and commercial expansion.",
      "Owned a full-cycle sales pipeline of 100+ qualified accounts, consistently maintained at 3 to 5x target coverage, targeting $1M+ in monthly processing volume.",
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
      "Led the implementation of the HubSpot Sales & Marketing Hub for CRM automation, reporting, and KPI tracking, improving BD efficiency.",
      "Supported GTM execution for the launch of a new blockchain network by restructuring pipelines and account fields to track high-intent accounts.",
      "Partnered with product and engineering teams to improve user flows based on customer feedback and observed usage patterns.",
      "Supervised two business development interns, creating clear workflows for prospect research, CRM updates, and outreach follow-ups.",
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
      "Provided superior visibility of product metrics and KPIs on business intelligence dashboards for top management to accompany all stages of the supply flow using Microsoft Power BI.",
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
