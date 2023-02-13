import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
  userAgent: "ti-medi-test/v.0.1",
});

const getData = (searchQuery: string) => {
  if (searchQuery != null) {
    const respuesta = octokit.request("GET /search/repositories", {
      q: searchQuery,

      headers: {
        accept: "application/vnd.github+json",
      },
    });
    return respuesta;
  }
};

export default getData;
