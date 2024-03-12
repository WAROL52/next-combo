"use client";

import { Flex, List, Space } from "antd";
import { XCard } from "../card/XCard";
import clsx from "clsx";
export type XListProps = {};
import { motion } from "framer-motion";
import { XExtra } from "../extra/XExtra";

export function XList({}: XListProps) {
  return (
    <XCard
      //   isFetching={isFetching}
      //   isLoading={isPending}
      styles={{
        body: { padding: 15 },
      }}
      title={<Space>Count: {"data.length"}</Space>}
      extra={
        <XExtra
        //   schemaName={schemaName}
        //   loading={isFetching || isPending}
        //   onRefresh={refetch}
        />
      }
      className="my-0"
    >
      <div
        className="bg-slate-50 overflow-auto  shadow-inner rounded border lg:px-1 sm:px-0"
        style={{
          maxHeight: "80vh",
        }}
      >
        <List
          //   dataSource={data as any[]}
          renderItem={(item) => {
            return (
              <List.Item
                className={clsx("hover:bg-slate-200", {
                  //   "bg-slate-300": dataIdSelected === item.id,
                })}
              >
                <Flex
                  justify={"space-between"}
                  style={{ width: "100%" }}
                  className="px-3"
                >
                  <motion.div
                    whileHover={{
                      scale: 1.03,
                      transition: { duration: 0.3 },
                    }}
                    whileTap={{
                      scale: 0.97,
                      transition: { duration: 0.3 },
                    }}
                    className="cursor-pointer select-none "
                    // onClick={() => onDataIdSelected?.(item.id as number)}
                  >
                    {/* <ShowerAny value={item} /> */}
                  </motion.div>
                  {/* <WidgetBtnExtra
        modelName={widgetData.modelName}
        modelId={widgetData.modelId || -1}
      /> */}
                </Flex>
              </List.Item>
            );
          }}
        />
      </div>
    </XCard>
  );
}
