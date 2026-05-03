export interface Certification {
  title: string;
  issuer: string;
  issueDate: string;
  certificateId: string;
  url: string;
  image: string;
  technologies: string[];
}

export const certifications: Certification[] = [
    {
    title: "Claude Code in Action",
    issuer: "Anthropic Education",
    issueDate: "2025-12-19",
    certificateId: "ge3i3v64pohp",
    url: "https://verify.skilljar.com/c/ge3i3v64pohp",
    image: "https://hosted.jaimegh.com/claudecodeaction.png",
    technologies: ["AI", "AgenticAI", "LLM", "Anthropic"]
  },
  {
    title: "Python desde cero",
    issuer: "mouredev pro by Brais Moure",
    issueDate: "2025-08-23",
    certificateId: "k0x3vrlwxt",
    url: "https://campus.mouredev.pro/certificates/k0x3vrlwxt",
    image: "https://hosted.jaimegh.com/python-0-brais.png",
    technologies: ["Python", "Backend"]
  },
  {
    title: "JavaScript desde cero",
    issuer: "mouredev pro by Brais Moure",
    issueDate: "2025-07-22",
    certificateId: "wzcvcyefbh",
    url: "https://campus.mouredev.pro/certificates/wzcvcyefbh",
    image: "https://hosted.jaimegh.com/js-0-brais.png",
    technologies: ["JavaScript", "Frontend"]
  },
  {
    title: "Introduction to Model Context Protocol",
    issuer: "Anthropic Education",
    issueDate: "2025-12-19",
    certificateId: "ndac6x3rqkv6",
    url: "https://verify.skilljar.com/c/ndac6x3rqkv6",
    image: "https://hosted.jaimegh.com/mcp-claude.png",
    technologies: ["AI", "MCP", "AgenticAI", "LLM", "Anthropic"]
  }

];

export function getAllCertifications(): Certification[] {
  return certifications;
}
