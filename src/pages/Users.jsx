import SignupForm from "../features/authentication/SignupForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function NewUsers() {
  return (
    <>
      <Row type="vertical2">
        <Heading as="h1">Create a new user</Heading>
      </Row>
      <Row type="vertical2">
        <SignupForm />
      </Row>
    </>
  );
}

export default NewUsers;
