import React from "react";
import { Button, Menu } from "semantic-ui-react";

export default function SignedOut(props) {
  return (
    <div>
      <Menu.Item>
        <Button positive onClick={props.signIn}>
          Giriş yap
        </Button>
        <Button positive style={{ marginLeft: "0.5em" }}>
          Kayıt Ol
        </Button>
      </Menu.Item>
    </div>
  );
}
