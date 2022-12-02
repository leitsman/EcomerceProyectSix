import Loged from "./Loged";
import LoginForm from "./LoginForm";
// john@gmail.com  john1234
const Login = () => {
  const token = localStorage.getItem("tokenUser");
  return <>{token ? <Loged /> : <LoginForm />}</>;
};

export default Login;
