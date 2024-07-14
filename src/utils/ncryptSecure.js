import base64url from 'base64url';
import { v4 as uuidv4 } from 'uuid';
import Cookies from 'js-cookie';

/**
 * @description Función de desencriptado para poder generar
 *  la firma que solicitada por Backend Hermenautas.
 */

export const decodeParameters = (data) => {
  let dsDataDecrypt = JSON.parse(base64url.decode(data, 'utf8'));
  return dsDataDecrypt;
};

export const generateToken = async (key, id) => {
  const sesionId = uuidv4();
  const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
  const userId = sesionId.concat(id);

  if(key !== publicKey){
    return "error"
  }

  Cookies.set('WP_NEXT_SESSION', userId, { expires: 7 });

  return { status: "OK"}
}