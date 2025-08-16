import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
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
      <FormRowVertical label="Email address">
        <Input
        disabled={isLoading}
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
        disabled={isLoading}
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button disabled={isLoading} variation="primary" size="large">{isLoading ? <Spinner/> : "Login"}</Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
