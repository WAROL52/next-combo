"use client";
import { Style, StyleOptions, createAvatar } from "@dicebear/core";
import { Avatar } from "antd";
import { AvatarProps } from "antd/lib";
import { useMemo } from "react";

export type XAvatarProps<O extends {}> = AvatarProps & {
  collection: Style<O>;
  options?: StyleOptions<O>;
};

export function XAvatar<O extends {}>({
  collection,
  options,
  ...avatarProps
}: XAvatarProps<O>) {
  const src = useMemo(() => {
    return createAvatar(collection, options).toDataUriSync();
  }, [collection, options]);

  return <Avatar {...avatarProps} src={src} />;
}
