import axios from "axios";

// import REACT_APP_SERVER_URL from ".env"

export const login = await axios.post(
  REACT_APP_SERVER_URL,
  {
    query: `query login($id: Int!, $emailID: String!, $password: String! ) {
    login(id: $id, emailID: $emailID, password: $password){
      token
      user{
        id
        username
        emailID
        password
        rolename
      }
      admin{
        id
        username
        emailID
        password
        rolename
      }
    }
  }`,
    variables: {
      token,
      id,
      username,
      emailID,
      password,
      rolename,
    },
  },
  {
    headers: {
      "Content-Type": "application/json",
    },
  }
);

// const register = (username, email, password) => {
//   return axios.post(REACT_APP_SERVER_URL + "signup", {
//     username,
//     email,
//     password,
//   });
// };

const login = (emailID, password) => {
  return axios
    .post(REACT_APP_SERVER_URL + "login", {
      emailID,
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
client.query({ query }).then((response) => {
  console.log(response.data.name);
});

export default {
  register,
  login,
  logout,
};
