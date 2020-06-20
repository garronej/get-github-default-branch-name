import * as assert from "assert";
import { getGithubDefaultBranchName, getGithubDefaultBranchNameSync } from "..";

assert(
    getGithubDefaultBranchNameSync({
        "owner": "garronej",
        "repo": "evt",
    }) === "develop",
);

(async () => {
    const defaultBranchName = await getGithubDefaultBranchName({
        "owner": "garronej",
        "repo": "run-exclusive",
    });

    assert(defaultBranchName === "develop");

    console.log("PASS");
})();
