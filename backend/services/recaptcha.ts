import axios from "axios";

export const verifyToken = async (token: string): Promise<boolean> => {
  try {
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${
      process.env.RECAPTCHA_SECRET_KEY
    }&response=${token}`;
    const response = await axios.post(url);

    return response.data.success === true;
  } catch (e) {
    return false;
  }
};
