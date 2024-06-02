import * as fs from "node:fs";
import * as path from "node:path";
import type { GatsbyNode } from "gatsby";
import * as yaml from "js-yaml";
import type { ActionType } from "./src/types";

export const createPages: GatsbyNode["createPages"] = async ({
  actions: { createPage },
}) => {
  const actionFiles = (await fs.promises.readdir("./data/actions")).filter(
    (file) => file.endsWith(".yaml") || file.endsWith(".yml"),
  );

  for (const file of actionFiles) {
    const slug = path.basename(file, path.extname(file));
    const content = await fs.promises.readFile(
      `./data/actions/${file}`,
      "utf-8",
    );
    const { name, description, inputs, outputs } = yaml.load(
      content,
    ) as ActionType;
    createPage({
      path: `/${slug}/`,
      component: path.resolve("./src/templates/action.tsx"),
      context: {
        name: slug,
        action: {
          name,
          description,
          inputs,
          outputs,
        },
      },
    });
  }
};
