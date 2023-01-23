let express = require("express");
let expect = require("chai").expect;
let request = require("request");

describe("Add two numbers", function(){

    //URL for the test...
    var url = "http://localhost:3000/addTwoNumbers/3/3";

    //Test 1...
    it("Test 1: Return 200 status code if api works...", function(done){
        request(url,function(error, response, body){
            expect(response.statusCode).to.equal(200)
            done();
        });
    })

    //Test 2...
    it("Test 2: Returns statusCode key in body to check if api give right result should not be 200", function(done) {
        request(url, function(error, response, body) {
            body = JSON.parse(body)
            expect(body.statusCode).to.not.equal(200);
            done()
          });
    });

    //Test 3...    
    it("Test 3: Returns the result as number", function(done) {
        request(url, function(error, response, body) {
            body = JSON.parse(body)
            expect(body.result).to.be.a('number');
            done()
          });
    });

    //Test 4...
    it("Test 4: Returns the result equal to 6", function(done) {
      request(url, function(error, response, body) {
          body = JSON.parse(body)
          expect(body.result).to.equal(6);
          done()
        });
    });
  
    //Test 5...  
    it("Test 5: Returns the result not equal to 15", function(done) {
        request(url, function(error, response, body) {
            body = JSON.parse(body)
            expect(body.result).to.not.equal(15);
            done()
      });
    });

})