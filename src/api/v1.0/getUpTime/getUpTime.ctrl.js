'use strict';

exports.balance = async (ctx) => {
  const { userId } = ctx.params;

  ctx.body = {'user':'user1', 'onlineDur':'130m', 'offlineTimes': 5 };
}