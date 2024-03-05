import { hash } from "bcrypt";
import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("users").del();

    const hashedPassword = await hash('test123456', 10);
    // Inserts seed entries
    await knex("users").insert([
        { id: 1, email: "test1@gmail.com", password: hashedPassword },
        { id: 2, email: "test2@gmail.com", password: hashedPassword },
        { id: 3, email: "test3@gmail.com", password: hashedPassword }
    ]);
};
