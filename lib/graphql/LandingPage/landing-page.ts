import { gql } from '@apollo/client';

const LANDING_PAGE = gql`
	query LandingPage($name: String!) {
		pages(where: { name: $name }) {
			edges {
				node {
					featuredImage {
						node {
							sourceUrl
						}
					}
					title
					slug
					content
				}
			}
		}
	}
`;

export default LANDING_PAGE;
