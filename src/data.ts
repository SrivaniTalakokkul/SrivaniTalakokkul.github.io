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
  type: 'Journal article' | 'Conference paper' | 'Preprint'
  date: string
  url?: string
  summary: string
  contribution?: string
}

export const experience: Experience[] = [
  {
    role: 'Program Manager',
    organization: 'Yale University · Emergency Medicine · Fodeh Lab',
    period: 'Nov 2024 — Present',
    location: 'New Haven, Connecticut',
    summary: 'Built and now leads a 10-person research team from the ground up, sustaining a $4.5M portfolio spanning an NIH R01 (EPPC) and a PCORI-funded study (PVminer) across two consecutive years of 100% on-time sponsor reporting.',
    highlights: [
      'Steers grant and financial operations across the EPPC and PVminer initiatives totaling $4.5M, building budgets, tracking expenses, and reconciling accounts.',
      'Assembles and delivers 8 formal sponsor reports annually, including NIH RPPRs and semiannual PCORI progress reports, hitting every submission deadline on time.',
      'Coordinates and manages Outlook calendars for the Principal Investigator and postdoctoral researchers, keeping recurring stakeholder and team meetings conflict-free.',
      'Recruited, onboarded, and mentors a core research team of 10 built from the ground up — seven postdoctoral researchers, one research associate, one PhD rotation student, and one intern.',
      'Drafted the IRB-aligned informed consent form and compiled IRB submission materials, including a Qualtrics survey, supporting protocol approval for the EPPC R01 study.',
      'Personally secured informed consent from and enrolled 40 patients within 3–4 weeks for the EPPC R01 study, closing the consent-and-recruitment gap on the research team.',
      'Facilitates 50+ recurring stakeholder meetings over 18 months with a 9-member Community Advisory Board, recording and distributing meeting minutes, and serves as central liaison across Yale, Cleveland Clinic, VHA, and TXACC.',
      'Spearheaded 70–75% of the annotation underpinning the EPPC project, manually annotating 3,500+ patient messages (~10,000 sentences) into structured, analysis-ready data.',
      'Authored the EPPC annotation guidelines and codebook grounded in the Roter Interaction Analysis System (RIAS), directly enabling the benchmark reported in EPPCMinerBen.',
      'Designed the annotation framework for the PVminer grant, feeding the tool development behind the PVminer and PVminerLLM publications.',
      'Elevated annotation and documentation workflows by 25–30% and prepared structured datasets underpinning 7 peer-reviewed and preprint publications in 2026.'
    ]
  },
  {
    role: 'Office Administrator',
    organization: 'Quality Staffing Home Care Inc.',
    period: 'Oct 2024 — Jan 2025',
    location: 'United States',
    summary: 'Ran core office operations, payroll, licensing, and records for a home-care agency.',
    highlights: [
      'Ran core office operations using SharePoint and MS Forms to schedule appointments, coordinate calendars, and manage correspondence for leadership.',
      'Processed biweekly payroll for 50+ employees across administrative and caregiver departments, delivering on-time pay across 10 consecutive pay cycles.',
      'Oversaw licensing and grant applications for the agency and its training school, maintaining full regulatory compliance.',
      'Maintained client and employee records in AxisCare and Alora, keeping records continuously audit-ready.'
    ]
  },
  {
    role: 'Health and Recreation Service Administrator',
    organization: 'David A. Beckerman Recreation Center',
    period: 'Mar 2023 — May 2024',
    location: 'West Haven, Connecticut',
    summary: 'Managed front-line service and facility operations in a university recreation environment.',
    highlights: [
      'Served as principal liaison for members, guests, and visitors, boosting customer satisfaction by 25%.',
      'Directed facility operations, fitness areas, and event setups with zero operational errors.',
      'Hired and trained new staff, lifting team efficiency by 30%.',
      'Awarded Employee of the Year (2024) for leadership and commitment to community health initiatives.'
    ]
  },
  {
    role: 'Public Health Research Intern',
    organization: 'Connecticut State Department of Public Health · Office of Health Equity',
    period: 'Jun 2023 — Aug 2023',
    location: 'Hartford, Connecticut',
    summary: 'Worked on demographic data standards and public-facing communication for the Office of Health Equity.',
    highlights: [
      'Revamped the Office of Health Equity website, improving communication of its mission and resources.',
      'Assessed agency-wide compliance with race, ethnicity, and language (REL) standards under Public Act 21-35.',
      'Established standardized data collection procedures and generated MS Forms-based assessment tracking.'
    ]
  },
  {
    role: 'Quality and Compliance Analyst',
    organization: 'Vasta Bioinformatics Pvt. Ltd.',
    period: 'Dec 2021 — Aug 2022',
    location: 'India',
    summary: 'Audited gastrointestinal cancer research data abstraction work conducted with Dana-Farber Cancer Institute.',
    highlights: [
      'Audited GI cancer research cases using program-tracking tools and Excel, ensuring accurate data collection and improved data quality.',
      'Delivered actionable feedback to abstractors within 24 hours and rolled out corrective action plans and retraining sessions.'
    ]
  },
  {
    role: 'Public Health Physician',
    organization: 'Nesco Jumbo Covid Center',
    period: 'Aug 2020 — Dec 2021',
    location: 'Mumbai, India',
    summary: 'Delivered direct care during the COVID-19 response in a high-acuity public-health setting.',
    highlights: [
      'Conducted 100+ patient rounds, monitoring vitals, radiography, EKGs, and laboratory results.',
      'Performed emergency procedures, including CPR and catheterization, and administered medications under HIPAA-compliant protocols and SOPs.'
    ]
  },
  {
    role: 'Clinical Operations Lead',
    organization: 'Inventurus Knowledge Solutions Pvt. Ltd. (IKS Care, aligned with Advocate Health)',
    period: 'Apr 2019 — Aug 2020',
    location: 'Navi Mumbai, India',
    summary: 'Embedded as lead medical scribe across five specialties within Advocate Health.',
    highlights: [
      'Embedded as lead medical scribe for 10+ physicians across Internal Medicine, Family Medicine, Urgent Care, Neurology, and Endocrinology, including dedicated scribing for the health system\'s chief physician.',
      'Sustained 100% documentation precision across all scribed clinical encounters with a turnaround time under 5 minutes per note.',
      'Built and delivered training sessions for new team members, cutting onboarding time by 30% and lifting customer satisfaction by 20%.'
    ]
  },
  {
    role: 'Clinical Intern & Health Policy Trainee',
    organization: "St. George's Hospital & Podar Hospital",
    period: 'Mar 2018 — Mar 2019',
    location: 'Mumbai, India',
    summary: 'Completed multidisciplinary clinical rotations while contributing to patient-care protocols.',
    highlights: [
      'Handled outpatient departments managing 80–100 daily patient inflow and emergency casualties, performing suturing, wound dressing, and minor-fracture care.',
      'Rotated through clinical rounds for 250+ hospitalized patients across Medicine, Surgery, Ob-Gyn, Ophthalmology, Pediatrics, and Panchakarma.'
    ]
  }
]

export const publications: Publication[] = [
  {
    title: 'EPPCMinerBen: A novel benchmark for evaluating large language models on electronic patient–provider communication via the patient portal',
    type: 'Conference paper',
    date: 'AMIA (American Medical Informatics Association) · 2026',
    summary: 'The first benchmark purpose-built to evaluate large language models on real electronic patient–provider communication via the patient portal, built on the RIAS-based annotation codebook and manual authored for this project.',
    contribution: 'Writing — original draft; data curation.'
  },
  {
    title: 'TAB-PO: Preference Optimization with a Token-Level Adaptive Barrier for Token-Critical Structured Generation',
    type: 'Preprint',
    date: 'arXiv · Mar 2026',
    url: 'https://arxiv.org/abs/2603.00025',
    summary: 'Proposes a token-level adaptive barrier for preference optimization — a new mechanism for controlling structured generation at the points where token choice is most critical.'
  },
  {
    title: 'STaR-DRO: Stateful Tsallis Reweighting for Group-Robust Structured Prediction',
    type: 'Preprint',
    date: 'arXiv · Apr 2026',
    url: 'https://arxiv.org/abs/2604.09737',
    summary: 'Introduces stateful Tsallis reweighting, a novel distributionally robust training method for group-robust structured prediction.'
  },
  {
    title: 'EPPC-OASIS: Ontology-Aware Adaptation and Structured Inference Refinement for Electronic Patient-Provider Communication Mining',
    type: 'Preprint',
    date: 'arXiv · May 2026',
    url: 'https://arxiv.org/abs/2605.24172',
    summary: 'An ontology-aware adaptation and structured inference refinement framework for mining electronic patient-provider communication in secure messages.',
    contribution: 'Data curation; writing — review and editing.'
  },
  {
    title: 'PVminer: A Domain-Specific Tool to Detect the Patient Voice in Patient Generated Data',
    type: 'Journal article',
    date: 'Scientific Reports (Springer Nature) · Accepted 2026',
    url: 'https://arxiv.org/abs/2602.21165',
    summary: 'A new domain-specific tool for detecting patient voice in patient-generated data, grounded in the annotation framework built to operationalize patient voice and social barriers in healthcare.'
  },
  {
    title: 'PVminerLLM: Structured Extraction of Patient Voice from Patient-Generated Text using Large Language Models',
    type: 'Journal article',
    date: 'Nature Digital Public Health · Accepted 2026',
    url: 'https://arxiv.org/abs/2603.05776',
    summary: 'A structured extraction approach for pulling patient voice from patient-generated text using large language models.'
  },
  {
    title: 'PVminerLLM2: Improving Structured Extraction of Patient Voice via Preference Optimization',
    type: 'Preprint',
    date: 'arXiv · Jun 2026',
    url: 'https://arxiv.org/abs/2606.16074',
    summary: 'Extends PVminerLLM with preference optimization to further improve structured extraction accuracy.'
  },
]

export const skillGroups = [
  { title: 'Team building & development', items: ['End-to-end team construction', 'Onboarding architecture', 'Performance coaching', 'Succession-ready training design', 'Cross-functional conflict resolution'] },
  { title: 'Research program execution', items: ['Multi-site protocol implementation', 'Annotation methodology design', 'Participant enrollment strategy', 'SOP authorship', 'Workstream prioritization under competing deadlines'] },
  { title: 'Regulatory & compliance leadership', items: ['IRB protocol development', 'Informed consent design', 'HIPAA-governed data handling', 'Audit preparation', 'Corrective action design'] },
  { title: 'Grant & fiscal oversight', items: ['Multi-award budget architecture', 'Federal sponsor reporting (NIH/PCORI)', 'Subaward governance', 'Procurement & vendor accountability'] },
  { title: 'Institutional & external governance', items: ['Advisory board facilitation', 'Multi-institutional partnership management', 'Manuscript & publication pipeline support'] },
  { title: 'Data systems & analytics', items: ['REDCap', 'Epic', 'OnCore', 'Power BI', 'R', 'Clinical data annotation methodology', 'EHR documentation standards'] }
]
