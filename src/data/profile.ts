export const profile = {
  name: 'Elena Krikun',
  headline: 'Computational Biologist · ML for Cancer Research',
  tagline:
    'I build machine learning and statistical models for oncology data and write research code that other people can actually reproduce.',
  location: 'Vancouver, BC, Canada',
  affiliation: 'The University of British Columbia',

  about: [
    "I'm a researcher working at the intersection of biology and machine learning. I hold an M.Sc. in Computer Science with an AI specialization from Lakehead University, and before that I spent about four years building production web applications in React and TypeScript.",
    'Most of my recent work is in computational oncology: gene expression and clinical data from breast cancer and osteosarcoma cohorts, survival and causal models, and deep learning segmentation of breast MRI. I run experiments on Compute Canada HPC clusters and pay close attention to validation and reproducibility.',
    'Right now I develop research software for processing neural signal data at the University of British Columbia, bringing engineering habits like testing, code review, Git and Docker into science.',
  ],

  interests: [
    'Survival analysis & causal inference',
    'Medical imaging AI',
    'Multi-omics & biomarker discovery',
    'Transfer learning & external validation',
    'Reproducible research software',
  ],

  openTo:
    'Open to bioinformatics, computational biology, biomedical data science and research software roles in British Columbia or remote across Canada.',

  // Leave a field empty ('') to hide its link.
  links: {
    email: '', // TODO: add contact email
    linkedin: 'https://www.linkedin.com/in/ekrikun/',
    github: 'https://github.com/Helen2813',
    scholar: 'https://scholar.google.ca/citations?user=gGXEhwYAAAAJ',
    orcid: 'https://orcid.org/0009-0004-0047-7359',
    cv: '', // drop the PDF into /public/cv.pdf, then set this to 'cv.pdf'
  },
};
