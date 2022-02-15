const input = document.querySelector("input");
const add = document.querySelector(".add");
const ul = document.querySelector("ul");

add.addEventListener("click", (e) => {
    /* para evitar que se recarge la pagina */
    e.preventDefault();
    /* para que la variable del texto sea lo que la persona escriba en el input*/
    const text= input.value
    if (text !== "") {
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.textContent = text;
    
        li.appendChild(p);
        li.appendChild(addDeleteBtn());
        ul.appendChild(li);
    
        input.value = "";
        empty.style.display = "none";
      }
  });
