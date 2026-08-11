export type Experience = {
  role: string
  organization: string
  period: string
  location: string
  summary: string
  highlights: string[]
}

export type Publication = {
  title: string
  type: 'Journal article' | 'Preprint' | 'Conference abstract'
  date: string
  url: string
  summary: string
  contribution?: string
}

export const experience: Experience[] = [
  {
    role: 'Program Administrator',
    organization: 'Yale University · Emergency Medicine · Fodeh Lab',
    period: 'Nov 2024 — Present',
    location: 'New Haven, Connecticut',
    summary: 'Supporting the operations and data workflows behind interdisciplinary clinical NLP research.',
    highlights: [
      'Streamlined annotation workflows and metadata documentation, improving efficiency by 20–30%.',
      'Coordinates preprocessing, organization, reporting, finances, scheduling, reimbursements, and stakeholder communication.',
      'Supports postdoctoral researchers, research assistants, and interns across timelines and deliverables.'
    ]
  },
  {
    role: 'Administrative Assistant',
    organization: 'Quality Staffing Home Care Agency',
    period: 'Oct 2024 — Present',
    location: 'United States',
    summary: 'Providing administrative support across records, payroll, scheduling, and communications for a home-care agency.',
    highlights: [
      'Processes bi-weekly payroll for more than 50 administrative and caregiver employees.',
      'Maintains client and employee records in AxisCare and Alora and coordinates credentialing requirements.',
      'Creates business collateral and supports scheduling, correspondence, and document preparation.'
    ]
  },
  {
    role: 'Health & Recreation Service Administrator',
    organization: 'David A. Beckerman Recreation Center',
    period: 'Mar 2023 — May 2024',
    location: 'West Haven, Connecticut',
    summary: 'Managed front-line service and facility operations in a university recreation environment.',
    highlights: [
      'Raised customer satisfaction by 25% through responsive issue resolution.',
      'Recruited and trained staff, improving team efficiency by 30%.',
      'Named Employee of the Year in 2024 for leadership and community commitment.'
    ]
  },
  {
    role: 'Public Health Research Intern',
    organization: 'Connecticut Department of Public Health · Office of Health Equity',
    period: 'Jun 2023 — Aug 2023',
    location: 'Hartford, Connecticut',
    summary: 'Worked on demographic data standards and public-facing communication for the Office of Health Equity.',
    highlights: [
      'Assessed agency-wide compliance with race, ethnicity, and language standards under Public Act 21-35.',
      'Developed standardized collection procedures and tracked assessments through Microsoft Forms.',
      'Helped revamp the Office of Health Equity website and clarify access to its mission and resources.'
    ]
  },
  {
    role: 'Quality & Compliance Analyst',
    organization: 'Vasta Bioinformatics Pvt. Ltd.',
    period: 'Dec 2021 — Aug 2022',
    location: 'India',
    summary: 'Audited gastrointestinal cancer research data abstraction work conducted with Dana-Farber Cancer Institute.',
    highlights: [
      'Audited clinical research cases for protocol adherence and data accuracy.',
      'Returned actionable feedback within 24 hours and implemented corrective training plans.'
    ]
  },
  {
    role: 'Public Health Physician',
    organization: 'NESCO Jumbo COVID Center',
    period: 'Aug 2020 — Dec 2021',
    location: 'Mumbai, India',
    summary: 'Delivered direct care during the COVID-19 response in a high-acuity public-health setting.',
    highlights: [
      'Monitored vitals, radiography, EKGs, and laboratory results during patient rounds.',
      'Administered medications, supported emergency procedures, and maintained precise clinical records.'
    ]
  },
  {
    role: 'Clinical Operations Lead',
    organization: 'Inventurus Knowledge Solutions Pvt. Ltd.',
    period: 'Apr 2019 — Aug 2020',
    location: 'Navi Mumbai, India',
    summary: 'Combined EHR documentation expertise with team operations and training.',
    highlights: [
      'Translated physician–patient interactions into accurate electronic health records.',
      'Built onboarding that reduced training time by 30% and improved customer satisfaction by 20%.'
    ]
  },
  {
    role: 'Integrative Health Consultant',
    organization: 'Jyovis Care Pvt. Ltd.',
    period: 'Dec 2018 — Mar 2019',
    location: 'India',
    summary: 'Integrated Ayurvedic and modern health practices in individualized wellness consultations.',
    highlights: ['Guided patients on sustainable lifestyle changes while maintaining therapy health-and-safety standards.']
  },
  {
    role: 'Clinical Intern & Health Policy Trainee',
    organization: "St. George's Hospital & Podar Hospital",
    period: 'Mar 2018 — Mar 2019',
    location: 'Mumbai, India',
    summary: 'Completed multidisciplinary clinical rotations while contributing to patient-care protocols.',
    highlights: ['Supported emergency care, wound management, minor fractures, and rotations across medicine, surgery, pediatrics, ophthalmology, obstetrics and gynecology, and Panchakarma.']
  }
]

export const publications: Publication[] = [
  {
    title: 'EPPCMinerBen: A novel benchmark for evaluating large language models on electronic patient–provider communication via the patient portal',
    type: 'Journal article',
    date: 'Artificial Intelligence in Medicine · Aug 2026',
    url: 'https://doi.org/10.1016/j.artmed.2026.103429',
    summary: 'A clinically grounded benchmark for hierarchical classification and evidence extraction from secure patient–provider messages.',
    contribution: 'Writing — original draft; data curation.'
  },
  {
    title: 'PVminerLLM2: Improving Structured Extraction of Patient Voice via Preference Optimization',
    type: 'Preprint',
    date: 'arXiv · Jun 2026',
    url: 'https://arxiv.org/abs/2606.16074',
    summary: 'Preference-optimized language models designed to improve rare, fine-grained structured patient-voice extraction.'
  },
  {
    title: 'EPPC-OASIS: Ontology-Aware Adaptation and Structured Inference Refinement for Electronic Patient-Provider Communication Mining',
    type: 'Preprint',
    date: 'arXiv · May 2026',
    url: 'https://arxiv.org/abs/2605.24172',
    summary: 'Ontology-aware model adaptation and inference refinement for extracting grounded communication patterns from secure messages.',
    contribution: 'Data curation; writing — review and editing.'
  },
  {
    title: 'STaR-DRO: Stateful Tsallis Reweighting for Group-Robust Structured Prediction',
    type: 'Preprint',
    date: 'arXiv · Apr 2026',
    url: 'https://arxiv.org/abs/2604.09737',
    summary: 'A group-robust optimization framework for reliable ontology-constrained prediction in difficult clinical communication categories.'
  },
  {
    title: 'PVminerLLM: Structured Extraction of Patient Voice from Patient-Generated Text using Large Language Models',
    type: 'Preprint',
    date: 'arXiv · Mar 2026',
    url: 'https://arxiv.org/abs/2603.05776',
    summary: 'A benchmark and supervised language-model approach for extracting lived experience, social context, and engagement signals at scale.'
  },
  {
    title: 'TAB-PO: Preference Optimization with a Token-Level Adaptive Barrier for Token-Critical Structured Generation',
    type: 'Preprint',
    date: 'arXiv · Mar 2026',
    url: 'https://arxiv.org/abs/2603.00025',
    summary: 'A preference-optimization method that protects important schema tokens in structured clinical and scientific extraction.'
  },
  {
    title: 'PVminer: A Domain-Specific Tool to Detect the Patient Voice in Patient Generated Data',
    type: 'Preprint',
    date: 'arXiv · Feb 2026',
    url: 'https://arxiv.org/abs/2602.21165',
    summary: 'A domain-adapted NLP framework that structures patient voice across communication and social-determinant categories.'
  },
  {
    title: 'EPPCMinerBen: A Novel Benchmark for Evaluating Large Language Models in Cancer Care',
    type: 'Conference abstract',
    date: 'AMIA Annual Symposium · Nov 2025',
    url: 'https://amia.secure-platform.com/symposium/gallery/rounds/82021/details/19530',
    summary: 'A coauthored podium abstract on analysis of patient–provider communication in cancer-care portal messages.'
  }
]

export const skillGroups = [
  { title: 'Research & analytics', items: ['Epidemiology', 'Statistical analysis', 'Data visualization', 'Data collection', 'Quality control', 'Research documentation'] },
  { title: 'Health technology', items: ['R', 'Power BI', 'REDCap', 'EPIC', 'EHR management', 'Microsoft Forms', 'SharePoint'] },
  { title: 'Program operations', items: ['Program management', 'Workflow optimization', 'Team leadership', 'Stakeholder coordination', 'Payroll administration', 'HIPAA compliance'] },
  { title: 'Clinical practice', items: ['Vital-sign monitoring', 'Blood sample collection', 'IV administration', 'Cannula insertion', 'Emergency procedures', 'Clinical documentation'] }
]
