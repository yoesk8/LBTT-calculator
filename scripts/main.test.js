const calculateLBTT = require('./main');


describe('calculateLBTT', () => {
    it('returns 0 when the price is 0', () => {
      expect(calculateLBTT(0)).toBe(0);
    });
  
    it('returns 0 when the price is below the threshold', () => {
      expect(calculateLBTT(100000)).toBe(0);
      expect(calculateLBTT(145000)).toBe(0);
    });
  
    it('calculates the tax correctly when the price is between 145000 and 250000', () => {
      expect(calculateLBTT(150000)).toBe(100);
      expect(calculateLBTT(200000)).toBe(1100);
    });
  
    it('calculates the tax correctly when the price is between 250000 and 325000', () => {
      expect(calculateLBTT(260000)).toBe(2600);
    });
  
    it('calculates the tax correctly when the price is between 325000 and 750000', () => {
      expect(calculateLBTT(350000)).toBe(8350);
    });
  
    it('calculates the tax correctly when the price is above 750000', () => {
      expect(calculateLBTT(800000)).toBe(54350);
    });
  });
  