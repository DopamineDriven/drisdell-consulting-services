import DOMpurify from 'dompurify';

// sanitize raw markup text when rendered by way of dangerouslysetInnerHTML

export const sanitizeContent = (content: string | null) => {
	return process.browser ? DOMpurify.sanitize(content ?? '') : content;
};

export const sanitizeTitle = (title: string | null) => {
	return process.browser ? DOMpurify.sanitize(title ?? '') : title;
};

export const sanitizeExcerpt = (excerpt: string | null) => {
	return process.browser ? DOMpurify.sanitize(excerpt ?? '') : excerpt;
};
