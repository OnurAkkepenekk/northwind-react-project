import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignedOut from "./SignedOut";
import SignIn from "./SignIn";
import { useState } from "react";
import { useHistory } from "react-router-dom";
export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  let history = useHistory();
  function handleSignOut() {
    setIsAuthenticated(false);
    history.push("/");
  }
  function handleSignIn() {
    setIsAuthenticated(true);
  }
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="Home" />
          <Menu.Item name="Message" />
          <Menu.Menu position="right">
            <CartSummary />
            {isAuthenticated ? (
              <SignIn signOut={handleSignOut} />
            ) : (
              <SignedOut signIn={handleSignIn} />
            )}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
