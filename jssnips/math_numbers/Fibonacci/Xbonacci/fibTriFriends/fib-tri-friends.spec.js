var Xbonacci = require("./fibTriFriends");

describe("FibTriFriends test cases", function(){
    
    it("Test for 2 elements", function(){
        expect(Xbonacci([0,1],10)).toEqual([0,1,1,2,3,5,8,13,21,34]);
    });

    it("Test for 2 elements, 1, 1", function(){
        expect(Xbonacci([1,1],10)).toEqual([1,1,2,3,5,8,13,21,34,55]);
    });

    it("Test for signature of 5", function(){
        expect(Xbonacci([0,0,0,0,1],10)).toEqual([0,0,0,0,1,1,2,4,8,16]);
    });

    it("Test for signature of 7", function(){
        expect(Xbonacci([1,0,0,0,0,0,1],10)).toEqual([1,0,0,0,0,0,1,2,3,6]);
    });
})