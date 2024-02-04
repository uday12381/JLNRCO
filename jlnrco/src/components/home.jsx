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
import { Banner, KIND } from "baseui/banner";

// @ts-ignore
import DeleteAlt from "baseui/icon/delete-alt";

function ArtworkIcon({ size }: { size: string }) {
  return <DeleteAlt size={size} aria-label="icon label" />;
}

export default function HomePage() {
  return (
    <>
      <NavigationBar />
      <Banner
        title="This site is under construction. Apologies for the inconvenience..."
        kind={KIND.negative}
        artwork={{
          icon: ArtworkIcon,
        }}
      >
        Please contact us at{" "}
        {<a href="mailto:jlnrco@gmail.com">jlnrco@gmail.com</a>}.
      </Banner>
      <OurServices />
      <Footer />
    </>
  );
}
