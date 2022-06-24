import {gql} from '@apollo/client';
// import gql from 'graphql-tag'

export const GET_ALL_MEETING_INFO = gql`
query LaunchesQuery {
    Buildings {
      name
      id
      meetingRooms {
        name
        id
        floor
        meetings {
          id
          title
          date
          startTime
          endTime
        }
      }
    }
}
`;