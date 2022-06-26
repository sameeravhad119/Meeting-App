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

export const ADD_MEETING = gql`
mutation($id:Int!,$title:String!,$date:String!,$startTime:String!,
  $endTime:String!,$meetingRoomId:Int!) {
  Meeting(
  id: $id,
  title: $title,
  date: $date,
  startTime: $startTime,
  endTime: $endTime,
  meetingRoomId: $meetingRoomId
  ) {
  id
  title
  }
  }
`;