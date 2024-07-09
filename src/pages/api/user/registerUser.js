/**
 * @description Registro de Cliente. 
 * @param {String} email Email del Cliente 
 * @param {String} username Nombre de acceso
 * @param {String} password Contraseña del Cliente       
 */

export const registerUser = async (username, email, password) => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'      
    },
    body: JSON.stringify({
      query: `
        mutation RegisterUser($email: String!, $username: String!, $password: String!) {
          registerUser(input: {username: $username, email: $email, password: $password}) {
            user {      
              name      
            }
          }
        }
      `,
      variables: {
        username: username,
        email: email,
        password: password
      },
    }),
  })

  const data = await response.json()

  return data
}