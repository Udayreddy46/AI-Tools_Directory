import data from './tools.json';

// Disclaimer: All product names, logos, and brands are property of their respective owners. 
// This dataset is for informational and discovery purposes only and does not claim ownership of any listed tool.

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
