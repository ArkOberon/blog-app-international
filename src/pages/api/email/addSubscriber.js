/**
 * @description Registro de Cliente.
 * @param {String} email Email del Cliente
 * @param {String} listId Listado de IDs de la empresa
 * @param {String} categoryName Nombre de la categoría de la que proviene el Lead
 */

export const addSubscriberToList = async (email, listId, categoryName) => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        mutation AddSubscriberToList($email: String!, $listId: Int!, $firstName: String!) {
          addMailPoetSubscriberToList(
            input: {email: $email, listId: $listId, firstName: $firstName}
          ) {
            message
            success
          }
        }
      `,
      variables: {
        email: email,
        listId: listId,
        firstName: categoryName,
      },
    }),
  });

  const data = await response.json();

  return data;
};
