"use client";

import { Card, CardProps } from "antd";

export type XCardProps = CardProps

export function XCard(cardProps: XCardProps) {
  return <Card {...cardProps} />
}