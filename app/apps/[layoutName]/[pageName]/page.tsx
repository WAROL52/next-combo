import { XPage } from "@/xComponents/page/XPage";
import { PropsWithChildren } from "react";

export type PageProps = PropsWithChildren<{
  params: {
    layoutName: string;
    pageName?: string;
  };
}>;

export default async function Page({ params }: PageProps) {
  return <XPage {...params} />;
}
