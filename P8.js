import Github from "./P8_run.mjs";
const github = new Github();

// Search input
const searchUser = "jaivin14";

github.getUser(searchUser).then((data) => {
  if (data.profile.message === "Not Found") {
    console.log("User not found");
  } else {
    console.log("User profile:");
    console.log(data.profile.login);
    console.log(data.profile.id);
    console.log(data.profile.name);
    console.log(data.profile.followers);
    console.log("User repos:");
    data.repos.map((repo) => {
      console.log("repo:",repo.name);
      console.log("language:",repo.language);
      console.log("watchers:",repo.watchers_count);
      console.log("forks:",repo.forks_count);
    });
  }
});
