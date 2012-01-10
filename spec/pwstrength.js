describe("jquery.pwstrength", function() {    
    it("detects very weak passwords", function() {
        expect($.pwstrength('abcd')).toEqual(0);
    });
    
    it("detects weak passwords", function() {
        expect($.pwstrength('abdge123')).toEqual(1);
    });
    
    it("detects mediocre passwords", function() {
        expect($.pwstrength('Ab12Degf')).toEqual(2);
    });
    
    it("detects strong passwords", function() {
        expect($.pwstrength('@b12Degf')).toEqual(3);
    });
    
    it("detects very strong passwords", function() {
        expect($.pwstrength('@b12De Fghbe#')).toEqual(4);
        expect($.pwstrength('@b12DeFghbe234567#')).toEqual(4);
    });
});