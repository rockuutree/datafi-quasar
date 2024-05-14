// buttonLogic.js


let hoverCount = 0;
export function changeButton(event) {
    hoverCount++;
    if (hoverCount % 5 === 0) {
      alert("Please click yes!");
    }

    const buttonContainer = event.currentTarget;
    const windowWidth = window.innerWidth - 170;
    const windowHeight = window.innerHeight - 170;
    const randomX = Math.floor(Math.random() * windowWidth);
    const randomY = Math.floor(Math.random() * windowHeight);
    buttonContainer.style.position = 'absolute';
    buttonContainer.style.left = randomX + 'px';
    buttonContainer.style.top = randomY + 'px';
  }
  
  export function yessss(event) {
    this.showYesImage = true;
  }
