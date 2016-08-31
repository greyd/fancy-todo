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
  db.createTable('todos', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    isDone: {type: 'boolean', defaultValue: false},
    text: {type: 'string', unique: true},
    description: {type: 'string'},
    time: {type: 'int'},
  }, next);
};

exports.down = function(db, next) {
  db.dropTable('todos', next)
};
