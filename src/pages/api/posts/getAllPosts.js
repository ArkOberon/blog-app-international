/**
 * @description Realizar GET de todo los post según el idioma
 */

export const getAllPosts = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query GetCategoriesWithPosts {
          categories(where: {parent: 0}) {
            nodes {
              id
              name
              children {
                nodes {
                  id
                  name
                  posts {
                    nodes {
                      id
                      title
                      featuredImage {
                        node {
                          link
                        }
                      }
                      author {
                        node {
                          firstName
                          lastName
                          avatar {
                            url
                          }
                        }
                      }
                      excerpt
                      date
                      categories {
                        nodes {
                          name
                          slug
                        }
                      }
                      slug
                      tags {
                        nodes {
                          name
                        }
                      }
                    }
                  },
                  slug
                }
              }
            }
          }
        }
      `,
    }),
  });

  const data = await response.json();

  return data;
};
