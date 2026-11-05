import type { Education, Experience, NewsItem } from './types';

export const experience: Experience[] = [
  {
    role: 'Research Software Developer',
    org: 'The University of British Columbia',
    period: 'Jul 2026–Present',
    location: 'Vancouver, BC · Remote',
    kind: 'research',
    description:
      'Research software for processing neural signal data, focused on reliable data handling, reproducibility and research usability; intended for downstream licensing. Next phase extends the work toward single-cell computational workflows.',
    stack: ['Python', 'Research software'],
  },
  {
    role: 'Graduate Researcher (M.Sc.)',
    org: 'Lakehead University',
    period: 'Sep 2024–May 2026',
    location: 'Ontario, Canada',
    kind: 'research',
    description:
      'Thesis on causal discovery and treatment-effect modeling in breast cancer. Survival, causal and deep learning models on omics, clinical and MRI data, run on Compute Canada HPC.',
    stack: ['Python', 'PyTorch', 'nnU-Net', 'HPC'],
  },
  {
    role: 'Senior Client App Developer',
    org: 'Smartu Labs (Tutu.ru)',
    period: 'Apr 2023–Aug 2024',
    location: 'Remote',
    kind: 'engineering',
    description:
      'Large-scale React and TypeScript applications for a major travel platform: modular architecture, performance and user-facing reliability.',
    stack: ['React', 'TypeScript', 'Redux'],
  },
  {
    role: 'Frontend Developer',
    org: 'Quantori',
    period: 'May 2022–Sep 2022',
    location: 'United States · Contract',
    kind: 'engineering',
    description:
      'Web platforms for clinical test processing and biomedical data management for a US healthcare company; translating scientist-facing workflows into reliable UIs.',
    stack: ['React', 'Next.js', 'Zustand'],
  },
  {
    role: 'Senior Programmer',
    org: 'UCHi.RU',
    period: 'Dec 2020–Mar 2022',
    location: 'Moscow',
    kind: 'engineering',
    description: 'Production educational web apps and interactive learning games used by schoolchildren at scale.',
    stack: ['React', 'MobX', 'TypeScript'],
  },
  {
    role: 'React Developer',
    org: 'Bell Integrator',
    period: 'Apr 2020–Nov 2020',
    location: 'Moscow',
    kind: 'engineering',
    description: 'Front-end modules and analytics dashboards for a banking client.',
    stack: ['React', 'TypeScript', 'MobX'],
  },
];

export const education: Education[] = [
  {
    degree: 'M.Sc. in Computer Science, Artificial Intelligence',
    school: 'Lakehead University',
    period: '2024–2026',
    note: 'Thesis: Causal Discovery and Treatment Effect Modeling in Breast Cancer',
  },
  {
    degree: 'B.Sc. in Applied Informatics',
    school: 'Moscow Witte University',
    period: '2019–2022',
  },
];

// Domain coursework (biology side of the CS → computational biology move).
export const certifications: { title: string; issuer: string; year: number }[] = [
  { title: "Researcher's Guide to Omic Fundamentals", issuer: 'Fred Hutchinson Cancer Center', year: 2025 },
  { title: 'Cancer Biology', issuer: 'Johns Hopkins University', year: 2025 },
  { title: 'Introduction to Breast Cancer', issuer: 'Yale University', year: 2025 },
  { title: 'Immunology: Immune Failures and Cancer Immunology', issuer: 'Imperial College London', year: 2025 },
  { title: 'Epigenetic Control of Gene Expression', issuer: 'University of Melbourne', year: 2025 },
  { title: 'Introduction to Genomic Technologies', issuer: 'Johns Hopkins University', year: 2025 },
  { title: 'Human Anatomy and Medical Terminology Fundamentals', issuer: 'MedCerts', year: 2025 },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: 'Methods',
    items: ['Survival analysis', 'Causal inference', 'Deep learning', 'Transfer learning', 'Feature selection'],
  },
  {
    group: 'Domains',
    items: ['Computational oncology', 'Bioinformatics', 'Medical imaging', 'Transcriptomics', 'Neural signals'],
  },
  {
    group: 'Tools',
    items: ['Python', 'PyTorch', 'nnU-Net', 'scikit-learn', 'Git', 'Docker', 'HPC / Slurm'],
  },
  { group: 'Engineering', items: ['TypeScript', 'React', 'Testing', 'CI/CD', 'Code review'] },
  { group: 'Languages', items: ['English', 'Russian', 'French'] },
];

// Newest first.
export const news: NewsItem[] = [
  { date: '2026-10-01', text: 'New preprint on doubly robust survival analysis in breast cancer (medRxiv).', url: 'https://doi.org/10.64898/2026.09.29.26364358' },
  { date: '2026-09-23', text: 'Paper on cross-cohort reliability of breast DCE-MRI segmentation published in EJR AI.', url: 'https://doi.org/10.1016/j.ejrai.2026.100132' },
  { date: '2026-07-13', text: 'First paper published in Network Modeling Analysis in Health Informatics and Bioinformatics.', url: 'https://link.springer.com/article/10.1007/s13721-026-00832-1' },
  { date: '2026-07-01', text: 'Joined UBC as a Research Software Developer.' },
  { date: '2026-05-01', text: 'Completed M.Sc. in Computer Science (AI specialization) at Lakehead University.' },
  { date: '2026-04-28', text: 'Defended M.Sc. thesis on causal discovery and treatment effect modeling in breast cancer.' },
];
