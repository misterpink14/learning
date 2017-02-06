"use strict";

const fs = require("fs");
const path = require('path');
const usersJson = path.resolve("./app/models/users.json");

module.exports = {


saveUsers(users) {
    fs.writeFile(
        usersJson,
        JSON.stringify(users),
        (err) => {
            if (err) {
                console.log("saveUsers failed");
            }
        }
    )
},


loadUsers() {
    const users = require(usersJson);

    if (!users) {
        users = '{}';
    }
    return users;
}


};