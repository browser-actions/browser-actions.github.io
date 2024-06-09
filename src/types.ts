type ActionInputType = {
  description: string;
  required?: boolean;
  default?: string;
  deprecationMessage?: string;
};

type ActionOutputType = {
  description: string;
};

type ActionJavaScriptRunsType = {
  using: string;
  main: string;
  pre?: string;
  "pre-if"?: string;
  post?: string;
  "post-if"?: string;
};

export type ActionType = {
  name: string;
  description: string;
  author?: string;
  inputs?: Record<string, ActionInputType>;
  outputs?: Record<string, ActionOutputType>;
  runs: ActionJavaScriptRunsType;
};

export type VersionType = {
  major: string;
};
