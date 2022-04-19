import { graphql } from "msw";

export const handlers = [
  graphql.query("GET_USER_QUERY", (req, res, ctx) => {
    return res(
      ctx.data({
        user: {
          firstName: "John",
          lastName: "Smith",
          __typename: "User",
        },
      })
    );
  }),
];
