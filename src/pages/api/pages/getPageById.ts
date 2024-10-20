/**
 * @description Realizar GET para entregar cualquier página individualmente según su ID
 */

const endpoint = process.env.NEXT_PUBLIC_API_URL as string;

export const getPageById = async (
  id: string | undefined
): Promise<object | string> => {
  const response = await fetch(endpoint, {
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
