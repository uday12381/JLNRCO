import * as React from "react";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import { ServiceCard } from "./service-card";
import { useStyletron } from "styletron-react";
import { useTranslations } from "../hooks/use-translations";
import { useHomePageData } from "../hooks/use-home-page-data";

export function OurServices() {
  const [css] = useStyletron();
  const t = useTranslations();
  const {
    ourServices: { items: services },
  } = useHomePageData();
  return (
    <div>
      <h1
        className={css({
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        })}
      >
        {t("home.our_services")}
      </h1>
      <FlexGrid
        flexGridColumnCount={[1, 2, 3, 4]}
        flexGridColumnGap="scale200"
        flexGridRowGap="scale200"
      >
        {services.map((item, idx) => (
          <FlexGridItem>
            <ServiceCard
              key={idx}
              serviceDetails={{
                title: t(item.title),
                description: t(item.description),
                img: item.img,
              }}
            />
          </FlexGridItem>
        ))}
      </FlexGrid>
    </div>
  );
}

export default OurServices;
