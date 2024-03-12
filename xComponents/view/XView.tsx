"use client";

import { Col, Empty, Row } from "antd";
import { XViewTitle } from "./XViewTitle";
import { XViewContent, XViewContentProps } from "./XViewContent";
import { ReactNode } from "react";
import { XViewList } from "./XViewList";
import { XViewCard } from "./XViewCard";
import { XViewTable } from "./XViewTable";

export type XViewProps = {
  title?: ReactNode;
  mode: "List" | "Card" | "Table";
};

export function XView({ title, mode }: XViewProps) {
  let children = null;
  if (mode == "List") children = <XViewList />;
  else if (mode == "Card") children = <XViewCard />;
  else if (mode == "Table") children = <XViewTable />;
  else children = <Empty />;
  return (
    <Row>
      <Col
        span={24}
        className="bg-slate-200 shadow-inner "
        style={{ padding: "9px" }}
      >
        {children}
      </Col>
    </Row>
  );
}
