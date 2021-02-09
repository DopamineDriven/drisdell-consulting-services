const getSlug = (path: string) => path.replace(/^\/|\/$/g, '');

export default getSlug;

// /path/ => path
