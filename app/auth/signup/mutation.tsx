import { gql } from "@apollo/client";



export const SIGNUP_MUTATION = gql`mutation InsertUser($nom: String = "", $prenom: String = "", $telephone: bpchar = "", $email: String = "", $mot_passe: String = "", $country: String = "") {
  insert_users_one(object: {nom: $nom, prenom: $prenom, role_id: "ab14d5ed-22db-4c45-a822-70a8b8b17935", telephone: $telephone, email: $email, mot_passe: $mot_passe, country: $country}) {
    id
  }
}`



