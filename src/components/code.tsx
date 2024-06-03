import { Box } from "grommet";
import type * as React from "react";

interface Props {
  children: React.ReactNode;
}

export const CodeBlock: React.FC<Props> = ({ children }) => (
  <Box
    background="light-2"
    pad={{ horizontal: "medium", vertical: "small" }}
    round="small"
  >
    <pre>
      <code>{children}</code>
    </pre>
  </Box>
);
