const massConversions = {
  // base unit: gram (g)
  'g': 1,
  'kg': 1000,
  't': 1_000_000,
  'oz': 28.34952,
  'lb': 453.5924,
  'st': 907184.7
};

const volumeConversions = {
  // base unit: milliliter (mL)
  'ml': 1,
  'l': 1000,
  'm3': 1_000_000,
  'tsp': 4.92892,
  'tbsp': 14.7868,
  'fl oz': 29.57353,
  'cup': 240,
  'pt': 473.176,
  'qt': 946.3529,
  'gal': 3785.412
};

function convertUnit(amount: number, fromUnit: string, toUnit: string) {
  fromUnit = fromUnit.toLowerCase();
  toUnit = toUnit.toLowerCase();

  // Mass conversion
  if (massConversions[fromUnit] && massConversions[toUnit]) {
    const inGrams = amount * massConversions[fromUnit];
    return inGrams / massConversions[toUnit];
  }

  // Volume conversion
  if (volumeConversions[fromUnit] && volumeConversions[toUnit]) {
    const inMilliliters = amount * volumeConversions[fromUnit];
    return inMilliliters / volumeConversions[toUnit];
  }

  throw new Error(`Unknown or incompatible units: ${fromUnit} to ${toUnit}`);
}

export { convertUnit }

// // Example usage:
// try {
//   console.log(`1 kg → lb: ${convertUnit(1, 'kg', 'lb').toFixed(2)} lb`);
//   console.log(`2 gal → L: ${convertUnit(2, 'gal', 'l').toFixed(2)} L`);
//   console.log(`3 tbsp → tsp: ${convertUnit(3, 'tbsp', 'tsp').toFixed(2)} tsp`);
//   console.log(`500 ml → cup: ${convertUnit(500, 'ml', 'cup').toFixed(2)} cups`);
// } catch (err) {
//   console.error(err.message);
// }
