import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Account() {
  return (
    <>
      <Row type="vertical2">
        <Heading as="h1">Update your account</Heading>
      </Row>

      <Row type="vertical2">
        <Heading type="basic">Update user data</Heading>
        <UpdateUserDataForm />
      </Row>

      <Row type="vertical2">
        <Heading type="basic">Update password</Heading>
        <UpdatePasswordForm />
      </Row>
    </>
  );
}

export default Account;
