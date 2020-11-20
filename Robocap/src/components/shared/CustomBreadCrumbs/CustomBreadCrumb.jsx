import React from "react";
import { Breadcrumb } from "antd";

const CustomBreadcrumb = ({ crumbs = [] }) => (
  <Breadcrumb separator=">" className="poppinsLight">
    {crumbs.map((crumb, index) => (
      <Breadcrumb.Item key={index} className="text-color">
        {crumb.data}
      </Breadcrumb.Item>
    ))}
  </Breadcrumb>
);
export default CustomBreadcrumb;
