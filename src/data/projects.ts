export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: 'Swiftinstall',
    description: 'Mi primer adentramiento en el mundo de desarrollo para Linux. Actualmente, Swiftinstall se ha convertido en un todo en uno para la gestión de aplicaciones de Linux',
    image: 'https://hosted.inled.es/swiftinstallbannercolor.png',
    technologies: ['Python', 'GTK', 'CSS'],
    demoUrl: 'https://apps.inled.es/app/swiftinstall/',
    githubUrl: 'https://github.com/InledGroup/swiftinstall',
    featured: true
  },
  {
    title: 'Ai Cloud',
    description: 'Chatbots de IA para sitios web gratuitos e ilimitados.',
    image: 'https://hosted.inled.es/aicloud.png',
    technologies: ['Astro', 'JS', 'CSS', 'WebLLM', 'WebGPU', 'WASM', 'WLlama', 'Vercel', 'Supabase', 'Supabase Auth', 'Google Cloud'],
    demoUrl: 'https://aicloud.inled.es',
    githubUrl: null,
    featured: true
  },
  {
    title: 'Edge AI',
    description: 'ChatGPT + Perplexity + NotebookLM pero local, sin instalar nada, ilimitado y privado.',
    image: 'https://hosted.inled.es/edgeai.png',
    technologies: ['Astro', 'JS', 'CSS', 'WebLLM', 'WebGPU', 'WASM', 'WLlama', 'Vercel'],
    demoUrl: 'https://edge.inled.es',
    githubUrl: 'https://github.com/InledGroup/Edge.AI',
    featured: true
  },
  {
    title: 'Devreka',
    description: 'Genera ideas de negocio para devs con IA. Privado, client-side, personalizado.',
    image: 'https://hosted.inled.es/devreka.png',
    technologies: ['HTML', 'CSS', 'JS', 'WebGPU', 'PDFjs'],
    demoUrl: 'https://devreka.inled.es',
    githubUrl: 'https://github.com/InledGroup/devreka',
    featured: true
  },
  {
    title: 'InSuite',
    description: 'Suite de soluciones de ofimática en línea, privadas y seguras con Inled AI (cleint-side).',
    image: 'https://hosted.inled.es/insuite.svg',
    technologies: ['Astro', 'CSS', 'JS', 'Quill', 'Marked', 'PDFjs', 'MathJax'],
    demoUrl: 'https://insuite.inled.es',
    githubUrl: 'https://github.com/InledGroup/insuite',
    featured: true
  },
  {
    title: 'Matrix WWW',
    description: 'Simulaciones de Matrix sin tomar la pastilla roja.',
    image: 'https://placehold.co/600x400/1a1a1a/ffffff?text=Matrix+WWW',
    technologies: ['HTML', 'CSS', 'JS', 'WebLLM'],
    demoUrl: 'https://matrix-www.inled.es',
    githubUrl: 'https://github.com/InledGroup/matrixwww',
    featured: true
  }
];

export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.featured);
}

export function getAllProjects(): Project[] {
  return projects;
}
