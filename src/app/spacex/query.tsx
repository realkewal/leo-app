import { gql } from "@apollo/client";
export const query = gql`
  query Query($limit: Int) {
    company {
      founded
      founder
      headquarters {
        address
        city
        state
      }
      launch_sites
      name
      summary
      test_sites
      vehicles
    }
    histories(limit: $limit) {
      details
      event_date_utc
    }
  }
`;
