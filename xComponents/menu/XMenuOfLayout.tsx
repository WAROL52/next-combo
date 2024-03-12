"use client";

import { Segmented } from "antd";

export type XMenuOfLayoutProps = {};

export function XMenuOfLayout({}: XMenuOfLayoutProps) {
  return (
    <Segmented
      options={["Daily", "Weekly", "Monthly", "Quarterly", "Yearly"]}
    />
  );
}
