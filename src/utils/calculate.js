export function calculateEmi(loanAmt, interestRate, loanDuration, courseDuration, gracePeriod) {
    interestRate = interestRate / (12 * 100);
    loanDuration = loanDuration * 12;
    let adjustedLoanDuration = loanDuration - courseDuration - gracePeriod;
    let adjustedEMI;
    let E = loanAmt * interestRate * Math.pow((1 + interestRate), loanDuration) / (Math.pow((1 + interestRate), loanDuration) - 1);
    if (adjustedLoanDuration > 0) {
        adjustedEMI = loanAmt * interestRate * Math.pow((1 + interestRate), adjustedLoanDuration) / (Math.pow((1 + interestRate), adjustedLoanDuration) - 1);
    } else {
        adjustedEMI = E;
    }
    return Math.floor(adjustedEMI)
}

export function calculateInterest(loanAmt, interestRate, loanDuration, courseDuration, gracePeriod) {
    let adjustedLoanDuration = (loanDuration*12) - courseDuration - gracePeriod;
    let E = loanAmt * interestRate * Math.pow((1 + interestRate), loanDuration) / (Math.pow((1 + interestRate), loanDuration) - 1);
    const emi = calculateEmi(loanAmt, interestRate, loanDuration, courseDuration, gracePeriod);
    let interest = (emi * adjustedLoanDuration) - loanAmt;
    if(interest < 0) {
        return (E * loanDuration) - loanAmt;
    }
    return interest;
}

export function totalAmount(loanAmt, interestRate, loanDuration, courseDuration, gracePeriod) {
    return loanAmt + calculateInterest(loanAmt, interestRate, loanDuration, courseDuration, gracePeriod);
}

export function calculateSavings(annualSalary,emi,year) {
    let savings = annualSalary - (emi * 12);
    return savings * year;
}