db.createCollection("users");
db.createUser({
  user: "test",
  pwd: "test123",
  roles: [
    {
      role: "readWrite",
      db: "mydb",
    },
  ],
});
