/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable("pollutions", function (table) {
        table.increments("id").primary();
        table.string("ts").notNullable();
        table.integer("aqius").notNullable();
        table.string("mainus").notNullable();
        table.integer("aqicn").notNullable();
        table.string("maincn").notNullable();
        table.timestamps(true, true);
      });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTable("pollutions");
}
