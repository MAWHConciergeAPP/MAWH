var expect = require("chai").expect;
var activity = require("../models/activity.js");
var category = require("../models/category.js");
var contact = require("../models/contact.js");
var faq = require("../models/faq.js");
var schedule = require("../models/schedule.js");
var user = require("../models/user.js");

describe("activity", function() {
    it("activity should exist", function() {
        expect(activity).to.not.equal(null);
    });
});

describe("category", function() {
    it("category should exist", function() {
        expect(category).to.not.equal(null);
    });
});

describe("contact", function() {
    it("contact should exist", function() {
        expect(contact).to.not.equal(null);
    });
});

describe("faq", function() {
    it("faq should exist", function() {
        expect(faq).to.not.equal(null);
    });
});

describe("schedule", function() {
    it("schedule should exist", function() {
        expect(schedule).to.not.equal(null);
    });
});
describe("user", function() {
    it("user should exist", function() {
        expect(user).to.not.equal(null);
    });
});