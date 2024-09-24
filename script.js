// document.addEventListener('DOMContentLoaded', () => {
//     const donationBtn = document.getElementById('donation-btn');
//     const historyBtn = document.getElementById('history-btn');
//     const donationCards = document.getElementById('donation-cards');
//     const historySection = document.getElementById('history-section');
//     const modal = document.getElementById('donation-modal');
//     const closeModal = document.getElementById('close-modal');
//     const totalBalanceElem = document.getElementById('total-balance');
//     let totalBalance = parseInt(totalBalanceElem.textContent);
  
//     donationBtn.addEventListener('click', () => {
//       donationCards.classList.remove('hidden');
//       historySection.classList.add('hidden');
//       donationBtn.classList.add('bg-green-500');
//       historyBtn.classList.remove('bg-green-500');
//     });
  
//     historyBtn.addEventListener('click', () => {
//       donationCards.classList.add('hidden');
//       historySection.classList.remove('hidden');
//       historyBtn.classList.add('bg-green-500');
//       donationBtn.classList.remove('bg-green-500');
//     });
  
//     closeModal.addEventListener('click', () => {
//       modal.classList.add('hidden');
//     });
//     function toggleActive(activeId, inactiveId) {
//         const activeBtn = document.getElementById(activeId);
//         const inactiveBtn = document.getElementById(inactiveId);

//         activeBtn.style.backgroundColor = "rgb(180, 244, 97)";
//         activeBtn.style.color = "white";

//         inactiveBtn.style.backgroundColor = "white";
//         inactiveBtn.style.color = "rgb(30, 30, 30)";
//       }

//       // Set default active button
//       document.addEventListener("DOMContentLoaded", function () {
//         document.getElementById("donation-btn").style.backgroundColor =
//           "rgb(180, 244, 97)";
//         document.getElementById("donation-btn").style.color = "white";
//       });
//     function updateBalance(amount) {
//       totalBalance -= amount;
//       totalBalanceElem.textContent = totalBalance;
//     }
  
//     function addToHistory(title, amount) {
//         const historyItem = document.createElement('li');
//         historyItem.className = 'history-item';
//         historyItem.innerHTML = `
//           <div class="max-w-2xl mx-auto p-4">
//             <div class="bg-white border-4 border-blue-200 rounded-lg p-6 relative">
//               <div class="absolute inset-0 bg-blue-100 opacity-50 rounded-lg" style="background-image: repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.5) 10px, rgba(255,255,255,.5) 20px);"></div>
//               <div class="relative z-10">
//                 <h2 class="text-xl font-bold mb-2">
//                   ${amount.toFixed(2)} BDT is Donated for ${title}
//                 </h2>
//                 <p class="text-sm text-gray-600">
//                   Date: ${new Date().toString()}
//                 </p>
//               </div>
//             </div>
//             <div class="mt-4 bg-gray-200 rounded-full h-2.5">
//               <div class="bg-blue-600 h-2.5 rounded-full w-full"></div>
//             </div>
//           </div>
//         `;
//         historySection.appendChild(historyItem);
//       }
      
  
//     function showModal(message) {
//       document.getElementById('modal-message').textContent = message;
//       modal.classList.remove('hidden');
//     }
  
//     document.querySelectorAll('.donate-now').forEach(button => {
//       button.addEventListener('click', (e) => {
//         const card = e.target.closest('.donation-card');
//         const amountInput = card.querySelector('.donation-amount');
//         const currentAmountElem = card.querySelector('.current-amount');
//         const title = card.querySelector('.donation-title').textContent;
//         const amount = parseInt(amountInput.value);
  
//         if (isNaN(amount) || amount <= 0) {
//           alert('Please enter a valid amount.');
//           return;
//         }
  
//         if (amount > totalBalance) {
//           alert('Insufficient balance.');
//           return;
//         }
  
//         updateBalance(amount);
//         currentAmountElem.textContent = parseInt(currentAmountElem.textContent) + amount;
//         addToHistory(title, amount);
//         showModal(`You have successfully donated ${amount} BDT to ${title}.`);
        
//         // Clear the input field
//         amountInput.value = '';
//       });
//     });
//   });
  



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



document.addEventListener('DOMContentLoaded', () => {
    const donationButton = document.getElementById('donation-btn');
    const historyButton = document.getElementById('history-btn');
    const donationCardsSection = document.getElementById('donation-cards');
    const historySection = document.getElementById('history-section');
    const donationModal = document.getElementById('donation-modal');
    const closeModalButton = document.getElementById('close-modal');
    const totalBalanceElement = document.getElementById('total-balance');
    let totalBalance = parseInt(totalBalanceElement.textContent);
  
    // Set the initial styles for the buttons
    donationButton.style.backgroundColor = "rgb(180, 244, 97)";
    donationButton.style.color = "white";
  
    donationButton.addEventListener('click', () => {
      toggleSections(donationCardsSection, historySection);
      toggleButtonActiveState(donationButton, historyButton);
    });
  
    historyButton.addEventListener('click', () => {
      toggleSections(historySection, donationCardsSection);
      toggleButtonActiveState(historyButton, donationButton);
    });
  
    closeModalButton.addEventListener('click', () => {
      donationModal.classList.add('hidden');
    });
  
    document.querySelectorAll('.donate-now').forEach(button => {
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
  
      // Clear the input field
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
  
    function showDonationModal(message, isError = false) {
      const modalMessageElement = document.getElementById('modal-message');
      modalMessageElement.textContent = message;
      modalMessageElement.classList.toggle('text-red-500', isError);
      donationModal.classList.remove('hidden');
    }
///////////////////////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', () => {
  const accordionButtons = document.querySelectorAll('.rounded-lg button');

  accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
      const content = document.getElementById(button.getAttribute('aria-controls'));
      const isExpanded = button.getAttribute('aria-expanded') === 'true';

      // Toggle aria-expanded
      button.setAttribute('aria-expanded', !isExpanded);

      // Toggle content visibility
      content.classList.toggle('hidden');

      // Rotate arrow icon
      const icon = button.querySelector('svg');
      icon.style.transform = isExpanded ? 'rotate(0deg)' : 'rotate(180deg)';
    });
  });
});




  });