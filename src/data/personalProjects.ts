export interface Project {
  title: string;
  description: string;
  descriptionEn?: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  type: string;
}

export const personalProjects: Project[] = [
  {
    title: "OpenWRT Telegram Ntfy & Auto-Ban",
    description:
      "Notifica cuando alguien accede al router ya sea por SSH o LuCi, cuando se conecta alguien por VPN o cuando banea a alguien. Funcionalidad de baneo con fw4 y nftables.",
    descriptionEn:
      "Notifies when someone accesses the router via SSH or LuCI, when someone connects through the VPN, or when it bans someone. Banning functionality with fw4 and nftables.",
    image: "https://hosted.jaimegh.com/openwrt-telegram-notifier-autoban.png",
    technologies: ["Shell"],
    githubUrl: "https://github.com/jaimegh-es/openwrt-telegram-notifier",
    type: "App",
  },
  {
    title: "Docker on Termux on Android",
    description: "Experimentando con los límites de Termux, Docker y QEMU",
    descriptionEn: "Pushing the limits of Termux, Docker and QEMU",
    image: "https://hosted.jaimegh.com/docker-termux-gemini.png",
    technologies: ["Termux", "Docker", "Shell", "QEMU"],
    githubUrl: "https://github.com/jaimegh-es/docker-termux",
    type: "Personal",
  },
  {
    title: "OhMyPosh Spain Theme",
    description:
      "Tema de OMP basado en el de FreeUkraine pero con los colores de la bandera de España. *No relacionado con ideologías*",
    descriptionEn:
      "OMP theme based on the FreeUkraine one but with the colors of the Spanish flag. *Not related to any ideology*",
    image: "https://hosted.jaimegh.com/ohmyposh-spain-theme.png",
    technologies: ["JSON"],
    githubUrl: "https://github.com/jaimegh-es/oh-my-posh-espa-a",
    type: "Personal",
  },
  {
    title: "Colaboración con Pear OS",
    description:
      "Siendo beta tester para la v26.6 y portando mis últimas aplicaciones exclusivamente para Pear OS. Continúo colaborando activamente en el Discord de Pear OS.",
    descriptionEn:
      "Beta tester for v26.6 and porting my latest apps exclusively for Pear OS. I keep actively collaborating on the Pear OS Discord.",
    image: "https://hosted.jaimegh.com/pear-os.png",
    technologies: ["GTK", "Python", "VM", "QEMU", "Arch Linux"],
    type: "Open Source",
  },
];

export function getPersonalProjects(): Project[] {
  return personalProjects;
}
