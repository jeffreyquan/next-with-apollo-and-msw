import { Container } from "@mantine/core";
import { WithChildren } from "types/with-children";

interface PageProps extends WithChildren {}

const Page = ({ children }: PageProps) => {
  return <Container size="lg">{children}</Container>;
};

export default Page;
