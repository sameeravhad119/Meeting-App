/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LaunchesQuery
// ====================================================

export interface LaunchesQuery_Buildings {
  __typename: "Building";
  name: string | null;
  id: number;
}

export interface LaunchesQuery {
  Buildings: (LaunchesQuery_Buildings | null)[] | null;
}
