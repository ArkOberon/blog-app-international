/**
 * @description Realizar GET para entregar cualquier post individualmente según su ID
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
                description
              }
            }
            featuredImage {
              node {
                link
                altText
                title
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
            tags {
              nodes {
                name
              }
            }
            texto {
              idYoutube
              iframeCode
            }
            relacionados {
              articuloRelacionado
              categoriaArticulo
              idiomaArticulo
            }
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
