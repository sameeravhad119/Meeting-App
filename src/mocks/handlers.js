import { graphql } from 'msw';
export const handlers = [
  
  graphql.query('LaunchesQuery', (req, res, ctx) => {
    return res(
      ctx.data(
        {
            "data": {
              "Buildings": [
                {
                  "name": "Building 8",
                  "id": 1,
                  "meetingRooms": [
                    {
                      "name": "Punjab",
                      "id": 1,
                      "floor": 7,
                      "meetings": [
                        {
                          "id": 1,
                          "title": "Booked for Interview",
                          "date": "13/02/2019",
                          "startTime": "19:00",
                          "endTime": "20:00"
                        },
                        {
                          "id": 1,
                          "title": "Meeting 1",
                          "date": "29/06/2022",
                          "startTime": "09:00",
                          "endTime": "10:00"
                        }
                      ]
                    },
                    {
                      "name": "Ganga",
                      "id": 2,
                      "floor": 5,
                      "meetings": [
                        {
                          "id": 1,
                          "title": "Meeting 2",
                          "date": "29/06/2022",
                          "startTime": "10:00",
                          "endTime": "11:00"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Building 4",
                  "id": 2,
                  "meetingRooms": [
                    {
                      "name": "Banglore",
                      "id": 3,
                      "floor": 7,
                      "meetings": [
                        {
                          "id": 1,
                          "title": "Meeting 3",
                          "date": "29/06/2022",
                          "startTime": "09:00",
                          "endTime": "10:00"
                        }
                      ]
                    },
                    {
                      "name": "Mumbai",
                      "id": 4,
                      "floor": 5,
                      "meetings": [
                        {
                          "id": 1,
                          "title": "Meeting 4",
                          "date": "29/06/2022",
                          "startTime": "11:00",
                          "endTime": "12:00"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Building 6",
                  "id": 3,
                  "meetingRooms": []
                }
              ]
            }
          }
    ))
  }),
]