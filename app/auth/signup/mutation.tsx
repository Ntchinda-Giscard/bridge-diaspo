


export const SIGNUP_MUTATION = `mutation InsertUser($nom: String = "", $prenom: String = "", $telephone: bpchar = "", $sexe: bpchar = "", $email: String = "", $mot_passe: String = "", $country: String = "", $date_naisse: bpchar = "") {
  insert_users_one(object: {nom: $nom, prenom: $prenom, role_id: "ab14d5ed-22db-4c45-a822-70a8b8b17935", telephone: $telephone, sexe: $sexe, email: $email, mot_passe: $mot_passe, country: $country, date_naisse: $date_naisse}) {
    id
  }
}`



