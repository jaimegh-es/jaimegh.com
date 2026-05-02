export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export async function getAllProjects(): Promise<Project[]> {
  try {
    const response = await fetch('https://inled.es/projects.json');
    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }
    const data = await response.json();
    
    return data.map((item: any) => {
      const isGithub = item.link.includes('github.com');
      return {
        title: item.name,
        description: item.description,
        image: item.logo,
        technologies: [item.type], // Using type as a tag
        demoUrl: isGithub ? undefined : item.link,
        githubUrl: isGithub ? item.link : undefined,
        featured: true
      };
    });
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const allProjects = await getAllProjects();
  // Show top 9 projects (3 rows of 3) on the home page
  return allProjects.slice(0, 9);
}
