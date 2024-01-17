function createCalculator() {
   return {
      display: document.querySelector('input.display'),

      start(){
         this.focus();
         this.clickButton();
         this.keyPress();
      },

      focus() {
         this.display.focus();
      },

      calculateExpression() {
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
      },

      updateDisplay(value) {
         this.display.value += value;
      },

      clearDisplay() {
         this.display.value = '';
      },

      removeLastCharacter(){
         this.display.value = this.display.value.slice(0, -1);
      },

      clickButton(){
         document.addEventListener('click', e => {
            const key = e.target;

            if(key.classList.contains('btn-num')) this.updateDisplay(key.innerText);
      
            if(key.classList.contains('btn-clear')) this.clearDisplay();
      
            if(key.classList.contains('btn-del')) this.removeLastCharacter();
            
            if(key.classList.contains('btn-eq')) this.calculateExpression();

            this.focus();
         });
      },

      keyPress(){
         document.addEventListener('keypress', e =>{
            if(e.key === 'Enter') this.calculateExpression();
         });
      }
   };
}

const calculator = createCalculator();
calculator.start();
