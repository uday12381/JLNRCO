import * as React from "react";
import { useStyletron } from "styletron-react";
import { useTranslations } from "../hooks/use-translations";
import { useHomePageData } from "../hooks/use-home-page-data";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import { colors } from "baseui/tokens";

export function Footer() {
  const { footer: footerData } = useHomePageData();
  const t = useTranslations();
  const [css] = useStyletron();
  return (
    <div
      className={css({
        width: "80%",
        backgroundColor: colors.gray700,
        color: colors.gray100,
        paddingLeft: "10%",
        paddingRight: "10%",
        paddingBottom: "5vh",
        paddingTop: "2vh",
      })}
    >
      <FlexGrid
        flexGridColumnCount={[1, 2, 3]}
        flexGridColumnGap="scale200"
        flexGridRowGap="scale200"
      >
        <FlexGridItem>
          <div
            className={css({ marginBlockStart: "1em", marginBlockEnd: "1em" })}
          >
            <div>{t(footerData.orgName)}</div>
            <div>{footerData.address}</div>
            <div>{t("footer.phone") + ": " + footerData.phone}</div>
            <div>{t("footer.skype") + ": " + footerData.skype}</div>
          </div>
        </FlexGridItem>
        <FlexGridItem>
          <h3>{t(footerData.quickLinks.title)}</h3>
          {footerData.quickLinks.items.map((item) => (
            <div>{t(item.title)}</div>
          ))}
        </FlexGridItem>
        <FlexGridItem>
          <h3>{t(footerData.usage.title)}</h3>
          {footerData.usage.items.map((item) => (
            <div>{t(item.title)}</div>
          ))}
        </FlexGridItem>
      </FlexGrid>
    </div>
  );
}
