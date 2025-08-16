import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRow from "../../ui/FormRow";
import useLogin from "./useLogin";
import Spinner from "../../ui/Spinner";
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {isLoading , loginUser} = useLogin("");

  function handleSubmit(e) {
    e.preventDefault();
    loginUser({email , password} , {
      onSettled:()=>{
        setEmail(""),
        setPassword("")
      }
    }
  );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email address">
        <Input
        disabled={isLoading}
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormRow>
      <FormRow label="Password">
        <Input
        disabled={isLoading}
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRow>
      <FormRow>
        <Button disabled={isLoading} variation="primary" size="large">{isLoading ? <Spinner/> : "Login"}</Button>
      </FormRow>
    </Form>
  );
}

export default LoginForm;
