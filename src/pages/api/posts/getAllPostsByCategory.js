/**
 * @description Realizar GET de todo los post según el idioma y una categoría específica
 */

export const getAllPostsByCategory = async (id) => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL, {
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
