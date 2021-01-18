const shortid = require("shortid");

const users = [
  {
    id: shortid.generate(),
    name: "Kat",
    bio: "learning backend",
  },
];

module.exports = {
  findAll() {
    // SELECT * FROM users;
    return Promise.resolve(users);
  },

  findById(id) {
    // SELECT * FROM users WHERE id = 1;
    const user = users.find((d) => d.id === id);
    return Promise.resolve(user);
  },

  create({ name, bio }) {
    // INSERT INTO users (id, name, bio) VALUES ('xyz', 'Foo', "bar");
    const newUser = { id: shortid.generate(), name, bio };
    users.push(newUser);
    return Promise.resolve(newUser);
  },

  update(id, changes) {
    // UPDATE users SET name = 'Foo', weight = 'b', adopter_id = 'abc' WHERE id = 1;
    const user = users.find((user) => user.id === id);
    if (!user) return Promise.resolve(null);

    const updatedUser = { ...changes, id };
    users = users.map((d) => (d.id === id ? updatedUser : d));
    return Promise.resolve(updatedUser);
  },

  delete(id) {
    // DELETE FROM dogs WHERE id = 1;
    const user = users.find((user) => user.id === id);
    if (!user) return Promise.resolve(null);

    users = users.filter((d) => d.id !== id);
    return Promise.resolve(user);
  },
};
