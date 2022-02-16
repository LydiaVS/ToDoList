window.onload = () => {
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
