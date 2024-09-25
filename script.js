
// document.addEventListener('DOMContentLoaded', () => {
//     const donationButton = document.getElementById('donation-btn');
//     const historyButton = document.getElementById('history-btn');
//     const donationCardsSection = document.getElementById('donation-cards');
//     const historySection = document.getElementById('history-section');
//     const donationModal = document.getElementById('donation-modal');
//     const closeModalButton = document.getElementById('close-modal');
//     const totalBalanceElement = document.getElementById('total-balance');
//     let totalBalance = parseInt(totalBalanceElement.textContent);
  
   
//     donationButton.style.backgroundColor = "rgb(180, 244, 97)";
//     donationButton.style.color = "white";
  
//     donationButton.addEventListener('click', () => {
//       toggleSections(donationCardsSection, historySection);
//       toggleButtonActiveState(donationButton, historyButton);
//     });
  
//     historyButton.addEventListener('click', () => {
//       toggleSections(historySection, donationCardsSection);
//       toggleButtonActiveState(historyButton, donationButton);
//     });
  
//     closeModalButton.addEventListener('click', () => {
//       donationModal.classList.add('hidden');
//     });
  
//     document.querySelectorAll('.donate-now').forEach(button => {
//       button.addEventListener('click', handleDonation);
//     });
  
//     function toggleSections(activeSection, inactiveSection) {
//       activeSection.classList.remove('hidden');
//       inactiveSection.classList.add('hidden');
//     }
  
//     function toggleButtonActiveState(activeButton, inactiveButton) {
//       activeButton.style.backgroundColor = "rgb(180, 244, 97)";
//       activeButton.style.color = "white";
  
//       inactiveButton.style.backgroundColor = "white";
//       inactiveButton.style.color = "rgb(30, 30, 30)";
//     }
  
//     function handleDonation(event) {
//       const card = event.target.closest('.donation-card');
//       const amountInput = card.querySelector('.donation-amount');
//       const currentAmountElement = card.querySelector('.current-amount');
//       const title = card.querySelector('.donation-title').textContent;
//       const amount = parseInt(amountInput.value);
  
//       if (isNaN(amount) || amount <= 0) {
//         showDonationError('Please enter a valid amount.');
//         return;
//       }
  
//       if (amount > totalBalance) {
//         showDonationError('Insufficient balance.');
//         return;
//       }
  
//       updateBalance(amount);
//       currentAmountElement.textContent = parseInt(currentAmountElement.textContent) + amount;
//       addToHistory(title, amount);
//       showDonationModal(`You have successfully donated ${amount} BDT to ${title}.`);
  
     
//       amountInput.value = '';
//     }
  
//     function updateBalance(amount) {
//       totalBalance -= amount;
//       totalBalanceElement.textContent = totalBalance;
//     }
  
//     function addToHistory(title, amount) {
//       const historyItem = document.createElement('li');
//       historyItem.className = 'history-item';
//       historyItem.innerHTML = `
//         <div class="max-w-2xl mx-auto p-4">
//           <div class="bg-white border-4 border-blue-200 rounded-lg p-6 relative">
//             <div class="absolute inset-0 bg-blue-100 opacity-50 rounded-lg" style="background-image: repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.5) 10px, rgba(255,255,255,.5) 20px);"></div>
//             <div class="relative z-10">
//               <h2 class="text-xl font-bold mb-2">
//                 ${amount.toFixed(2)} BDT is Donated for ${title}
//               </h2>
//               <p class="text-sm text-gray-600">
//                 Date: ${new Date().toString()}
//               </p>
//             </div>
//           </div>
//           <div class="mt-4 bg-gray-200 rounded-full h-2.5">
//             <div class="bg-blue-600 h-2.5 rounded-full w-full"></div>
//           </div>
//         </div>
//       `;
//       historySection.appendChild(historyItem);
//     }
  
//     function showDonationError(message) {
//       showDonationModal(message, true);
//     }
  
//     function showDonationModal(message, isError = false) {
//       const modalMessageElement = document.getElementById('modal-message');
//       modalMessageElement.textContent = message;
//       modalMessageElement.classList.toggle('text-red-500', isError);
//       donationModal.classList.remove('hidden');
//     }

// document.addEventListener('DOMContentLoaded', () => {
//   const accordionButtons = document.querySelectorAll('.rounded-lg button');

//   accordionButtons.forEach(button => {
//     button.addEventListener('click', () => {
//       const content = document.getElementById(button.getAttribute('aria-controls'));
//       const isExpanded = button.getAttribute('aria-expanded') === 'true';

      
//       button.setAttribute('aria-expanded', !isExpanded);

     
//       content.classList.toggle('hidden');

     
//       const icon = button.querySelector('svg');
//       icon.style.transform = isExpanded ? 'rotate(0deg)' : 'rotate(180deg)';
//     });
//   });
// });




//   });


//////////////////////////////////////////////////////////////////////////////////////////



document.addEventListener('DOMContentLoaded', function() {
  const donationButton = document.getElementById('donation-btn');
  const historyButton = document.getElementById('history-btn');
  const donationCardsSection = document.getElementById('donation-cards');
  const historySection = document.getElementById('history-section');
  const donationModal = document.getElementById('donation-modal');
  const closeModalButton = document.getElementById('close-modal');
  const totalBalanceElement = document.getElementById('total-balance');
  let totalBalance = parseInt(totalBalanceElement.textContent);

  donationButton.style.backgroundColor = "rgb(180, 244, 97)";
  donationButton.style.color = "white";

  donationButton.addEventListener('click', function() {
    toggleSections(donationCardsSection, historySection);
    toggleButtonActiveState(donationButton, historyButton);
  });

  historyButton.addEventListener('click', function() {
    toggleSections(historySection, donationCardsSection);
    toggleButtonActiveState(historyButton, donationButton);
  });

  closeModalButton.addEventListener('click', function() {
    donationModal.classList.add('hidden');
  });

  document.querySelectorAll('.donate-now').forEach(function(button) {
    button.addEventListener('click', handleDonation);
  });

  function toggleSections(activeSection, inactiveSection) {
    activeSection.classList.remove('hidden');
    inactiveSection.classList.add('hidden');
  }

  function toggleButtonActiveState(activeButton, inactiveButton) {
    activeButton.style.backgroundColor = "rgb(180, 244, 97)";
    activeButton.style.color = "white";

    inactiveButton.style.backgroundColor = "white";
    inactiveButton.style.color = "rgb(30, 30, 30)";
  }

  function handleDonation(event) {
    const card = event.target.closest('.donation-card');
    const amountInput = card.querySelector('.donation-amount');
    const currentAmountElement = card.querySelector('.current-amount');
    const title = card.querySelector('.donation-title').textContent;
    const amount = parseInt(amountInput.value);

    if (isNaN(amount) || amount <= 0) {
      showDonationError('Please enter a valid amount.');
      return;
    }

    if (amount > totalBalance) {
      showDonationError('Insufficient balance.');
      return;
    }

    updateBalance(amount);
    currentAmountElement.textContent = parseInt(currentAmountElement.textContent) + amount;
    addToHistory(title, amount);
    showDonationModal(`You have successfully donated ${amount} BDT to ${title}.`);

    amountInput.value = '';
  }

  function updateBalance(amount) {
    totalBalance -= amount;
    totalBalanceElement.textContent = totalBalance;
  }

  function addToHistory(title, amount) {
    const historyItem = document.createElement('li');
    historyItem.className = 'history-item';
    historyItem.innerHTML = `
      <div class="max-w-2xl mx-auto p-4">
        <div class="bg-white border-4 border-blue-200 rounded-lg p-6 relative">
          <div class="absolute inset-0 bg-blue-100 opacity-50 rounded-lg" style="background-image: repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.5) 10px, rgba(255,255,255,.5) 20px);"></div>
          <div class="relative z-10">
            <h2 class="text-xl font-bold mb-2">
              ${amount.toFixed(2)} BDT is Donated for ${title}
            </h2>
            <p class="text-sm text-gray-600">
              Date: ${new Date().toString()}
            </p>
          </div>
        </div>
        <div class="mt-4 bg-gray-200 rounded-full h-2.5">
          <div class="bg-blue-600 h-2.5 rounded-full w-full"></div>
        </div>
      </div>
    `;
    historySection.appendChild(historyItem);
  }

  function showDonationError(message) {
    showDonationModal(message, true);
  }

  function showDonationModal(message, isError) {
    if (isError === undefined) isError = false;
    const modalMessageElement = document.getElementById('modal-message');
    modalMessageElement.textContent = message;
    modalMessageElement.classList.toggle('text-red-500', isError);
    donationModal.classList.remove('hidden');
  }

  const accordionButtons = document.querySelectorAll('.rounded-lg button');
  
  accordionButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const content = document.getElementById(button.getAttribute('aria-controls'));
      const isExpanded = button.getAttribute('aria-expanded') === 'true';

      button.setAttribute('aria-expanded', !isExpanded);
      content.classList.toggle('hidden');

      const icon = button.querySelector('svg');
      icon.style.transform = isExpanded ? 'rotate(0deg)' : 'rotate(180deg)';
    });
  });
});
