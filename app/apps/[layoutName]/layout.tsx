import { XLayout } from "@/xComponents/layout/XLayout";
import { PropsWithChildren } from "react";
export type LayoutProps = PropsWithChildren<{
  params: {
    layoutName: string;
    pageName?: string;
  };
}>;

export default async function layout({ children, params }: LayoutProps) {
  return <XLayout {...params}>{children}</XLayout>;
}
