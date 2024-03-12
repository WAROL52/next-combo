"use client";

import { Col, Row } from "antd";
import { XList } from "../list/XList";
import { XViewContent } from "./XViewContent";

export type XViewListProps = {};

export function XViewList({}: XViewListProps) {
  return (
    <Row gutter={8}>
      <Col span={24} lg={7}>
        <XList />
      </Col>
      <Col span={24} lg={17}>
        <XViewContent />
      </Col>
    </Row>
  );
}
