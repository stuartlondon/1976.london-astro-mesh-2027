export type ProjectStatus = "Live" | "In Development";

export interface Project {
    slug: string;
    name: string;
    category: string;
    description: string;
    technologies: string[];
    status: ProjectStatus;
    featured: boolean;
    website?: string;
    image?: string;
    tone: "cyan" | "teal" | "slate";
    caseStudy: {
        headline: string;
        highlight: string;
        focus: string;
        priorities: string[];
    };
}

export const projects: Project[] = [
    {
        slug: "fix-my-car",
        name: "Fix My Car",
        category: "Mobile Mechanic Website",
        description:
            "A mobile mechanic website for drivers across North, East and South London, with clear service information, coverage details, and direct contact options.",
        technologies: ["Astro"],
        status: "Live",
        featured: true,
        website: "https://fixmycar.london",
        image: "/fixmycar.png",
        tone: "cyan",
        caseStudy: {
            headline: "A clearer route to",
            highlight: "local car care.",
            focus:
                "A mobile mechanic website for drivers across North, East and South London.",
            priorities: [
                "Make services easy to understand",
                "Clarify where the service is available",
                "Keep direct contact easy to find",
            ],
        },
    },
    {
        slug: "dragica-carlin",
        name: "Dragica Carlin",
        category: "Artist Portfolio",
        description:
            "A personal art portfolio focused on exhibitions, commissions, and visual storytelling.",
        technologies: ["WordPress"],
        status: "Live",
        featured: true,
        website: "https://dragicacarlin.com",
        image: "/dragicacarlin.png",
        tone: "cyan",
        caseStudy: {
            headline: "An artist portfolio",
            highlight: "with room for the work.",
            focus:
                "A personal home for artwork, exhibitions, commissions, and visual storytelling.",
            priorities: [
                "Put the artwork at the centre",
                "Give exhibitions a clear place",
                "Make commission enquiries straightforward",
            ],
        },
    },
    {
        slug: "ben-stockley",
        name: "Ben Stockley",
        category: "Filmmaker Portfolio",
        description:
            "A cinematic portfolio experience designed to highlight motion work and client projects.",
        technologies: ["WordPress"],
        status: "Live",
        featured: true,
        website: "https://benstockley.com",
        image: "/benstockley.png",
        tone: "teal",
        caseStudy: {
            headline: "A cinematic home",
            highlight: "for motion-led work.",
            focus:
                "A filmmaker portfolio designed around motion work and client projects.",
            priorities: [
                "Let motion work take the lead",
                "Make client projects easy to explore",
                "Keep the experience focused on the films",
            ],
        },
    },
    {
        slug: "reds-plastering",
        name: "Reds Plastering",
        category: "Small Business Website",
        description:
            "A practical lead-focused site for a local trades business with clearer contact pathways.",
        technologies: ["WordPress"],
        status: "Live",
        featured: true,
        website: "https://redsplastering.co.uk",
        image: "/redsplastering.png",
        tone: "slate",
        caseStudy: {
            headline: "A straightforward website",
            highlight: "for a local trade.",
            focus:
                "A practical lead-focused website for a local plastering business.",
            priorities: [
                "Explain the service clearly",
                "Build confidence with a practical presentation",
                "Make the next step easy for potential customers",
            ],
        },
    },
];
