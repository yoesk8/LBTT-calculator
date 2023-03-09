function calculateLBTT(price) {
    // First create an Object with the rates according to the prices of the property 
    const LBTT_TABLE = {
      upTo145000: 0,
      upTo250000: 0.02,
      upTo325000: 0.05,
      upTo750000: 0.1,
      over750000: 0.12
    };
    // Set the tax to 0 
    let LBTT = 0;
    // If the price of the property is below the threshold tax stays as 0, else calculate the tax by multiplying by the appropiate rate
    if (price <= 145000) {
      LBTT = 0;
    } else if (price <= 250000) {
      LBTT = (price - 145000) * LBTT_TABLE.upTo250000;
    } else if (price <= 325000) {
      LBTT = (price - 250000) * LBTT_TABLE.upTo325000 + (250000 - 145000) * LBTT_TABLE.upTo250000;
    } else if (price <= 750000) {
      LBTT = (price - 325000) * LBTT_TABLE.upTo750000 + (325000 - 250000) * LBTT_TABLE.upTo325000 + (250000 - 145000) * LBTT_TABLE.upTo250000;
    } else {
      LBTT = (price - 750000) * LBTT_TABLE.over750000 + (750000 - 325000) * LBTT_TABLE.upTo750000 + (325000 - 250000) * LBTT_TABLE.upTo325000 + (250000 - 145000) * LBTT_TABLE.upTo250000;
    }
    
    return LBTT;
  }

  


  module.exports = calculateLBTT;

  
  