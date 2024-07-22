/**
 * @description Realizar GET de todo los post segúb el idioma
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
            id
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
