let windowModaleI = function (back){
    this.width1 = window.innerWidth;
    this.heigth1 = window.innerHeight;
    this.backG = back;
    this.widthT2 = window.innerWidth / 2;
    this.heigthH2 = window.innerHeight / 2;

    this.open = function (txt) {
        let windoz = document.createElement('div');
        windoz.style.width = this.width1 +  "px";
        windoz.style.height = this.heigth1 + "px";
        windoz.style.backgroundColor = this.backG;
        windoz.className = 'trans';
        document.body.appendChild(windoz);

        let newWindoz = document.createElement('div');
        newWindoz.style.width = this.widthT2 + "px";
        newWindoz.style.height = this.heigthH2 + "px";
        newWindoz.style.marginLeft = 'auto';
        newWindoz.style.marginRight = 'auto';
        newWindoz.style.marginTop = '12rem';
        newWindoz.style.backgroundColor = 'rgb(255 255 255 / 98%)';
        newWindoz.style.border = '20px solid black';
        newWindoz.style.borderRadius = '10px';
        newWindoz.innerHTML = txt;
        newWindoz.style.fontSize = '2em';
        newWindoz.style.display = 'flex';
        newWindoz.style.justifyContent = 'center';
        newWindoz.style.alignItems = 'center'
        windoz.appendChild(newWindoz);
        newWindoz.addEventListener('click', () => windoz.remove());
    }
}

let modWin2 = new windowModaleI('rgba(0,0,0,0.43)');
modWin2.open('ceci est une fenetre modale  en JS vanilla');