const TelegramBot = require('node-telegram-bot-api')
const token = "7111368784:AAGA2I0HCn0-RMnPQBW2uQ8_Iq7PyNWi1zY"

// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.send("Server Running")
// }) 

// const port = 5000
// app.listen(port, () => {
//     console.log("server running on port 3000")
// })




const bot = new TelegramBot(token, {
    polling: true
})

bot.on('message', (msg) => {
    let lurex = "We are Lurex"
    if (msg.text.indexOf(lurex) === 0) {
        bot.sendMessage(msg.chat.id, "Yes, we are Lurex cause Hammaty Loves Us..lol")
    }

    let click = "Click me"
    if (msg.text.indexOf(click) === 0) {
        bot.sendMessage(msg.chat.id, "You are stupid as hell! " + msg.from.first_name)
    }

    let location = "location";
    if (msg.text.indexOf(location) === 0) {
        bot.sendLocation(msg.chat.id, 44.97100, -104.27719)
        bot.sendMessage(msg.chat.id, "You are located here")
    }

});

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "Welcome to Lurex bot, please send the command /sendpic", {
        "reply_markup": {
            "keyboard": [
                ["Click me", "location"],
                ["Picture"],
                ["We are Lurex"]
            ]
        }
    })

})

bot.on('message', (msg) => {
    let pic = "Picture"
    if (msg.text.indexOf(pic) === 0) {
        bot.sendPhoto(msg.chat.id, "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bdc36f65-e0af-43b0-b018-037a83286484/dg4usq0-5a06b103-06fd-4cfb-9de0-bbe80ffd96a1.jpg/v1/fill/w_300,h_277,q_75,strp/blehh_by_ryodoesart_dg4usq0-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Mjc3IiwicGF0aCI6IlwvZlwvYmRjMzZmNjUtZTBhZi00M2IwLWIwMTgtMDM3YTgzMjg2NDg0XC9kZzR1c3EwLTVhMDZiMTAzLTA2ZmQtNGNmYi05ZGUwLWJiZTgwZmZkOTZhMS5qcGciLCJ3aWR0aCI6Ijw9MzAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.T4yz6kPH4yPha6hOL2CBCutJFQSs2NcDbKBK3YZSrvg", {
        caption: "See a stupid cat! \nThis is just a caption"
    })
    }
    
})

 