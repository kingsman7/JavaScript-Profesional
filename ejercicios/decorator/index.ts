class Fiel {
  
  error:string[];
  input: HTMLInputElement;

  constructor(input:HTMLInputElement) {
    this.input = input
    this.error =[];

    let errorMessage = document.createElement('p');
    errorMessage.className ='text-danger';
    this.input.parentNode.insertBefore(errorMessage, this.input.nextSibling);

    this.input.addEventListener('input', ()=>{
      this.error=[]
      this.validate();
      errorMessage.innerText = this.error[0] || '';
    })
  }

  validate() {}
}

function RequiredFileDecoratior(field:Fiel): Fiel{
  let validate = field.validate
  field.validate = function(){
    validate()
    let value = field.input.value;
    if(!value){
      field.error.push('Requerido')
    }
  }
  return field;
}
function EmailRequiredFileDecoratior(field:Fiel): Fiel{
  let validate = field.validate;
  field.validate = function() {
    validate()
    let value = field.input.value;
    if(value.indexOf('@')===-1){
      field.error.push('Debe ser un email')
    }
  }
  return field;
}

let field = new Fiel(document.querySelector('#email'))
field = RequiredFileDecoratior(field)
field = EmailRequiredFileDecoratior(field)
