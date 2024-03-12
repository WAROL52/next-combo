import { PropsWithChildren } from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
export type XProviderProps = PropsWithChildren;
import { ConfigProvider } from "antd";
import frFR from "antd/locale/fr_FR";
export function XProvider({ children }: XProviderProps) {
  return (
    <AntdRegistry>
      <ConfigProvider locale={frFR}>{children}</ConfigProvider>
    </AntdRegistry>
  );
}
