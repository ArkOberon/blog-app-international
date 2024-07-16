/**
 * @description Registro de Cliente.
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
        query GetPosts {
          posts {
            nodes {
              id
              title
              date
              featuredImage {
                node {
                  mediaItemUrl
                  title
                  author {
                    node {
                      avatar {
                        url
                      }
                      firstName
                      lastName
                    }
                  }
                }
              }
              categories {
                nodes {
                  name
                  id
                }
              }
              excerpt
            }
          }
        }
      `,
    }),
  })

  const data = await response.json()

  return data
}
