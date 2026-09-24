export interface Project {
  title: string;
  description: string;
  descriptionEn?: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  type: string;
  featured?: boolean;
}

export const personalProjects: Project[] = [
     {
    title: "Pulsar OS",
    description:
      "El conjunto de distribuciones Linux que reemplazarán tu Mac, Windows y AndroidTV. Featured on Distrowatch",
    descriptionEn:
      "The set of Linux distributions that will replace your Mac, Windows and AndroidTV. Featured on Distrowatch",
    image: "https://hosted.inled.es/cdn/pulsar-logo-simple-sf.png",
    technologies: ["Android", "APK", "APIs", "Astro", "Capacitor", "Java"],
    type: "Open Source",
    demoUrl: "https://os.inled.es",
    githubUrl: "https://github.com/Inled-Pulsar_OS",
    featured: true,
  },
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
    featured: false,
  },
  {
    title: "Docker on Termux on Android",
    description: "Experimentando con los límites de Termux, Docker y QEMU",
    descriptionEn: "Pushing the limits of Termux, Docker and QEMU",
    image: "https://hosted.jaimegh.com/docker-termux-gemini.png",
    technologies: ["Termux", "Docker", "Shell", "QEMU"],
    githubUrl: "https://github.com/jaimegh-es/docker-termux",
    type: "Personal",
    featured: false,
  },
  {
    title: "Contribución OpenClaw Soporte Mistral AI",
    description:
      "Necesitaba que Mistral AI se pudiera usar en OpenClaw así que lo implementé. La Pull Request se unifico con otra para hacer todo de una.\nEn palabras del mantenedor: Due to various duplicated efforts I am combing this work along with any issues like missing documentation, testing, features in #23845 and credit will be provided. Really appreciate the contribution :)",
    descriptionEn:
      "I needed Mistral AI to be usable in OpenClaw, so I implemented it. The Pull Request was merged together with another one to do it all at once.\nIn the maintainer's words: Due to various duplicated efforts I am combing this work along with any issues like missing documentation, testing, features in #23845 and credit will be provided. Really appreciate the contribution :)",
    image: "https://hosted.jaimegh.com/1771232893_openclaw-loho_medium.webp",
    technologies: ["API", "OpenClaw"],
    githubUrl:
      "https://github.com/openclaw/openclaw/pull/14730#issuecomment-3941741638",
    type: "Personal",
    featured: true,
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
    title: "Web instituto",
    description:
      "Con el afán de digitalizar, optimizar y mejorar tanto la Junta de Delegados como el acceso a la información, tanto para padres como para alumnos, de las comunicaciones y eventos de la clase.\nBackend completo desde cero, interfaz pulida con notch apple-like, fácil administración desde cualquier lado, auto-notificación vía Telegram, chatbot, PWA, recordatorios, conexión con Apple y Google Calendar...\nResultado: padres y compañeros satisfechos.",
    descriptionEn:
      "With the goal of digitalizing, optimizing and improving both the Student Council and access to information — for parents and students alike — regarding class communications and events.\nComplete backend built from scratch, polished apple-like notch UI, easy administration from anywhere, auto-notification via Telegram, chatbot, PWA, reminders, Apple and Google Calendar integration...\nResult: satisfied parents and classmates.",
    image: "https://2bach.vercel.app/favicon.svg",
    technologies: [
      "Astro",
      "Firebase",
      "Telegram API",
      "Vercel",
      "ICS",
      "Typescript",
      "GSAP",
    ],
    demoUrl: "https://2bach.vercel.app/",
    githubUrl: "https://github.com/jaimegh-es/delegadospuga",
    type: "Personal",
    featured: true,
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
    featured: false,
  },

   {
    title: "CoruñaBus",
    description:
      "La aplicación de los buses urbanos de Coruña hecha por quien los usa diariamente. La más completa y sin un solo anuncio.",
    descriptionEn:
      "The application of Coruña's urban buses made by those who use them daily. The most complete and without a single advertisement.",
    image: "https://xn--coruabus-g3a.inled.es/favicon.svg",
    technologies: ["Android", "APK", "APIs", "Astro", "Capacitor", "Java"],
    type: "Open Source",
    demoUrl: "https://xn--coruabus-g3a.inled.es/",
    githubUrl: "https://github.com/jaimegh-es/corunabus",
    featured: true,
  },
];

export function getPersonalProjects(): Project[] {
  return personalProjects;
}