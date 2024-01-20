import * as React from "react";
import { MessageCard } from "baseui/message-card";
import { colors } from "baseui/tokens";
import { useTranslations } from "../hooks/use-translations";
import { DEFAULT_SERVICE_CARD_IMG } from "./constants";

export function ServiceCard({ serviceDetails }) {
  const t = useTranslations();
  return (
    <MessageCard
      heading={serviceDetails.title}
      buttonLabel={t("home.read_more")}
      onClick={() => {}}
      paragraph={serviceDetails.description}
      image={{
        src: serviceDetails.img || DEFAULT_SERVICE_CARD_IMG,
      }}
      // You can get the color tokens from here: https://baseweb.design/components/tokens/#primitive-color-tokens
      backgroundColor={colors.yellow50}
      overrides={{
        Root: { style: { marginBottom: "30px" } },
        Button: {
          props: {
            overrides: {
              BaseButton: { style: { backgroundColor: colors.brown100 } },
            },
          },
        },
      }}
    />
  );
}
