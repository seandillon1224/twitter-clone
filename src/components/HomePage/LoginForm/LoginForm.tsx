import * as React from "react";
import Button from "components/Button";

const LoginForm = () => {
  const [state, setState] = React.useState({
    username: "",
    password: "",
  });

  const { username, password } = state;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, key: any): void => {
    const {target: {value}} = e;
    setState({
      ...state,
      [key]: value,
    });
  };

  return (
    <>
      <input
        name="username"
        value={username}
        onChange={(e) => handleChange(e, 'username')}
        type="text"
      />
      <Button invert/>
      <input name="password" type="password" value={password} onChange={(e) => handleChange(e, 'password')} />
      <span> {username} </span>
      <span></span>
    </>
  );
};

export default LoginForm;
