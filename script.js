const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", this.window.scrollY > 0);
})




document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('orderForm');
    const plan = document.getElementById('plan');
    const addons = document.querySelectorAll('#addons input[type="checkbox"]');
    const totalCostDisplay = document.getElementById('totalCost');
  
    const deliveryFee = 5; // Fixed delivery fee
  
    // Function to calculate total cost
    const calculateTotalCost = () => {
      let total = deliveryFee;
  
      // Add the cost of the selected plan
      const selectedPlan = plan.options[plan.selectedIndex];
      total += parseFloat(selectedPlan.getAttribute('data-price'));
  
      // Add the cost of selected add-ons
      addons.forEach(addon => {
        if (addon.checked) {
          total += parseFloat(addon.getAttribute('data-price'));
        }
      });
  
      totalCostDisplay.textContent = total.toFixed(2);
    };
  
    // Event listeners for changes in form inputs
    plan.addEventListener('change', calculateTotalCost);
    addons.forEach(addon => addon.addEventListener('change', calculateTotalCost));
  
    // Initial calculation
    calculateTotalCost();
  
    // Handle form submission
    form.addEventListener('submit', event => {
      event.preventDefault();
      alert('Order submitted successfully!');
    });
  });
  