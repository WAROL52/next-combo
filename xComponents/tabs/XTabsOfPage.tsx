"use client";

import { Segmented, Tabs } from "antd";
import { TabsProps } from "antd/lib";
import { XView, XViewProps } from "../view/XView";
import {
  AppstoreOutlined,
  BarsOutlined,
  InsertRowAboveOutlined,
} from "@ant-design/icons";
import React from "react";

export type XTabsOfPageProps = {};
type Mode = XViewProps["mode"];
export function XTabsOfPage({}: XTabsOfPageProps) {
  const [mode, setMode] = React.useState<Mode>("List");
  return (
    <Tabs
      defaultActiveKey="1"
      items={items.map((item) => ({
        key: String(item),
        label: "Tab " + item,
        children: <XView title={"Tab " + item} mode={mode} />,
        closeIcon: null,
      }))}
      type="editable-card"
      hideAdd
      size="small"
      style={{ padding: 5 }}
      tabBarExtraContent={
        <Segmented
          block
          value={mode}
          className="shadow"
          onChange={(e) => setMode(String(e) as Mode)}
          options={[
            { value: "List", icon: <BarsOutlined /> },
            { value: "Card", icon: <AppstoreOutlined /> },
            { value: "Table", icon: <InsertRowAboveOutlined /> },
          ]}
        />
      }
    />
  );
}
const items = [1, 2, 3];
