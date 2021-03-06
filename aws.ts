const secrets = {
	SMTP_SENDER_ADDRESS: `${process.env.SMTP_SENDER_ADDRESS}`,
	SMTP_RECIPIENT_ADDRESS: `${process.env.SMTP_RECIPIENT_ADDRESS}`,
	SMTP_USERNAME: `${process.env.SMTP_USERNAME}`,
	SMTP_PASSWORD: `${process.env.SMTP_PASSWORD}`,
	SMTP_BCC_ADDRESS: `${process.env.SMTP_BCC_ADDRESS}`,
	SMTP_AUTH_LAYER: `${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
};

export default secrets;
