'use strict';

exports.balance = async (ctx) => {
  const { userId } = ctx.params;
  if(userId == "user1"){
    ctx.body = {'user':'user1', 'onlineDur':'130', 'offlineTimes': '5', 'currentStatus':'online' };
  }
  else if(userId == "user2"){
    ctx.body = {'user':'user2', 'onlineDur':'190', 'offlineTimes': '9', 'currentStatus':'offline' };
  }
  else if(userId == "user3"){
    ctx.body = {'user':'user3', 'onlineDur':'430', 'offlineTimes': '2', 'currentStatus':'online' };
  }
}