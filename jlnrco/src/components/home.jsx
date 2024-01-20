import * as React from "react";
import { useStyletron } from "styletron-react";
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationItem as NavigationItem,
  StyledNavigationList as NavigationList,
} from "baseui/header-navigation";
import { StyledLink as Link } from "baseui/link";
import { Button } from "baseui/button";
import CALogo from "../assets/ca_logo.jpeg";
import { NavigationBar } from "./navigation-bar";
import { OurServices } from "./our-services";
import { Footer } from "./footer";

export default function HomePage() {
  return (
    <>
      <NavigationBar />
      <OurServices />
      <Footer />
    </>
  );
}
