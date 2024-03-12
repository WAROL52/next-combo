"use client";

import { Col, Divider, Row, Segmented, Typography } from "antd";
import {
  AppstoreOutlined,
  BarsOutlined,
  InsertRowAboveOutlined,
} from "@ant-design/icons";
import { ReactNode } from "react";
export type XViewTitleProps = {
  onChange?: (value: string) => void;
  title?: ReactNode;
  value?: string;
};

export function XViewTitle({ onChange, title, value }: XViewTitleProps) {
  return (
    <Row className="border">
      <Col span={22}>
        <Divider className="my-0" orientation="left" orientationMargin={0}>
          <Typography.Title className="font-mono" level={4}>
            {title}
          </Typography.Title>
        </Divider>
      </Col>
      <Col span={2}>
        {/* <Segmented
          block
          value={value}
          className="shadow"
          onChange={(e) => onChange?.(String(e))}
          options={[
            { value: "List", icon: <BarsOutlined /> },
            { value: "Card", icon: <AppstoreOutlined /> },
            { value: "Table", icon: <InsertRowAboveOutlined /> },
          ]}
        /> */}
      </Col>
    </Row>
  );
}
