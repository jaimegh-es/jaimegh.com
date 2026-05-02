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
    image: "https://cc.sj-cdn.net/certificate/3n2veylcj0hl/certificate-ge3i3v64pohp-1766150447.jpg?Expires=1777715059&Signature=FvJdFyxIlwbVToVAGpW0RzlVHDv2dxf6jCOzZBaNIRN8XU30ib8Js4-EoB6iMKEtlqpROmoJ5dT8FGqq~F8dIPqu6s8~HsN9nTSM0cTI7aSCH-VI~wiQgf79Y9SCKlw0LRvxNYwY0VyBiS72qJWm6qlIx4UUNuSzaenpU2aF2Ia96liu-CRrhBTQhvKkr4eOjVXoU3AIjdu~dq3zPrFgB--i7HJoTqe0CuXNZv9glukGdF-Qas06i7JV4qjdlzRrHP6umGIgdav160m71ZFei4ZTfF-Sx5WSFQ8iZ68XqD1b2JVjB~W~bNfM0d8Li95ixR7PPDr1sREkpksfQrnVdQ__&Key-Pair-Id=APKAI3B7HFD2VYJQK4MQ",
    technologies: ["AI", "AgenticAI", "LLM", "Anthropic"]
  },
  {
    title: "Python desde cero",
    issuer: "mouredev pro by Brais Moure",
    issueDate: "2025-08-23",
    certificateId: "k0x3vrlwxt",
    url: "https://campus.mouredev.pro/certificates/k0x3vrlwxt",
    image: "https://cdn.filestackcontent.com/vlvjlqysTGcKbvV5EurM?policy=eyJjYWxsIjpbInJlYWQiXSwiZXhwaXJ5IjoxNzc3NzE0NTE3LCJwYXRoIjoiLyJ9&signature=649cbff1ae896a1d566ba51856ae5b094a38ff6e1a45b33d3a6bf1e09fd24826",
    technologies: ["Python", "Backend"]
  },
  {
    title: "JavaScript desde cero",
    issuer: "mouredev pro by Brais Moure",
    issueDate: "2025-07-22",
    certificateId: "wzcvcyefbh",
    url: "https://campus.mouredev.pro/certificates/wzcvcyefbh",
    image: "https://cdn.filestackcontent.com/qLik25bfRvih30Qmrq4d?policy=eyJjYWxsIjpbInJlYWQiXSwiZXhwaXJ5IjoxNzc3NzE0NjUxLCJwYXRoIjoiLyJ9&signature=9da9442ed1c7d4f39db8122d663a9402cec95552a1116867810629ed6374297d",
    technologies: ["JavaScript", "Frontend"]
  },
  {
    title: "Introduction to Model Context Protocol",
    issuer: "Anthropic Education",
    issueDate: "2025-12-19",
    certificateId: "ndac6x3rqkv6",
    url: "https://verify.skilljar.com/c/ndac6x3rqkv6",
    image: "https://cc.sj-cdn.net/certificate/47ajyxsragmw/certificate-ndac6x3rqkv6-1766150864.jpg?Expires=1777714895&Signature=Oni11aqrUFFTQ6ofdwMEsxvZjmIULO~GotSEi4zphgXzCdX3GMtl0Lv~KXIHDgs306NZMlr~d7JYjFDQCoY8~cw-vGypY7bZQD-khbohDD7tZOcPWLbu-oQR0Ej8MOhoGJ8KxLkslHz5CRrj1BHs~8kxVeYPdrHdCvZAIDqgK4WwF5CGvPcA1CFtCm6krAkqoTGPrGgIHCzzQlrvFU070D4wM7v7E1fEWP8Fom2eRQ9bkPWwg2WW4KQ8mfVrY8WTGQPNcnilEppvANAw~ouwP8Onj9vCPgfmNXqfIf7d1aD2L~vy11rxSvKQG9xvO59fYUkoklULvn4sPdK~Aq2u7Q__&Key-Pair-Id=APKAI3B7HFD2VYJQK4MQ",
    technologies: ["AI", "MCP", "AgenticAI", "LLM", "Anthropic"]
  }

];

export function getAllCertifications(): Certification[] {
  return certifications;
}
