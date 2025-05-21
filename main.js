let input = document.querySelector("input"),
  btn = document.querySelector(".btn"),
  showData = document.querySelector(".show-data");


// set my username as devalt 
input.value="Fares-Y-Sayed"

window.onload = function () {
  getRepos();
};

btn.onclick = function () {
  getRepos();
};



function getRepos() {
  if (input.value == "") {
    showData.innerHTML = "<span> Please Write a GitHub Username</span> ";
  } else {
    fetch(`https://api.github.com/users/${input.value}/repos`)
      .then((res) => res.json())
      .then((repos) => {
        showData.innerHTML = "";

        repos.forEach((repo, index) => {
          console.log(repo);
          let repoName = document.createElement("div");
          // repoName.innerHTML = `${index + 1} - ${repo.name}`;
          showData.appendChild(repoName);

          let span = document.createElement("span");
          span.innerHTML = `${index + 1} - ${repo.name}`;
          span.style.width = "200px";
          repoName.appendChild(span);

          let urlName = document.createElement("a");
          urlName.appendChild(document.createTextNode("Visit Site If Exist"));
          urlName.setAttribute("target", "_blank");
          urlName.href = ` https://${input.value}.github.io/${repo.name}/ `;
          repoName.appendChild(urlName);

          let visitRepo = document.createElement("a");
          visitRepo.appendChild(document.createTextNode("Visit The repo"));
          visitRepo.setAttribute("target", "_blank");
         visitRepo.href = `https://github.com/${input.value}/${repo.name}`;
          repoName.appendChild(visitRepo);
        });
        console.log(repos.length);
      });
  }
}

