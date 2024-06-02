import { Anchor, type AnchorProps } from "grommet";

interface Props {
  children?: React.ReactNode;
}

export const ExternalLink: React.FC<Props & AnchorProps> = ({
  children,
  ...props
}) => {
  return (
    <Anchor {...props} target="_blank" rel="noopener noreferrer">
      {children}
    </Anchor>
  );
};
