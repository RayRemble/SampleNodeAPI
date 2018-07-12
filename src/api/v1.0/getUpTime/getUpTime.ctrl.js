'use strict';

exports.balance = async (ctx) => {
  const { userId } = ctx.params;

  ctx.body = {'User':'user1', 'UpTime':'130m', 'Status':'Online'};
}