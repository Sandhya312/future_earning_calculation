// Function to calculate EMI (Equated Monthly Installment)
export function calculateEmi(loanAmt, interestRate, loanDuration, courseDuration, gracePeriod) {
    // Convert annual interest rate to monthly and percentage to decimal
    interestRate = interestRate / (12 * 100);
    // Convert loan duration from years to months
    loanDuration = loanDuration * 12;
    // Calculate adjusted loan duration considering course duration and grace period
    let adjustedLoanDuration = loanDuration - courseDuration - gracePeriod;
    let adjustedEMI;
    // Calculate EMI using the formula
    let E = loanAmt * interestRate * Math.pow((1 + interestRate), loanDuration) / (Math.pow((1 + interestRate), loanDuration) - 1);
    // Check if adjusted loan duration is positive
    if (adjustedLoanDuration > 0) {
        // Calculate adjusted EMI
        adjustedEMI = loanAmt * interestRate * Math.pow((1 + interestRate), adjustedLoanDuration) / (Math.pow((1 + interestRate), adjustedLoanDuration) - 1);
    } else {
        adjustedEMI = E; // If no adjustment needed, use regular EMI
    }
    return Math.floor(adjustedEMI); // Return adjusted EMI
}

// Function to calculate total interest paid on the loan
export function calculateInterest(loanAmt, interestRate, loanDuration, courseDuration, gracePeriod) {
    // Calculate adjusted loan duration considering course duration and grace period
    let adjustedLoanDuration = (loanDuration*12) - courseDuration - gracePeriod;
    // Calculate regular EMI
    const emi = calculateEmi(loanAmt, interestRate, loanDuration, courseDuration, gracePeriod);
    // Calculate interest paid over the loan duration
    let interest = (emi * adjustedLoanDuration) - loanAmt;
    // If calculated interest is negative (due to overpayment), return total interest without adjustments
    if(interest < 0) {
        return (E * loanDuration) - loanAmt;
    }
    return interest; // Return calculated interest
}

// Function to calculate total amount paid back including principal and interest
export function totalAmount(loanAmt, interestRate, loanDuration, courseDuration, gracePeriod) {
    // Return sum of loan amount and total interest
    return loanAmt + calculateInterest(loanAmt, interestRate, loanDuration, courseDuration, gracePeriod);
}

// Function to calculate savings over the specified years given annual salary and EMI
export function calculateSavings(annualSalary,emi,year) {
    // Calculate yearly savings by subtracting annual EMI from annual salary
    let savings = annualSalary - (emi * 12);
    // Calculate total savings over the specified years
    return savings * year;
}
