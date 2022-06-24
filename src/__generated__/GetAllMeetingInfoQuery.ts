/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllMeetingInfoQuery
// ====================================================

export interface GetAllMeetingInfoQuery_Buildings {
  __typename: "Building";
  name: string | null;
  id: number;
}

export interface GetAllMeetingInfoQuery {
  Buildings: (GetAllMeetingInfoQuery_Buildings | null)[] | null;
}
