'use strict';

var expect = require('chai').expect;
var app = require('../app/app');

describe('reverseNumber', function ()
{
    it('should return number with reversed digits', function(){
        expect(app.reverseNumber(16)).to.eql(61);
    })
});

describe('returnOnlyLetter', function ()
{
    it('should return only letters from string', function(){
        expect(app.returnOnlyLetter('56auto23')).to.eql('auto');
    })
});

describe('isEmail', function ()
{
    it('should return true when the argument is a valid email', function(){
        expect(app.isEmail('abcd@o2.pl')).to.eql(true);
    })
});
