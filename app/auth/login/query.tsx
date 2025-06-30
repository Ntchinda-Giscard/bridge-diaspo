import { gql } from "@apollo/client";


export const LOGIN_QUERY = gql`query MyQuery($_eq: String, $_eq1: String) {
  users(where: {email: {_eq: $_eq}, mot_passe: {_eq: $_eq1}}) {
    telephone
    sexe
    role_id
    service_requests {
      request_date
      id
      description
      client_id
      status_id
      service_id
      request_status {
        id
        status_name
      }
      service {
        service_name
        status
        service_type_id
        id
      }
    }
  }
}`