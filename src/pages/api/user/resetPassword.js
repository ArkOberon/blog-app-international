/**
 * @description Actualiza la contraseña del usuario.
 * @param {String} key Token autogenerado por la API e insertado como parámetro en la URL
 * @param {String} login Nombre de usuario generado por la API e insertado como parámetro en la URL
 * @param {String} newPassword Nueva Contraseña
 */

export const resetPassword = async (key, login, newPassword) => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        mutation resetPassword($key: String!, $login: String!, $newPassword: String!) {
          resetPassword(input: { key: $key, login: $login, newPassword: $newPassword }) {
            success
          }
        }
      `,
      variables: {
        key: key,
        login: login,
        newPassword: newPassword,
      },
    }),
  });

  const data = await response.json();

  return data;
};
