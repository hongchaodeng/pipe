import React from "react";
import { createDecoratorRedux } from "../../../.storybook/redux-decorator";
import { InsightHeader } from "./insight-header";

export default {
  title: "INSIGHTS/InsightHeader",
  component: InsightHeader,
  decorators: [createDecoratorRedux({})],
};

export const overview: React.FC = () => <InsightHeader />;
