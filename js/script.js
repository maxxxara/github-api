// elements
var searchInput = document.querySelector("#search__input");
var searchButton = document.querySelector(".search-button");
var imgEl = document.querySelector(".user__image-img");
var nameEl = document.querySelector(".user__texts-name");
var linkEl = document.querySelector(".user__texts-link");
var bioEl = document.querySelector(".user__texts-bio");
var reposEl = document.querySelector(".user__info-repos");
var followersEl = document.querySelector(".user__info-followers");
var followingEl = document.querySelector(".user__info-following");
var cityEl = document.querySelector(".user__link-city");
var twitterEl = document.querySelector(".user__link-twitter");
var addressEl = document.querySelector(".user__link-address");
var siteEl = document.querySelector(".user-site");
//////////////

function f(username) {
	fetch("https://api.github.com/users/" + username)
		.then(response => response.json())
		.then(function(data){
			console.log(data);
			if(data.message !== "Not Found") {
				document.querySelector('.user').setAttribute("style", "display: block;");
				document.querySelector('.msg').setAttribute("style", "display: none;");
				var {login, bio, followers, following, html_url, avatar_url, public_repos, twitter_username, location, } = data;
				
				if (bio == null) {
					bio = "There is no bio yet."
				};
				if (location == null) {
					location = "No location.";
				}
				if (twitter_username == null) {
					twitter_username = "Twitter not is defined."
				}

				console.log(following);
				imgEl.setAttribute("src", avatar_url);
				nameEl.innerText = login;
				linkEl.innerText = login;
				bioEl.innerText = bio;
				reposEl.innerText = public_repos;
				followersEl.innerText = followers;
				followingEl.innerText = following;
				cityEl.innerText = location;
				twitterEl.innerText = twitter_username;
				addressEl.innerText = location;
				siteEl.setAttribute("src", html_url);
			} else {
				alert("user not founded");
			}
		})
}

searchButton.onclick = function() {
	var value = searchInput.value;
	f(value);
}





searchInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    searchButton.click();
  }
});