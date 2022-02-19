window.onload = () => {
    const input = document.querySelector("input");
    const add = document.querySelector(".add");
    const ul = document.querySelector("ul");

    add.addEventListener("click", (e) => {
    /* para evitar que se recarge la pagina */
    e.preventDefault();
    console.log(1)
    /* para que la variable del texto sea lo que la persona escriba en el input*/
    const text= input.value
    const li= document.createElement('li');
    const p= document.createElement('p');
    p.textContent= text;
    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);   
  });
    //Añadir botón eliminar
    function addDeleteBtn() {
      const deleteBtn = document.createElement("button");
    
      deleteBtn.textContent = "X";
      deleteBtn.className = "btn-delete";
    //Evento eliminar
      deleteBtn.addEventListener("click", (e) => {
        const item = e.target.parentElement;
        ul.removeChild(item);
    
        const items = document.querySelectorAll("li");
    
        if (items.length === 0) {
          empty.style.display = "block";
        }
      });
    
      return deleteBtn;
    }


}
