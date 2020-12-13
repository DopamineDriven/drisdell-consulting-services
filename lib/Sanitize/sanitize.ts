import DOMpurify from 'dompurify';

// sanitize raw markup text when rendered by way of dangerouslysetInnerHTML

export type RawToRender = 'content' | 'title' | 'excerpt';

const Sanitize = (props: RawToRender | null) => {
	return process.browser ? DOMpurify.sanitize(props ?? '') : props;
};

export default Sanitize;

/*
// HOW_TO_USE

export const sanitizeContent = (props: RawToRender | null) => {
	return process.browser ? DOMpurify.sanitize(props=['title'] ?? '') : props=['title'];
};
*/
