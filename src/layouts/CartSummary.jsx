import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown } from "semantic-ui-react";
export default function CartSummary() {
  return (
    <div>
      <Dropdown item text="Sepetiniz">
        <Dropdown.Menu>
          <Dropdown.Item>Asus Laptop</Dropdown.Item>
          <Dropdown.Item>Russian</Dropdown.Item>
          <Dropdown.Item>Spanish</Dropdown.Item>
          <Dropdown.Divider></Dropdown.Divider>
          <Dropdown.Item as={NavLink} to="/cart">Sepete git</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
