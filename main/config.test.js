"use strict";
const env = process.env

describe("config can come from env", function () {
  test("works", function() {
    env.SECRET_KEY = "abc";
    env.PORT = "5000";
    env.DATABASE = "other";
    env.DATABASE_TEST = "other_test"
    env.NODE_ENV = "other";

    const config = require("./config");
    expect(config.SECRET_KEY).toEqual("abc");
    expect(config.PORT).toEqual(5000);
    expect(config.getDatabaseUri()).toEqual("other");
    expect(config.BCRYPT_WORK_FACTOR).toEqual(12);

    delete env.SECRET_KEY;
    delete env.PORT;
    delete env.BCRYPT_WORK_FACTOR;
    delete env.DATABASE;

    env.NODE_ENV = "test";

    expect(config.getDatabaseUri()).toEqual("other_test");
    delete env.DATABASE_TEST;
  });
})

