/**
 * @description Recuperación de contraseña.
 * @param {String} email Email del Cliente
 * @param {String} locale Idioma del Cliente
 * @param {String} asPath asPath del Cliente
 */

export const recoverPassword = async (email, locale, asPath) => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        mutation ForgotPassword($email: String!, $locale: String!, $asPath: String!) {
          forgotPassword(input: { email: $email, locale: $locale, asPath: $asPath }) {
            message
          }
        }
      `,
      variables: {
        email: email,
        locale: locale,
        asPath: asPath,
      },
    }),
  });

  const data = await response.json();

  return data;
};
