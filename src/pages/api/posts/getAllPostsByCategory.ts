/**
 * @description Realizar GET de todo los post según el idioma y una categoría específica
 */

const endpoint = process.env.NEXT_PUBLIC_API_URL as string;

export const getAllPostsByCategory = async (
  id: string
): Promise<object | string> => {
  const response = await fetch(endpoint, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query GetAllPostsByCategory($id: ID!) {
          category(id: $id) {
            name
            posts {
              nodes {
                id
                slug
                author {
                  node {
                    firstName
                    lastName
                    avatar {
                      url
                    }
                  }
                }
                categories {
                  nodes {
                    name
                    slug
                    id
                  }
                }
                title
                excerpt
                date
                featuredImage {
                  node {
                    link
                    title
                  }
                }
                tags {
                  nodes {
                    name
                  }
                }
              }
            }
          }
        }
      `,
      variables: {
        id: id,
      },
    }),
  });

  const data = await response.json();

  return data;
};
