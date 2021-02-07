const secrets = {
	SMTP_SENDER_ADDRESS: `${process.env.SMTP_SENDER_ADDRESS}`,
	SMTP_RECIPIENT_ADDRESS: `${process.env.SMTP_RECIPIENT_ADDRESS}`,
	SMTP_USERNAME: `${process.env.SMTP_USERNAME}`,
	SMTP_PASSWORD: `${process.env.SMTP_PASSWORD}`
};

export default secrets;
