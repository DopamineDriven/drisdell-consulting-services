import { NextApiResponse, NextApiRequest } from 'next';
export default async function exit(_req: NextApiRequest, res: NextApiResponse) {
	// Exit the current user from "Preview Mode". This function accepts no args.
	res.clearPreviewData();

	// Redirect the user back to the index page.
	res.writeHead(307, { Location: '/' });
	res.end();
}

// fetch-api.tsx
// import { query } from '@apollo/client';

// export async function fetchAPI(, { variables } = {}) {
//   const headers = { 'Content-Type': 'application/json' }

//   if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
//     headers[
//       'Authorization'
//     ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
//   }

//   const res = await fetch(API_URL, {
//     method: 'POST',
//     headers,
//     body: JSON.stringify({
//       query,
//       variables,
//     }),
//   })

//   const json = await res.json()
//   if (json.errors) {
//     console.error(json.errors)
//     throw new Error('Failed to fetch API')
//   }
//   return json.data
// }
