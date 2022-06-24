/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LaunchesQuery
// ====================================================

export interface LaunchesQuery_Buildings_meetingRooms_meetings {
  __typename: "Meeting";
  id: number;
  title: string | null;
  date: string | null;
  startTime: string | null;
  endTime: string | null;
}

export interface LaunchesQuery_Buildings_meetingRooms {
  __typename: "MeetingRoom";
  name: string | null;
  id: number;
  floor: number;
  meetings: (LaunchesQuery_Buildings_meetingRooms_meetings | null)[] | null;
}

export interface LaunchesQuery_Buildings {
  __typename: "Building";
  name: string | null;
  id: number;
  meetingRooms: (LaunchesQuery_Buildings_meetingRooms | null)[] | null;
}

export interface LaunchesQuery {
  Buildings: (LaunchesQuery_Buildings | null)[] | null;
}
