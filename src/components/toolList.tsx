import { Link } from "gatsby";
import { Box, Button, Heading } from "grommet";
import type * as React from "react";

interface ToolListProps {
  children: React.ReactNode;
}

export const ToolList: React.FC<ToolListProps> = ({ children }) => {
  return (
    <Box direction="row" align="center" justify="center" fill="horizontal">
      {children}
    </Box>
  );
};

interface ToolListItemProps {
  children?: React.ReactNode;
  title: string;
  linkTo: string;
  logo: React.ReactNode;
}

export const ToolListItem: React.FC<ToolListItemProps> = ({
  title,
  linkTo,
  logo,
}) => {
  return (
    <Box align="center" justify="center" margin="medium">
      <Button as={Link} {...{ to: linkTo }}>
        <Box margin="medium" align="center">
          {logo}
        </Box>
        <Heading level="3" textAlign="center" size="small" margin="none">
          {title}
        </Heading>
      </Button>
    </Box>
  );
};
