type Income2 = {
  // Assuming 'Income2' is a type with properties for income details
  salary: number;
  bonus: number;
  otherSources: number;
};

const riyadIncome2: Income2 = {
  salary: 0, // Replace 0 with actual salary
  bonus: 0, // Replace 0 with actual bonus
  otherSources: 0 // Replace 0 with actual income from other sources
};

// Function to calculate total income
function calculateTotalIncome(income: Income2): number {
  return income.salary + income.bonus + income.otherSources;
}

// Example usage
const totalIncome = calculateTotalIncome(riyadIncome2);
console.log(`Total Income: ${totalIncome}`);
