import gql from "graphql-tag";


export const GET_CACHE_CENTERS = gql`
    query {
        findSlots {
            center
            testType
            date
            expiry
        }
    }
`;