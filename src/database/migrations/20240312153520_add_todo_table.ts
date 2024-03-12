import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('todos', table => {
    table.bigIncrements('id').unsigned().primary();
    table.integer('userId').unsigned();
    table.string('title');
    table.string('description');
    table.boolean('completed').defaultTo(false);
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('todos');
}
