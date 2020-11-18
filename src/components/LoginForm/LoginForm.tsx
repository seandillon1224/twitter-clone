import * as React from 'react';

const LoginForm = () => {
  const [state, setState] = React.useState({
    username : '',
    passsword: ''
  });

  React.useEffect(() => {

  }, [])


const {username, passsword} = state

const handleChange = (e) => {
  const {target ,value} = e;
  console.log(target, value)
 setState({
   ...state,
   [target] : value
 })
}

  return (
    <>
  <input 
  name='username' value={username} onChange={handleChange} type='text'/>
  <input type='text'/>
  <span>  {username}  </span>
  <span></span>
  </>
  );
};


export default LoginForm;
