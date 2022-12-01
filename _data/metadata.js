let data = {
	username: "danleatherman", // No leading @ here
	homeLabel: "danleatherman.com",
	homeUrl: "https://danleatherman.com/",
};

data.avatar = `https://v1.indieweb-avatar.11ty.dev/${encodeURIComponent(data.homeUrl)}/`;

module.exports = data;