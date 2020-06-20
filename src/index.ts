import { Octokit } from "@octokit/rest";
import * as st from "scripting-tools";

export const previousResults: Record<string, string> = {};

const getOctokit = (() => {
    let octokit: Octokit | undefined = undefined;

    return function(): Octokit {
        if (octokit !== undefined) {
            return octokit;
        }

        octokit = new Octokit();

        return getOctokit();
    };
})();

export async function getGithubDefaultBranchName(params: {
    owner: string;
    repo: string;
}): Promise<string> {
    const { owner, repo } = params;

    const key = `${owner}/${repo}`;

    if (key in previousResults) {
        return previousResults[key];
    }

    const octokit = getOctokit();

    const {
        data: { default_branch },
    } = await octokit.repos.get({
        owner,
        repo,
    });

    previousResults[key] = default_branch;

    return getGithubDefaultBranchName(params);
}

export function getGithubDefaultBranchNameSync(params: {
    owner: string;
    repo: string;
}): string {
    const { owner, repo } = params;

    const key = `${owner}/${repo}`;

    if (key in previousResults) {
        return previousResults[key];
    }

    previousResults[key] = st.execSync(`${process.argv[0]} ${__filename}`, {
        "env": {
            "OWNER": owner,
            "REPO": repo,
        },
    });

    return getGithubDefaultBranchNameSync(params);
}

if (require.main === module) {
    (async () => {
        const defaultBranchName = await getGithubDefaultBranchName({
            "owner": process.env["OWNER"] as string,
            "repo": process.env["REPO"] as string,
        }).catch(error => error);

        if (defaultBranchName instanceof Error) {
            console.log(`ERROR: ${defaultBranchName.message}`);
            process.exit(1);
        }

        process.stdout.write(defaultBranchName);

        process.exit(0);
    })();
}
