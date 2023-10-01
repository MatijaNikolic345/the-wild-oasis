import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;
const Aligner = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
function Login() {
  return (
    <LoginLayout>
      <Aligner>
        <Logo type="login" />
      </Aligner>
      <Aligner>
        <Heading as="h4">Log in to your account</Heading>
      </Aligner>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
