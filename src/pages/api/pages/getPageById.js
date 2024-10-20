/**
 * @description Realizar GET para entregar cualquier página individualmente según su ID
 */

export const getPageById = async (id) => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query GetPageById($id: ID) {
          pageBy(id: $id) {
            content(format: RENDERED)
            date
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
