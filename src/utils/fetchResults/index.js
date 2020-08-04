const fetchResult = {
  success: jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({
      results: [
        {
          first_name: "test",
          last_name: "test",
          title: "test",
          date_of_birth: "2000-01-01",
          id: "test",
          url: "test",
          twitter_account: "test",
          youtube_account: "test",
          facebook_account: "test",
          roles: [
            {
              title: "test",
              congress: "test",
              chamber: "test",
              phone: "test",
              office: "test",
              seniority: "test",
              start_date: "test",
              end_date: "test",
            }
          ]
        }
      ]
    }),
  })
),
error: jest.fn(() =>
  Promise.reject({message: "test"})
),
successAll: jest.fn(() =>
Promise.resolve({
  json: () => Promise.resolve({
    results: [
      {
        members: [
          {
            first_name: "test",
            last_name: "test",
            title: "test",
            date_of_birth: "2000-01-01",
            id: "test",
            url: "test",
            twitter_account: "test",
            youtube_account: "test",
            facebook_account: "test",
            roles: [
              {
                title: "test",
                congress: "test",
                chamber: "test",
                phone: "test",
                office: "test",
                seniority: "test",
                start_date: "test",
                end_date: "test",
              }
            ]
          }
        ]
      }
    ]
  }),
})
),
}

export default fetchResult