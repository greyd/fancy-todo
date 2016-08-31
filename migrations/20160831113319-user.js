'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, next) {
  return db.createTable('users', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    login: {type: 'string', notNull: false, unique: true},
    password: {type: 'string', notNull: false}
  }, next);
};

exports.down = function(db, next) {
  return db.dropTable('users', next)
};
