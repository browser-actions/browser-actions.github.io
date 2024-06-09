import { Box } from "grommet";
import Prism from "prismjs";
import * as React from "react";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-yaml";

interface Props {
  children: React.ReactNode;
}

export const CodeBlock: React.FC<Props> = ({ children }) => {
  const ref = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    if (!ref.current) {
      return;
    }

    Prism.highlightElement(ref.current, false);
  }, []);

  return (
    <Box background="light-2" round="small">
      <pre style={{ background: "none" }}>
        <code ref={ref} className="language-yml">
          {children}
        </code>
      </pre>
    </Box>
  );
};
