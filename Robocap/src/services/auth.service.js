import axios from "axios";



export const data = await axios.post(
  REACT_APP_SERVER_URL,
  {
    query: `mutation updateUserCity($id: Int!, $city: String!) {
    updateUserCity(userID: $id, city: $city){
      id
      name
      age
      city
      knowledge{
        language
        frameworks
      }
    }
  }`,
    variables: {
      id: 2,
      city: "Test",
    },
  },
  {
    headers: {
      "Content-Type": "application/json",
    },
  }
  
);


const register = (username, email, password) => {
  return axios.post(REACT_APP_SERVER_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(REACT_APP_SERVER_URL + "login", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

// Invoke the query and log the person's name
client.query({ query }).then(response => {
  console.log(response.data.name);
});

export default {
  register,
  login,
  logout,
};
