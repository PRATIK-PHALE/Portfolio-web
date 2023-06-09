const loanAmount = document.getElementById('loan_amount');
const loanTenure = document.getElementById('loan_tenure');
const loanRate = document.getElementById('loan_interest');

const loanEmi = document.querySelector('.loan_emi');
const loanPrinciple = document.querySelector('.loan_principle');
const loanInterst = document.querySelector('.loan_interest_rate');
const loanTotal = document.querySelector('.loan_total');

const submitBtn = document.querySelector('.calculator-btn');

submitBtn.addEventListener("click", function () {
    amount = loanAmount.value;
    tenure = loanTenure.value * 12; //1Year =12 Month
    rate = loanRate.value / 12 / 100; // Loan rate per year/100 = loan percentage

    emi = (amount * rate * (1 + rate) ** tenure) / ((1 + rate) ** tenure - 1);
    total = emi * tenure;//total amount to be paid inculid interest
    interest = total - amount;// interest = total amount - principle amount

    loanEmi.innerHTML = Math.floor(emi);
    loanPrinciple.innerHTML = Math.floor(amount);
    loanInterst.innerHTML = Math.floor(interest);
    loanTotal.innerHTML = Math.floor(total);

    // Loanchart
    let xValues = ["Principle", "Interest"];
    let yValues = [amount, Math.floor(interest)];

    let barColor = ["#961251", "#0000000"];
    new Chart("loanChart", {
        type: "pie",
        data: {
            labels: xValues,
            datasets: [
                {
                    backgroundColor: barColor,
                    data: yValues
                }
            ]
        },
        options: {
            title: {
                display: false
            }
        }
    });
});