import { gql } from "@apollo/client";
export const query = gql`
  query {
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
    launches {
      details
      launch_site {
        site_name
      }
      mission_name
      rocket {
        rocket_name
      }
    }
  }
`;
