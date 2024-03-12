import { XTabsOfPage } from "../tabs/XTabsOfPage";

export type XPageProps = {
  layoutName: string;
  pageName?: string;
};

export async function XPage({}: XPageProps) {
  return <XTabsOfPage />;
}
