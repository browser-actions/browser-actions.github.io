import fs from "node:fs/promises";
import semver from "semver";

const ACTION_NAMES = [
  "release-chrome-extension",
  "release-firefox-addon",
  "setup-chrome",
  "setup-edge",
  "setup-firefox",
];
const ACTIONS_ROOT = "./data/actions";

const { GITHUB_TOKEN } = process.env;

const getLatestTagNames = async (owner, repo) => {
  const url = `https://api.github.com/repos/${owner}/${repo}/releases/latest`;
  const headers = GITHUB_TOKEN
    ? { Authorization: `token ${GITHUB_TOKEN}` }
    : {};
  const res = await fetch(url, { headers });
  return (await res.json()).tag_name;
};

const run = async () => {
  for (const name of ACTION_NAMES) {
    const actionDest = `${ACTIONS_ROOT}/${name}/action.yml`;
    const url = `https://raw.githubusercontent.com/browser-actions/${name}/latest/action.yml`;
    const content = await fetch(url).then((res) => res.text());
    await fs.mkdir(`${ACTIONS_ROOT}/${name}`, { recursive: true });
    await fs.writeFile(actionDest, content);

    console.log(`Fetched ${name} action.yml to ${actionDest}`);
  }

  for (const name of ACTION_NAMES) {
    const versionDest = `${ACTIONS_ROOT}/${name}/version.yml`;
    const latestTag = await getLatestTagNames("browser-actions", name);
    if (!latestTag) {
      console.error(`Failed to get latest tag for ${name}`);
      continue;
    }
    const versionContent = `major: v${semver.major(latestTag)}
`;
    await fs.writeFile(versionDest, versionContent);

    console.log(`Fetched ${name} version to ${versionDest}`);
  }
};

await run();
