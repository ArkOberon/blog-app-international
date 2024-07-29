/**d
 * @description Realizar GET de cualquier post individualmente según su slug
 */

export const getPostBySlug = async (slug) => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query GetPostBySlug($slug: String!) {
          postBy(slug: $slug) {
            author {
              node {
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
            featuredImage {
              node {
                link
                altText
              }
            }
            categories {
              nodes {
                name
                slug
              }
            }
            content
            date
            title
            excerpt
          }
        }
      `,
      variables: {
        slug: slug,
      },
    }),
  });

  const data = await response.json();

  return data;
};
