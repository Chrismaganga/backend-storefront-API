'use strict';

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db) {
  return db.createTable('orders', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    user_id: { type: 'int', notNull: true, foreignKey: { name: 'orders_user_id_fk', table: 'users', rules: { onDelete: 'CASCADE' }, mapping: 'id' } },
    status: { type: 'string', notNull: true, length: 50 }, // e.g., 'active', 'completed'
    created_at: { type: 'timestamp', notNull: true, defaultValue: new String('CURRENT_TIMESTAMP') },
    updated_at: { type: 'timestamp', notNull: true, defaultValue: new String('CURRENT_TIMESTAMP') },
  });
};

exports.down = function (db) {
  return db.dropTable('orders');
};

exports._meta = {
  version: 1,
};
