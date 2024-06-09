import * as fs from "node:fs";
import * as path from "node:path";
import type { GatsbyNode } from "gatsby";
import * as yaml from "js-yaml";
import type { ActionType } from "./src/types";

export const createPages: GatsbyNode["createPages"] = async ({
  actions: { createPage },
}) => {
  const actionDirs = await fs.promises.readdir("./data/actions");

  for (const dir of actionDirs) {
    let actionYml: string;
    let versionYml: string;
    try {
      actionYml = await fs.promises.readFile(
        `./data/actions/${dir}/action.yml`,
        "utf-8",
      );
      versionYml = await fs.promises.readFile(
        `./data/actions/${dir}/version.yml`,
        "utf-8",
      );
    } catch (error) {
      console.warn(`Failed to read action.yaml in ${dir}`, String(error));
      continue;
    }

    const { name, description, inputs, outputs } = yaml.load(
      actionYml,
    ) as ActionType;
    const { major } = yaml.load(versionYml);
    createPage({
      path: `/${dir}/`,
      component: path.resolve("./src/templates/action.tsx"),
      context: {
        name: dir,
        action: {
          name,
          description,
          inputs,
          outputs,
        },
        version: {
          major,
        },
      },
    });
  }
};
