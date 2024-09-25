let balance = 5500;  // initial balance

// Show Donation section and hide History section
function showDonation() {
    document.getElementById('donation-section').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('donation-tab').classList.add('active');
    document.getElementById('history-tab').classList.remove('active');
}

// Show History section and hide Donation section
function showHistory() {
    document.getElementById('history-section').classList.remove('hidden');
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-tab').classList.add('active');
    document.getElementById('donation-tab').classList.remove('active');
}

// Donation function
function donate(donate) {
    let inputField = document.getElementById(`input-${donate}`);
    let donationAmount = parseFloat(inputField.value);

    // Validate input amount
    if (isNaN(donationAmount) || donationAmount <= 0) {
        alert('Please enter a valid donation amount.');
        return;
    }

    // Check if donation exceeds balance
    if (donationAmount > balance) {
        alert('Insufficient balance.');
        return;
    }

    // Update the balance and the donation amount for the campaign
    balance -= donationAmount;
    document.getElementById('account-balance').innerHTML = balance;
    let donationField = document.getElementById(`donation-${donate}`);
    donationField.innerHTML = parseFloat(donationField.innerHTML) + donationAmount;


    document.getElementById('history-section');
    const div = document.createElement('div');
    const d = new Date();
    let text = d.toString();

    div.innerHTML = `
    <div class=" container mx-auto p-4 rounded-lg shadow-sm border mb-3">
        <h4 class = "text-2xl font-bold  "> Successfully Donated ${donationAmount} BDT to ${donate.charAt(0).toUpperCase() + donate.slice(1)}, Bangladesh 
        </h4>
        <p>Date:${text} </p>
        </div>
        
    `
    document.getElementById('history-section').appendChild(div);


    // Show success modal
    document.getElementById('modal-message').innerHTML = `You have successfully donated ${donationAmount} BDT to ${donate.charAt(0).toUpperCase() + donate.slice(1)}.`;
    document.getElementById('modal-success').classList.remove('hidden');

    // Clear the input field after donation
    inputField.value = '';
}

// Close the modal
function closeModal() {
    document.getElementById('modal-success').classList.add('hidden');
}


