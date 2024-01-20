import * as React from "react";
import { useStyletron } from "styletron-react";
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationItem as NavigationItem,
  StyledNavigationList as NavigationList,
} from "baseui/header-navigation";
import CALogo from "../assets/ca_logo.jpeg";
import { useHomePageData } from "../hooks/use-home-page-data";
import { useTranslations } from "../hooks/use-translations";

export const NavigationBar = () => {
  const [css] = useStyletron();
  const {
    navBar: { items: navBarDetails },
  } = useHomePageData();
  const t = useTranslations();
  return (
    <HeaderNavigation>
      <NavigationList $align={ALIGN.left}>
        <NavigationItem>
          <img src={CALogo} height="60px" alt="ca-logo" />
        </NavigationItem>
      </NavigationList>
      <NavigationList $align={ALIGN.CENTER} />
      <NavigationList $align={ALIGN.RIGHT}>
        <div className={css({ display: "flex", flexDirection: "column" })}>
          <NavigationList>
            {navBarDetails[0].map((item, idx) => (
              <NavigationItem style={{ whiteSpace: "nowrap" }}>
                <a
                  className={css({
                    textDecoration: "None",
                  })}
                  href="/"
                >
                  {t(item.title)}
                </a>
              </NavigationItem>
            ))}
          </NavigationList>
          <NavigationList>
            {navBarDetails[1].map((item, idx) => (
              <NavigationItem>
                <a
                  className={css({
                    textDecoration: "None",
                    paddingRight: "8px",
                    ...(idx < navBarDetails[0].length && {
                      borderRightStyle: "solid",
                    }),
                  })}
                  href="/"
                >
                  {t(item.title)}
                </a>
              </NavigationItem>
            ))}
          </NavigationList>
        </div>
      </NavigationList>
    </HeaderNavigation>
  );
};
