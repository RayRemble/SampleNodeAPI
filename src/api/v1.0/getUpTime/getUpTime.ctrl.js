'use strict';

exports.balance = async (ctx) => {
  const { userId } = ctx.params;

  ctx.body = {'user':'user1', 'onlineDur':'130', 'offlineTimes': '5', 'currentStatus':'online' };
}