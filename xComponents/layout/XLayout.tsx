import { PropsWithChildren } from "react";
import { XCard } from "../card/XCard";
import { XTitleOfLayout } from "../title/XTitleOfLayout";

export type XLayoutProps = PropsWithChildren<{
  layoutName: string;
  pageName?: string;
}>;

export async function XLayout({
  children,
  layoutName,
  pageName,
}: XLayoutProps) {
  return (
    <XCard
      title={<XTitleOfLayout layoutName={layoutName} />}
      styles={{ body: { padding: 5 } }}
    >
      <div className="bg-slate-300 border p-3">{children}</div>
    </XCard>
  );
}
