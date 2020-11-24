import { gql } from "apollo-boost";

export const login = gql`
  query login {
    Users @rest(type: "Users", path: "login/") {
      id,
      userName,
      emailID,
      roleName
    }
  }
`;