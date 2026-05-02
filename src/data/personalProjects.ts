export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  type: string;
}

export const personalProjects: Project[] = [
  {
  "title": "OpenWRT Telegram Ntfy & Auto-Ban",
  "description": "Notifica cuando alguien accede al router ya sea por SSH o LuCi, cuando se conecta alguien por VPN o cuando banea a alguien. Funcionalidad de baneo con fw4 y nftables.",
  "image": "https://hosted.jaimegh.com/openwrt-telegram-notifier-autoban.png",
  "technologies": [
    "Shell"
  ],
  "githubUrl": "https://github.com/jaimegh-es/openwrt-telegram-notifier",
  "type": "App"
},
{
  "title": "Docker on Termux on Android",
  "description": "Experimentando con los límites de Termux, Docker y QEMU",
  "image": "https://hosted.jaimegh.com/docker-termux-gemini.png",
  "technologies": [
    "Termux",
    "Docker",
    "Shell",
    "QEMU"
  ],
  "githubUrl": "https://github.com/jaimegh-es/docker-termux",
  "type": "Personal"
},
{
  "title": "Contribución OpenClaw Soporte Mistral AI",
  "description": "Necesitaba que Mistral AI se pudiera usar en OpenClaw así que lo implementé. La Pull Request se unifico con otra para hacer todo de una.\nEn palabras del mantenedor: Due to various duplicated efforts I am combing this work along with any issues like missing documentation, testing, features in #23845 and credit will be provided. Really appreciate the contribution :)",
  "image": "https://hosted.jaimegh.com/1771232893_openclaw-loho_medium.webp",
  "technologies": [
    "API",
    "OpenClaw"
  ],
  "githubUrl": "https://github.com/openclaw/openclaw/pull/14730#issuecomment-3941741638",
  "type": "Personal"
},
{
  "title": "OhMyPosh Spain Theme",
  "description": "Tema de OMP basado en el de FreeUkraine pero con los colores de la bandera de España. *No relacionado con ideologías*",
  "image": "https://hosted.jaimegh.com/ohmyposh-spain-theme.png",
  "technologies": [
    "JSON"
  ],
  "githubUrl": "https://github.com/jaimegh-es/oh-my-posh-espa-a",
  "type": "Personal"
},
{
  "title": "Web instituto",
  "description": "Con el afán de digitalizar, optimizar y mejorar tanto la Junta de Delegados como el acceso a la información, tanto para padres como para alumnos, de las comunicaciones y eventos de la clase.\nBackend completo desde cero, interfaz pulida con notch apple-like, fácil administración desde cualquier lado, auto-notificación vía Telegram, chatbot, PWA, recordatorios, conexión con Apple y Google Calendar...\nResultado: padres y compañeros satisfechos.",
  "image": "https://1bach.vercel.app/favicon.svg",
  "technologies": [
    "Astro",
    "Firebase",
    "Telegram API",
    "Vercel",
    "ICS",
    "Typescript",
    "GSAP"
  ],
  "demoUrl": "https://1bach.vercel.app/",
  "githubUrl": "https://github.com/jaimegh-es/delegadospuga",
  "type": "Personal"
},
];

export function getPersonalProjects(): Project[] {
  return personalProjects;
}
