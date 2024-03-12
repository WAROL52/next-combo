"use client";

import { Col, Row } from "antd";
import { XMenuOfLayout } from "../menu/XMenuOfLayout";
import { XAvatar } from "../avatar/XAvatar";
import { shapes } from "@dicebear/collection";
import { useMemo } from "react";
export type XTitleOfLayoutProps = {
  layoutName: string;
};

export function XTitleOfLayout({ layoutName }: XTitleOfLayoutProps) {
  const options = useMemo(() => {
    return {
      seed: layoutName,
    };
  }, [layoutName]);
  return (
    <Row gutter={16}>
      <Col span={24} style={{ margin: "13px 0 10px" }}>
        <XAvatar
          collection={shapes}
          options={options}
          size={"large"}
          shape="square"
          className="shadow"
        />{" "}
        <span className="capitalize">{layoutName}</span>
      </Col>
      <Col span={24} style={{ margin: "0px 0 10px 0px" }}>
        <XMenuOfLayout />
      </Col>
    </Row>
  );
}
