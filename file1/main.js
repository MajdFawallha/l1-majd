const names = [
    "Suhaib Sawalha",
    "Mohammad Yahya",
    "Salwa Fayyad",
    "Safaa Altaweel",
    "Faten Sultan",
    "Ahmad Rammal",
    "Osaid Hanza",
    "Mohammad Odeh",
    "Areej Alowan",
    "Majd Fawallha",
    "Mohamad Dallash",
    "Nada AbuIssa",
    "Rivan Jaradat",
    "Ameer Rabie",
    "Alaa Shaheen",
    "Taher Hasan",
  ];
  
  function generatePairs() {
    let shuffledNames = shuffle(names);
    let pairs = [];
    for (let i = 0; i < shuffledNames.length; i += 2) {
      let pair = [shuffledNames[i], shuffledNames[i + 1]];
      pairs.push(pair);
    }
  
    displayPairs(pairs);
  }
  
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  function displayPairs(pairs) {
    let pairsContainer = document.getElementById("pairs");
    pairsContainer.innerHTML = "";
    pairs.forEach((pair) => {
      let pairElement = document.createElement("div");
      
      var icon = document.createElement("i");
      icon.classList.add("fas", "fa-user");
      pairElement.appendChild(icon);

      pairElement.classList.add("pair");
      let pairText = document.createTextNode(pair.join(" and "));
      pairElement.appendChild(pairText);
      pairsContainer.appendChild(pairElement);
    });
  }
  
  let generateBtn = document.getElementById("generate-btn");
  generateBtn.addEventListener("click", generatePairs);