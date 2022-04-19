import { gql, useQuery } from "@apollo/client";
import { Grid } from "@mantine/core";

const GET_USER_QUERY = gql`
  query GET_USER_QUERY {
    user {
      firstName
      lastName
    }
  }
`;

const Home = () => {
  const { data, loading, error } = useQuery(GET_USER_QUERY);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error...</div>;

  return (
    <Grid>
      <h1>Hello, {data.user.firstName}</h1>
    </Grid>
  );
};

export default Home;
