function Calculator() {
   this.display = document.querySelector('input.display');

   this.start = () => {
      focus();
      clickButton();
      keyPress();
   };

   const focus = () => this.display.focus();
 
   const calculateExpression = () => {
      let conta = this.display.value;

      try {
         conta = eval(conta);

         if(!conta && conta!=0) {
            alert('Conta inválida');
            return;
         }

         this.display.value = String(conta);
      } catch(e) {
         alert('Conta inválida');
         return;
      }  
   };

   const updateDisplay = (value) => this.display.value += value;
 
   const clearDisplay = () => this.display.value = '';

   const removeLastCharacter = () => this.display.value = this.display.value.slice(0, -1);

   const clickButton = () => {
      document.addEventListener('click', e => {
         const key = e.target;

         if(key.classList.contains('btn-num')) updateDisplay(key.innerText);
   
         if(key.classList.contains('btn-clear')) clearDisplay();
   
         if(key.classList.contains('btn-del')) removeLastCharacter();
         
         if(key.classList.contains('btn-eq')) calculateExpression();

         focus();
      });
   };

   const keyPress = () => {
      document.addEventListener('keypress', e =>{
         if(e.key === 'Enter') calculateExpression();
      });
   }

}

const calculator = new Calculator();
calculator.start();
