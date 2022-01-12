import axios from "axios";

const BASE_URL = "http://localhost:5500";

export default {
  getUserById: async (userId) => {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${BASE_URL}/user/${userId}`, {
      userId,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
    return response.data;
  },

  updateUserData: async ({
    firstName,
    lastName,
    email,
    password,
    bio,
    phoneNumber,
    userId,
  }) => {
    const token = localStorage.getItem("token");
    const response = await axios.put(
      `${BASE_URL}/user/${userId}`,
      {
        firstName,
        lastName,
        email,
        password,
        bio,
        phoneNumber,
        token,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  },

  loginUser: async ({ email, password }) => {
    const response = await axios.post(`${BASE_URL}/login`, { email, password });
    return response.data;
  },

  signUpUser: async ({ firstName, lastName, email, password, phoneNumber }) => {
    const response = await axios.post(`${BASE_URL}/signup`, {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
    });
    return response.data;
  },
};
