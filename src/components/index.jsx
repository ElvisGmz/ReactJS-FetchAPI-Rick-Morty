import axios from "axios";

export async function getCaracters() {
  try {
    const response = await axios({
      url: `${process.env.REACT_APP_API_URL}/character/`,
      method: "GET",
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}
