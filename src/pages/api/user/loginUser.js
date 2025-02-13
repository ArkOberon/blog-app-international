/**
 * @description Registro de Cliente.
 * @param {String} email Email del Cliente
 * @param {String} username Nombre de acceso
 * @param {String} password Contraseña del Cliente
 */

export const loginUser = async (username, password) => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        mutation LoginUser($username: String!, $password: String!) {
          loginUser(input: {username: $username, password: $password}) {  
            authToken                   
            user {
              id
            }
          }
        }
      `,
      variables: {
        username: username,
        password: password,
      },
    }),
  });

  const data = await response.json();

  return data;
};
