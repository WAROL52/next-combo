"use client";

import { Empty } from "antd";
import { XCard } from "../card/XCard";

export type XViewContentProps = {};

export function XViewContent({}: XViewContentProps) {
  return (
    <XCard title="Titre">
      <Empty />
    </XCard>
  );
}
