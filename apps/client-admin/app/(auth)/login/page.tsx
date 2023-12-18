const LoginPage = () => {
  return (
    <>
      <h1>Log in</h1>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button>Sign in</button>
      <label htmlFor="remember-me">Remember me</label>
      <input id="remember-me" type="checkbox" />
      <a href="/forgot-password">Forgot Password?</a>
    </>
  );
};

export default LoginPage;
