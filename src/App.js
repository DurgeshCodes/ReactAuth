import SignIn from "./components/Pages/SignIn";
import SignUp from "./components/Pages/SignUp";
import { AuthProvider } from "./contexts/authContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/Pages/ForgotPassword";
console.log(
  process.env.REACT_APP_FIREBASE_API_KEY,
  process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  process.env.REACT_APP_FIREBASE_PROJECT_ID,
  process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  process.env.REACT_APP_FIREBASE_MESSEGING_SENDER_ID,
  process.env.REACT_APP_FIREBASE_APP_ID
);
function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/signup" component={SignUp} />
          <PrivateRoute path="/" exact component={Dashboard} />
          <Route path="/signin" component={SignIn} />
          <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
