import type { Publication } from './types';

// To add a paper: copy one object, edit the fields. Order doesn't matter: the list is sorted by date.
export const publications: Publication[] = [
  {
    title:
      'Design and outcome-model estimability in doubly robust survival analysis: a breast cancer reanalysis',
    authors: '**E. Krikun**, W. Fahmy, A. Alkhateeb',
    venue: 'medRxiv',
    status: 'preprint',
    firstAuthor: true,
    date: '2026-10-01',
    url: 'https://doi.org/10.64898/2026.09.29.26364358',
    doi: '10.64898/2026.09.29.26364358',
    summary:
      'Using TCGA breast cancer data on chemotherapy initiation and survival, compares weighted survival analysis, AIPW and Cox-based RMST estimation, and introduces a parameter-to-information diagnostic for settings where outcome-model estimation is fragile.',
    tags: ['Survival analysis', 'Causal inference', 'Breast cancer'],
  },
  {
    title:
      'When Prognostic Compatibility Does Not Guarantee Transfer Utility in Event-Limited Cross-Species Survival Modeling',
    authors: '**E. Krikun**, A. Alkhateeb',
    venue: 'bioRxiv',
    status: 'preprint',
    firstAuthor: true,
    date: '2026-09-24',
    url: 'https://doi.org/10.64898/2026.09.17.752483',
    doi: '10.64898/2026.09.17.752483',
    summary:
      'Can canine osteosarcoma data help predict outcomes in human patients? Across 180 scenarios and 21,600 simulation runs, shows that recognising prognostic compatibility does not reliably predict whether transfer will help or cause negative transfer.',
    tags: ['Transfer learning', 'Osteosarcoma', 'Comparative oncology'],
  },
  {
    title:
      'External Evaluation of Multi-Omics Prognostic Models Across TCGA-BRCA and METABRIC: Transportability, Stability, and Incremental Performance',
    authors: '**E. Krikun**, A. Alkhateeb',
    venue: 'bioRxiv',
    status: 'preprint',
    firstAuthor: true,
    date: '2026-09-24',
    url: 'https://doi.org/10.64898/2026.09.18.752709',
    doi: '10.64898/2026.09.18.752709',
    tags: ['Multi-omics', 'External validation', 'Breast cancer'],
  },
  {
    title: 'Cross-Cohort Reliability and Failure Attribution in AI-Based Breast DCE-MRI Tumor Segmentation',
    authors: '**E. Krikun**, A. Alkhateeb',
    venue: 'European Journal of Radiology Artificial Intelligence (Elsevier)',
    status: 'journal',
    date: '2026-09-23',
    url: 'https://doi.org/10.1016/j.ejrai.2026.100132',
    doi: '10.1016/j.ejrai.2026.100132',
    summary:
      'An nnU-Net trained on 982 I-SPY2 cases (internal Dice 0.786) drops to 0.547 on 526 leakage-controlled external cases. Largest-connected-component postprocessing improves the average yet completely loses the tumor in 8.2% of cases, showing that strong averages can hide patient-level failures.',
    tags: ['Medical imaging', 'Segmentation', 'Generalisation'],
    links: [{ label: 'Code', url: 'https://github.com/Helen2813/MRI-Project' }],
    firstAuthor: true,
  },
  {
    title:
      'A Markov Blanket-based framework for dependency-aware feature selection in multimodal breast cancer data',
    authors: '**E. Krikun**, A. Alkhateeb',
    venue: 'Network Modeling Analysis in Health Informatics and Bioinformatics 15 (1), 158 (Springer)',
    status: 'journal',
    date: '2026-07-13',
    url: 'https://link.springer.com/article/10.1007/s13721-026-00832-1',
    doi: '10.1007/s13721-026-00832-1',
    summary:
      'Combines clinical and omics variables to select compact, interpretable feature sets while accounting for dependencies between modalities, supporting more reliable biomarker discovery and outcome modeling.',
    tags: ['Feature selection', 'Multi-omics', 'Causal discovery'],
    firstAuthor: true,
  },
];
