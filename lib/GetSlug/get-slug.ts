// Remove trailing and leading slash, usually included in nodes
// returned by the WpGraphQL exhaustive MenuItems query representative
// of the slugs embedded in WordPress Header, Footer, and Pages
const getSlug = (path: string) => path.replace(/^\/|\/$/g, '');

export default getSlug;
