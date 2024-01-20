import MainConfig from "../config/main-config";

export function useHomePageData() {
  const homePageConfig = MainConfig["home"];
  return homePageConfig;
}

export default useHomePageData;
