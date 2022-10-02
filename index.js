const { Telegraf } = require("telegraf");
const bot = new Telegraf("5671651112:AAHWGFZbsswaOGAH93dUyj4BmCo6f2s0yYU");
const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(
  "https://ehkydrmhfdecamvznsrg.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVoa3lkcm1oZmRlY2Ftdnpuc3JnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2Mjk4ODQ1MCwiZXhwIjoxOTc4NTY0NDUwfQ.WJVIpqQ6Mv8XQt00qn3l90Kd6L2m0P-FIuicdxMIMZg"
);

/**
 * -Pouvoir mettre des pubs et payer
 *-Faire bouton My
 * - Langue
 * -Une fois le bot rendu demander comment appeler le bot et changer dans le command help pour le nom du bot
 */

bot.command("start", (ctx) => {
  ctx.reply("Send keywords to find groups, channels or bots.", {
    reply_markup: {
      keyboard: [
        [{ text: "Channel 📢" }, { text: "Group 👥" }],
        [{ text: "🤖Bots " }, { text: "🏷Tags" }],
        [{ text: "❓Help" }, { text: "👤My" }],
      ],
    },
  });
});

bot.hears("❓Help", (ctx) => {
  ctx.replyWithHTML(`Welcome to use @...

  /start - start
  /info - Show link info
  /help - help!`);
});

bot.hears("Channel 📢", async (ctx) => {
  displayNav(ctx, 0, "channels");
});

bot.hears("Group 👥", (ctx) => {
  displayNav(ctx, 0, "groups");
});

bot.hears("🤖Bots", (ctx) => {
  ctx.replyWithHTML(
    `
[AD] 🔥 This ad is for rent, buy contact @EasyTGAdminBot.

Select the category you are interested in 
  `,
    {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "🎧 Music", callback_data: "M" },
            { text: "🕹 Games", callback_data: "G" },
          ],
          [
            { text: "🛠 Utility", callback_data: "U" },
            { text: "📈 Statistics", callback_data: "S" },
          ],
          [
            { text: "📊 Poll", callback_data: "P" },
            { text: "✈️ Telegram", callback_data: "T" },
          ],
          [
            { text: "📦 File", callback_data: "F" },
            { text: "🎥 Entertainment", callback_data: "E" },
          ],
          [
            { text: "🔠 Information", callback_data: "I" },
            { text: "🔔 Notifications", callback_data: "N" },
          ],
          [
            { text: "👮‍♀️ Assistant", callback_data: "A" },
            { text: "🖼 Media", callback_data: "ME" },
          ],
          [{ text: "↩️ Back", callback_data: "B" }],
        ],
      },
    }
  );
});

bot.hears("🏷Tags", (ctx) => {
  ctx.replyWithHTML(
    `[AD] 🔥 This ad is for rent, buy contact @EasyTGAdminBot.

    Select the category you are interested in 
      `,
    {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "👥 Community", callback_data: "CO" },
            { text: "🏢 Local", callback_data: "LO" },
          ],
          [
            { text: "🗣 Chatting", callback_data: "CH" },
            { text: "📡 News", callback_data: "NE" },
          ],
          [
            { text: "💻 Technology", callback_data: "TH" },
            { text: "🐞 Programming", callback_data: "PR" },
          ],
          [
            { text: "🎮 Games @ Apps", callback_data: "GA" },
            { text: "🎞 Vidéos & Movies", callback_data: "MO" },
          ],
          [
            { text: "🎧 Music", callback_data: "MU" },
            { text: "👁 ACG", callback_data: "AC" },
          ],
          [
            { text: "🎓 Education", callback_data: "ED" },
            { text: "💸 Cryptocurrencies", callback_data: "CR" },
          ],
          [
            { text: "💰 Financing", callback_data: "FI" },
            { text: "🎰 Betting", callback_data: "BE" },
          ],
          [
            { text: "👙 NSFW", callback_data: "NS" },
            { text: "👷 Fuck GFW", callback_data: "FU" },
          ],
          [
            { text: "✈️ Telegram", callback_data: "TE" },
            { text: "🛍 Shop", callback_data: "SH" },
          ],
          [{ text: "↩️ Back", callback_data: "Backtags" }],
        ],
      },
    }
  );
});

bot.hears("👤My", async (ctx) => {
  ctx.replyWithHTML(
    `
  👏 Welcome Eden

  `,
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: "🏁 Language", callback_data: "language" }],
          [
            { text: "🎁 Invitation", callback_data: "invitation" },
            { text: "💹 Promotions", callback_data: "promotion" },
          ],
          [
            { text: "❤️ Likes", callback_data: "likes" },
            { text: "🌐 My links", callback_data: "links" },
          ],
          [
            { text: "🌐 My adds links", callback_data: "mlinks" },
            { text: "Settings", callback_data: "settings" },
          ],
        ],
      },
    }
  );
});
bot.action("language", async (ctx) => {
  ctx.deleteMessage();
  ctx.sendMessage(
    `OK. Choose your language:
  `,
    {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "🇺🇸 English", callback_data: "english" },
            { text: "🇨🇳 Chinese", callback_data: "chinese" },
          ],
          // [
          //   { text: "🇯🇵 Japan", callback_data: "japan" },
          //   { text: "🇷🇺 Russia", callback_data: "russia" },
          // ],
          // [
          //   { text: "🇪🇬 Egypt", callback_data: "egypt" },
          //   { text: "🇪🇸 Spain", callback_data: "spain" },
          // ],
          // [
          //   { text: "🇻🇳 Vietnamise", callback_data: "vietnamise" },
          //   { text: "🇩🇰 Danemark", callback_data: "danemark" },
          // ],
        ],
      },
    }
  );
});
bot.action("invitation", (ctx) => {
  ctx.replyWithHTML(
    `🪓 Max adjustable discount: 10% Off

  Click to copy the invite code below
  
  👉 Have to be defined by mohammed 
  
  Send it to your friends to earn commissions
  
  💡 Tip: You will get 10% commission for using this invitation code`,
    {
      reply_markup: {
        inline_keyboard: [[{ text: "close", callback_data: "B" }]],
      },
    }
  );
});
bot.action("english", (ctx) => {
  ctx.deleteMessage();
  supabase.from("groups").select().match({ language: "english" });
});
bot.action("chinese", (ctx) => {
  ctx.deleteMessage();
  supabase.from("groups").select().match({ language: "chinese" });
});

bot.action("M", (ctx) => {
  ctx.deleteMessage();
  ctx.sendMessage(
    `[AD] 🔥 This ad is for rent, buy contact @EasyTGAdminBot.

  😢 No Link`,
    {
      reply_markup: {
        inline_keyboard: [[{ text: "↩️ Back", callback_data: "B" }]],
      },
    }
  );
});
bot.action("G", (ctx) => {
  ctx.deleteMessage();
  ctx.sendMessage(
    `[AD] 🔥 This ad is for rent, buy contact @EasyTGAdminBot.

  😢 No Link`,
    {
      reply_markup: {
        inline_keyboard: [[{ text: "↩️ Back", callback_data: "B" }]],
      },
    }
  );
});
bot.action("U", (ctx) => {
  ctx.deleteMessage();
  ctx.sendMessage(
    `[AD] 🔥 This ad is for rent, buy contact @EasyTGAdminBot.

  😢 No Link`,
    {
      reply_markup: {
        inline_keyboard: [[{ text: "↩️ Back", callback_data: "B" }]],
      },
    }
  );
});
bot.action("S", (ctx) => {
  ctx.deleteMessage();
  ctx.sendMessage(
    `[AD] 🔥 This ad is for rent, buy contact @EasyTGAdminBot.

  😢 No Link`,
    {
      reply_markup: {
        inline_keyboard: [[{ text: "↩️ Back", callback_data: "B" }]],
      },
    }
  );
});
bot.action("P", (ctx) => {
  ctx.deleteMessage();
  ctx.sendMessage(
    `[AD] 🔥 This ad is for rent, buy contact @EasyTGAdminBot.

  😢 No Link`,
    {
      reply_markup: {
        inline_keyboard: [[{ text: "↩️ Back", callback_data: "B" }]],
      },
    }
  );
});
bot.action("T", (ctx) => {
  ctx.deleteMessage();
  ctx.sendMessage(
    `[AD] 🔥 This ad is for rent, buy contact @EasyTGAdminBot.

  😢 No Link`,
    {
      reply_markup: {
        inline_keyboard: [[{ text: "↩️ Back", callback_data: "B" }]],
      },
    }
  );
});
bot.action("F", (ctx) => {
  ctx.deleteMessage();
  ctx.sendMessage(
    `[AD] 🔥 This ad is for rent, buy contact @EasyTGAdminBot.

  😢 No Link`,
    {
      reply_markup: {
        inline_keyboard: [[{ text: "↩️ Back", callback_data: "B" }]],
      },
    }
  );
});
bot.action("E", (ctx) => {
  ctx.deleteMessage();
  ctx.sendMessage(
    `[AD] 🔥 This ad is for rent, buy contact @EasyTGAdminBot.

  😢 No Link`,
    {
      reply_markup: {
        inline_keyboard: [[{ text: "↩️ Back", callback_data: "B" }]],
      },
    }
  );
});
bot.action("I", (ctx) => {
  ctx.deleteMessage();
  ctx.sendMessage(
    `[AD] 🔥 This ad is for rent, buy contact @EasyTGAdminBot.

  😢 No Link`,
    {
      reply_markup: {
        inline_keyboard: [[{ text: "↩️ Back", callback_data: "B" }]],
      },
    }
  );
});
bot.action("N", (ctx) => {
  ctx.deleteMessage();
  ctx.sendMessage(
    `[AD] 🔥 This ad is for rent, buy contact @EasyTGAdminBot.

  😢 No Link`,
    {
      reply_markup: {
        inline_keyboard: [[{ text: "↩️ Back", callback_data: "B" }]],
      },
    }
  );
});
bot.action("A", (ctx) => {
  ctx.deleteMessage();
  ctx.sendMessage(
    `[AD] 🔥 This ad is for rent, buy contact @EasyTGAdminBot.

  😢 No Link`,
    {
      reply_markup: {
        inline_keyboard: [[{ text: "↩️ Back", callback_data: "B" }]],
      },
    }
  );
});
bot.action("ME", (ctx) => {
  ctx.deleteMessage();
  ctx.sendMessage(
    `[AD] 🔥 This ad is for rent, buy contact @EasyTGAdminBot.

  😢 No Link`,
    {
      reply_markup: {
        inline_keyboard: [[{ text: "↩️ Back", callback_data: "B" }]],
      },
    }
  );
});
bot.action("CO", (ctx) => {
  ctx.deleteMessage();
  ctx.sendMessage(
    `[AD] 🔥 This ad is for rent, buy contact @EasyTGAdminBot.

  😢 No Link`,
    {
      reply_markup: {
        inline_keyboard: [[{ text: "↩️ Back", callback_data: "B" }]],
      },
    }
  );
});
bot.action("LO", (ctx) => {
  ctx.deleteMessage();
  ctx.sendMessage(
    `[AD] 🔥 This ad is for rent, buy contact @EasyTGAdminBot.

  😢 No Link`,
    {
      reply_markup: {
        inline_keyboard: [[{ text: "↩️ Back", callback_data: "B" }]],
      },
    }
  );
});
bot.action("CH", (ctx) => {
  ctx.deleteMessage();
  ctx.sendMessage(
    `[AD] 🔥 This ad is for rent, buy contact @EasyTGAdminBot.

  😢 No Link`,
    {
      reply_markup: {
        inline_keyboard: [[{ text: "↩️ Back", callback_data: "B" }]],
      },
    }
  );
});
bot.action("NE", (ctx) => {
  ctx.deleteMessage();
  ctx.sendMessage(
    `[AD] 🔥 This ad is for rent, buy contact @EasyTGAdminBot.

  😢 No Link`,
    {
      reply_markup: {
        inline_keyboard: [[{ text: "↩️ Back", callback_data: "B" }]],
      },
    }
  );
});
bot.action("TH", (ctx) => {
  ctx.deleteMessage();
  ctx.sendMessage(
    `[AD] 🔥 This ad is for rent, buy contact @EasyTGAdminBot.

  😢 No Link`,
    {
      reply_markup: {
        inline_keyboard: [[{ text: "↩️ Back", callback_data: "B" }]],
      },
    }
  );
});
bot.action("PR", (ctx) => {
  ctx.deleteMessage();
  ctx.sendMessage(
    `[AD] 🔥 This ad is for rent, buy contact @EasyTGAdminBot.

  😢 No Link`,
    {
      reply_markup: {
        inline_keyboard: [[{ text: "↩️ Back", callback_data: "B" }]],
      },
    }
  );
});
bot.action("GA", (ctx) => {
  ctx.deleteMessage();
  ctx.sendMessage(
    `[AD] 🔥 This ad is for rent, buy contact @EasyTGAdminBot.

  😢 No Link`,
    {
      reply_markup: {
        inline_keyboard: [[{ text: "↩️ Back", callback_data: "B" }]],
      },
    }
  );
});
bot.action("MO", (ctx) => {
  ctx.deleteMessage();
  ctx.sendMessage(
    `[AD] 🔥 This ad is for rent, buy contact @EasyTGAdminBot.

  😢 No Link`,
    {
      reply_markup: {
        inline_keyboard: [[{ text: "↩️ Back", callback_data: "B" }]],
      },
    }
  );
});
bot.action("MU", (ctx) => {
  ctx.deleteMessage();
  ctx.sendMessage(
    `[AD] 🔥 This ad is for rent, buy contact @EasyTGAdminBot.

  😢 No Link`,
    {
      reply_markup: {
        inline_keyboard: [[{ text: "↩️ Back", callback_data: "B" }]],
      },
    }
  );
});
bot.action("AC", (ctx) => {
  ctx.deleteMessage();
  ctx.sendMessage(
    `[AD] 🔥 This ad is for rent, buy contact @EasyTGAdminBot.

  😢 No Link`,
    {
      reply_markup: {
        inline_keyboard: [[{ text: "↩️ Back", callback_data: "B" }]],
      },
    }
  );
});
bot.action("ED", (ctx) => {
  ctx.deleteMessage();
  ctx.sendMessage(
    `[AD] 🔥 This ad is for rent, buy contact @EasyTGAdminBot.

  😢 No Link`,
    {
      reply_markup: {
        inline_keyboard: [[{ text: "↩️ Back", callback_data: "B" }]],
      },
    }
  );
});
bot.action("CR", (ctx) => {
  ctx.deleteMessage();
  ctx.sendMessage(
    `[AD] 🔥 This ad is for rent, buy contact @EasyTGAdminBot.

  😢 No Link`,
    {
      reply_markup: {
        inline_keyboard: [[{ text: "↩️ Back", callback_data: "B" }]],
      },
    }
  );
});
bot.action("FI", (ctx) => {
  ctx.deleteMessage();
  ctx.sendMessage(
    `[AD] 🔥 This ad is for rent, buy contact @EasyTGAdminBot.

  😢 No Link`,
    {
      reply_markup: {
        inline_keyboard: [[{ text: "↩️ Back", callback_data: "B" }]],
      },
    }
  );
});
bot.action("BE", (ctx) => {
  ctx.deleteMessage();
  ctx.sendMessage(
    `[AD] 🔥 This ad is for rent, buy contact @EasyTGAdminBot.

  😢 No Link`,
    {
      reply_markup: {
        inline_keyboard: [[{ text: "↩️ Back", callback_data: "B" }]],
      },
    }
  );
});
bot.action("NS", (ctx) => {
  ctx.deleteMessage();
  ctx.sendMessage(
    `[AD] 🔥 This ad is for rent, buy contact @EasyTGAdminBot.

  😢 No Link`,
    {
      reply_markup: {
        inline_keyboard: [[{ text: "↩️ Back", callback_data: "B" }]],
      },
    }
  );
});
bot.action("FU", (ctx) => {
  ctx.deleteMessage();
  ctx.sendMessage(
    `[AD] 🔥 This ad is for rent, buy contact @EasyTGAdminBot.

  😢 No Link`,
    {
      reply_markup: {
        inline_keyboard: [[{ text: "↩️ Back", callback_data: "B" }]],
      },
    }
  );
});
bot.action("TE", (ctx) => {
  ctx.deleteMessage();
  ctx.sendMessage(
    `[AD] 🔥 This ad is for rent, buy contact @EasyTGAdminBot.

  😢 No Link`,
    {
      reply_markup: {
        inline_keyboard: [[{ text: "↩️ Back", callback_data: "B" }]],
      },
    }
  );
});
bot.action("SH", (ctx) => {
  ctx.deleteMessage();
  ctx.sendMessage(
    `[AD] 🔥 This ad is for rent, buy contact @EasyTGAdminBot.

  😢 No Link`,
    {
      reply_markup: {
        inline_keyboard: [[{ text: "↩️ Back", callback_data: "B" }]],
      },
    }
  );
});
bot.action("B", (ctx) => {
  ctx.deleteMessage();
});

// for (let i = 0; i < 20; i++) {
//   supabase
//     .from("channels")
//     .insert({
//       title: "Bullshit",
//       description: "Bullshit",
//       members: 2999,
//       link: "https://t.me/bullshit",
//       language: "chinese",
//       status: "normal",
//       type: "channels",
//     })
//     .then(console.log);
// }

// for (let i = 0; i < 15; i++) {
//   supabase
//     .from("countrys")
//     .insert({ country: "🇫🇷 Bullshit" })
//     .then(console.log);
// }

bot.action("Backtags", (ctx) => {
  ctx.deleteMessage();
});

bot.on("callback_query", async (ctx) => {
  const query = ctx.update.callback_query.data;

  if (query.includes("navchannels")) {
    ctx.deleteMessage();
    const index = parseInt(query.split("-")[1]);
    displayNav(ctx, index, "channels");
  } else if (query.includes("navgroups")) {
    ctx.deleteMessage();
    const index = parseInt(query.split("-")[1]);
    displayNav(ctx, index, "groups");
  } else if (
    query.includes("channellike") ||
    query.includes("channeldislike")
  ) {
    const id = parseInt(query.split("-")[1]);
    const { data } = await supabase
      .from("channels")
      .select("likes,dislikes,id")
      .match({ id })
      .single();

    if (
      (query.includes("like") &&
        !data.likes.includes(ctx.update.callback_query.from.id)) ||
      (query.includes("dislike") &&
        !data.dislikes.includes(ctx.update.callback_query.from.id))
    ) {
      const payload = query.includes("like")
        ? {
            likes: data.likes.concat([ctx.update.callback_query.from.id]),
          }
        : {
            dislikes: data.dislikes.concat([ctx.update.callback_query.from.id]),
          };

      supabase
        .from("channels")
        .update(payload)
        .match({ id: data.id })
        .then(console.log);

      try {
        await ctx.editMessageReplyMarkup({
          inline_keyboard: [
            [
              {
                text:
                  "👍 " +
                  (query.includes("like")
                    ? data.likes.length + 1
                    : data.likes.length),
                callback_data: "channellike-" + data.id,
              },
            ],
            [
              {
                text:
                  "👎 " +
                  (query.includes("dislike")
                    ? data.dislikes.length + 1
                    : data.dislikes.length),
                callback_data: "channeldislike-" + data.id,
              },
            ],
            [{ text: "❌ Close", callback_data: "navchannels-0" }],
          ],
        });
      } catch (e) {
        console.log("Shit");
      }
    }
  } else if (query.includes("grouplike") || query.includes("groupdislike")) {
    console.log("chibre");
    const id = parseInt(query.split("-")[1]);
    const { data } = await supabase
      .from("groups")
      .select("likes,dislikes,id")
      .match({ id })
      .single();

    if (
      (query.includes("like") &&
        !data.likes.includes(ctx.update.callback_query.from.id)) ||
      (query.includes("dislike") &&
        !data.dislikes.includes(ctx.update.callback_query.from.id))
    ) {
      const payload = query.includes("like")
        ? {
            likes: data.likes.concat([ctx.update.callback_query.from.id]),
          }
        : {
            dislikes: data.dislikes.concat([ctx.update.callback_query.from.id]),
          };

      supabase
        .from("groups")
        .update(payload)
        .match({ id: data.id })
        .then(console.log);

      try {
        await ctx.editMessageReplyMarkup({
          inline_keyboard: [
            [
              {
                text:
                  "👍 " +
                  (query.includes("like")
                    ? data.likes.length + 1
                    : data.likes.length),
                callback_data: "grouplike-" + data.id,
              },
            ],
            [
              {
                text:
                  "👎 " +
                  (query.includes("dislike")
                    ? data.dislikes.length + 1
                    : data.dislikes.length),
                callback_data: "groupdislike-" + data.id,
              },
            ],
            [{ text: "❌ Close", callback_data: "navgroups-0" }],
          ],
        });
      } catch (e) {
        console.log("Shit");
      }
    }
  } else if (query.includes("channels")) {
    ctx.deleteMessage();

    const { data } = await supabase
      .from("channels")
      .select("*")
      .match({ id: query.split("-")[1] })
      .single();

    ctx.replyWithHTML(
      `<b>ID</b>: ${data.id}
<b>Link:</b> @${data.link.split("/")[3]}
<b>Type:</b> ${data.type}
<b>Language:</b> ${data.language}
<b>Title:</b> ${data.title}
<b>Description:</b> ${data.description}
<b>Members:</b> ${data.members}
<b>Status:</b> ${data.status}
     `,
      {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "👍 " + data.likes.length,
                callback_data: "channellike-" + data.id,
              },
            ],
            [
              {
                text: "👎 " + data.dislikes.length,
                callback_data: "channeldislike-" + data.id,
              },
            ],
            [{ text: "❌ Close", callback_data: "navchannels-0" }],
          ],
        },
        disable_web_page_preview: true,
      }
    );
  } else if (query.includes("groups")) {
    ctx.deleteMessage();

    const { data } = await supabase
      .from("groups")
      .select("*")
      .match({ id: query.split("-")[1] })
      .single();

    ctx.replyWithHTML(
      `<b>ID</b>: ${data.id}
<b>Link:</b> @${data.link.split("/")[3]}
<b>Type:</b> ${data.type}
<b>Languages:</b> ${data.language}
<b>Title:</b> ${data.title}
<b>Description:</b> ${data.description}
<b>Members:</b> ${data.members}
<b>Status:</b> ${data.status}
     `,
      {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "👍 " + data.likes.length,
                callback_data: "grouplike-" + data.id,
              },
            ],
            [
              {
                text: "👎 " + data.dislikes.length,
                callback_data: "groupdislike-" + data.id,
              },
            ],
            [{ text: "❌ Close", callback_data: "navgroups-0" }],
          ],
        },
        disable_web_page_preview: true,
      }
    );
  }
});

async function displayNav(ctx, index, type) {
  let { data, error, count } = await supabase
    .from(type)
    .select("*", { count: "exact" })
    .order("id", { ascending: true });
  console.log(error, data);

  data = data.slice(index * 30, (index + 1) * 30);

  const navigators = [];

  if (index > 0)
    navigators.push({
      text: "⬅️",
      callback_data: "nav" + type + "-" + (index - 1),
    });
  if (index < Math.floor(count / 30))
    navigators.push({
      text: "➡️",
      callback_data: "nav" + type + "-" + (index + 1),
    });

  ctx.replyWithHTML(
    `[AD] 🔥 This ad is for rent, buy contact .

${data
  .map(
    (entry) =>
      entry.id + '.  <a href="' + entry.link + '">' + entry.title + " </a>"
  )
  .join("\n")}
    
Tip: Like or report, click the number below 👇`,
    {
      reply_markup: {
        inline_keyboard: [...generateNavitators(data, type), [...navigators]],
      },
      disable_web_page_preview: true,
    }
  );
}

function generateNavitators(data, type) {
  const navigators = [];
  for (let i = 0; i < 30 / 7; i++) {
    navigators.push([
      ...data
        .map((entry) => ({
          text: entry.id,
          callback_data: type + "-" + entry.id,
        }))
        .slice(i * 7, (i + 1) * 7),
    ]);
  }
  return navigators;
}

bot.launch();
