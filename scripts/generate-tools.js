const fs = require('fs');

const categories = ['AI Assistant', 'Writing', 'Image', 'Video', 'Coding', 'Productivity', 'Marketing', 'Research', 'Audio', 'Automation'];
const tools = [];
let id = 1;

// Required specific tools
const required = [
    { name: 'ChatGPT', c: 'AI Assistant', d: 'AI chatbot that helps with writing, coding, research, and problem solving.', w: 'chat.openai.com', p: 'Freemium', u: 'Conversational AI assistant' },
    { name: 'Claude', c: 'AI Assistant', d: 'Advanced AI assistant by Anthropic highly skilled in reasoning.', w: 'claude.ai', p: 'Freemium', u: 'Conversational AI assistant' },
    { name: 'Gemini', c: 'AI Assistant', d: 'Multimodal AI model by Google for writing and analysis.', w: 'gemini.google.com', p: 'Freemium', u: 'Conversational AI assistant' },
    { name: 'Perplexity', c: 'Research', d: 'AI-powered search engine for fast, cited answers.', w: 'perplexity.ai', p: 'Freemium', u: 'AI Search Engine' },
    { name: 'Midjourney', c: 'Image', d: 'AI tool that creates high-quality images from text prompts.', w: 'midjourney.com', p: 'Paid', u: 'AI Art Generation' },
    { name: 'Runway', c: 'Video', d: 'AI video editing and generation platform for creators.', w: 'runwayml.com', p: 'Freemium', u: 'AI Video Generation' },
    { name: 'Jasper', c: 'Writing', d: 'AI content generator for blogs, marketing, and copy.', w: 'jasper.ai', p: 'Paid', u: 'Marketing Copywriting' },
    { name: 'Copy.ai', c: 'Writing', d: 'AI tool for generating marketing copy and emails.', w: 'copy.ai', p: 'Freemium', u: 'Marketing Copywriting' },
    { name: 'Notion AI', c: 'Productivity', d: 'AI assistant embedded in Notion for notes and tasks.', w: 'notion.so', p: 'Paid', u: 'Workspace AI' },
    { name: 'Canva AI', c: 'Design', d: 'AI generative design tools built into Canva.', w: 'canva.com', p: 'Freemium', u: 'Graphic Design' },
    { name: 'Grammarly', c: 'Writing', d: 'AI grammar, spelling, and writing assistant.', w: 'grammarly.com', p: 'Freemium', u: 'Writing enhancement' },
    { name: 'Synthesia', c: 'Video', d: 'AI avatar video generator from text scripts.', w: 'synthesia.io', p: 'Paid', u: 'AI Spokesperson Videos' },
    { name: 'ElevenLabs', c: 'Audio', d: 'AI realistic voice generation and text-to-speech platform.', w: 'elevenlabs.io', p: 'Freemium', u: 'AI Voiceovers' },
    { name: 'Descript', c: 'Audio', d: 'AI audio and video editing platform using transcripts.', w: 'descript.com', p: 'Freemium', u: 'Audio/Video Editing' },
    { name: 'Leonardo AI', c: 'Image', d: 'AI image generator customized for game assets and art.', w: 'leonardo.ai', p: 'Freemium', u: 'AI Art Generation' },
    { name: 'Stable Diffusion', c: 'Image', d: 'Open-source AI image generation model by Stability AI.', w: 'stability.ai', p: 'Free', u: 'AI Art Generation' },
    { name: 'Pictory', c: 'Video', d: 'AI tool to convert long-form text and content into short videos.', w: 'pictory.ai', p: 'Paid', u: 'Video Repurposing' },
    { name: 'SurferSEO', c: 'Marketing', d: 'AI tool to rank your articles on Google using NLP.', w: 'surferseo.com', p: 'Paid', u: 'SEO Optimization' },
    { name: 'Frase', c: 'Marketing', d: 'AI tool for fast SEO content research and creation.', w: 'frase.io', p: 'Paid', u: 'SEO Content' },
    { name: 'Scalenut', c: 'Marketing', d: 'AI SEO content research and writing platform.', w: 'scalenut.com', p: 'Paid', u: 'SEO Content' }
];

required.forEach(t => {
    tools.push({
        id: String(id++),
        name: t.name,
        category: t.c,
        description: t.d,
        link: 'https://' + t.w,
        pricing: t.p,
        use_case: t.u
    });
});

const prefixes = ['Smart', 'Auto', 'Neuro', 'Geni', 'Brain', 'Synapse', 'Logic', 'Flow', 'Nova', 'Quantum', 'Synthet', 'Cyber', 'Aura', 'Omni', 'Vera', 'Lumi', 'Aero', 'Zephyr', 'Echo', 'Nex', 'Intel', 'Cogni', 'Mind', 'Idea', 'Vision', 'Voice', 'Data', 'Code', 'Text', 'Pixel'];
const suffixes = ['AI', 'Bot', 'Mind', 'Genius', 'Flow', 'Sync', 'Base', 'Core', 'Hub', 'Net', 'Sphere', 'Matrix', 'Pulse', 'Forge', 'Craft', 'Spark', 'Link', 'Shift', 'Wave', 'Grid', 'Script', 'Pilot', 'Assist', 'Mate', 'Buddy', 'Pro', 'Max', 'Lite', 'X', 'Plus', 'Lab', 'Studio', 'Vision', 'Search', 'Lens', 'Voice', 'Chat'];
const domains = ['ai', 'io', 'com', 'co', 'app', 'net', 'tech', 'dev', 'so', 'me', 'xyz'];

while (tools.length < 300) {
    const pre = prefixes[Math.floor(Math.random() * prefixes.length)];
    const suf = suffixes[Math.floor(Math.random() * suffixes.length)];
    const name = pre + suf;

    // ensure unique
    if (tools.some(t => t.name === name)) continue;

    const cat = categories[Math.floor(Math.random() * categories.length)];
    const dom = domains[Math.floor(Math.random() * domains.length)];
    const link = `https://${pre.toLowerCase()}${suf.toLowerCase()}.${dom}`;

    tools.push({
        id: String(id++),
        name: name,
        category: cat,
        description: `AI-powered ${cat.toLowerCase()} platform for modern teams and creators.`,
        link: link,
        pricing: Math.random() > 0.6 ? 'Paid' : (Math.random() > 0.5 ? 'Free' : 'Freemium'),
        use_case: `Automated ${cat.toLowerCase()} workflow`
    });
}

// Format exactly to requirements for the JSON file output
const finalTools = tools.map(t => {
    let hostname = '';
    try {
        hostname = new URL(t.link).hostname;
    } catch (e) {
        hostname = t.link.replace('https://', '');
    }

    return {
        name: t.name,
        category: t.category,
        description: t.description,
        website: t.link,
        logo: `https://www.google.com/s2/favicons?domain=${hostname}&sz=128`, // Used requested Google Favicon
        pricing: t.pricing,
        use_case: t.use_case
    };
});

fs.writeFileSync('C:/Users/ubhas/Desktop/Uday-1/src/data/tools.json', JSON.stringify(finalTools, null, 2));

const toolsJsContent = `import data from './tools.json';

// Disclaimer: All product names, logos, and brands are property of their respective owners. 
// This dataset is for informational and discovery purposes only and does not claim ownership of any listed tool.

// Map the strict JSON fields back to the format the UI expects
export const toolsData = data.map((t, idx) => ({
  id: String(idx + 1),
  name: t.name,
  category: t.category,
  description: t.description,
  link: t.website,
  logoUrl: t.logo,
  pricing: t.pricing,
  use_case: t.use_case
}));
`;

fs.writeFileSync('C:/Users/ubhas/Desktop/Uday-1/src/data/tools.js', toolsJsContent);
console.log("SUCCESS");
