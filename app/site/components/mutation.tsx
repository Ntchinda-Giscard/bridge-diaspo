import { gql } from "@apollo/client";


export const ADD_SUBSCRIBER = gql`
mutation InsertSubscriber($email: String = "") {
  insert_subcribers_one(object: {email: $email}) {
    id
  }
}`;