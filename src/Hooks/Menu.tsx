import { useState } from "react";
export default function BotaoMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  function OpenMenu() {
    setMenuOpen(true);
  }
  function CloseMenu() {
    setMenuOpen(false);
  }
  return{
    menuOpen, CloseMenu, OpenMenu
  }
}