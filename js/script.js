const {createApp} = Vue

createApp({
    data(){
        return {
            slides : [
                {
                    image: './img/01.webp',
                        title: 'Marvel\'s Spiderman Miles Morale',
                        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                        i: 0,
                    }, {
                        image: './img/02.webp',
                        title: 'Ratchet & Clank: Rift Apart',
                        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                        i: 1,
                    }, {
                        image: './img/03.webp',
                        title: 'Fortnite',
                        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                        i: 2,
                    }, {
                        image: './img/04.webp',
                        title: 'Stray',
                        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                        i: 3,
                    }, {
                        image: './img/05.webp',
                        title: "Marvel's Avengers",
                        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                        i: 4,
                    }
                ],
            slide : {
                        image: './img/01.webp',
                        title: 'Marvel\'s Spiderman Miles Morale',
                        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                    },
            index: 0,
        }
    },
    methods:{
        eventRightActive: function(){
            this.index++
            if(this.index < this.slides.length){
                this.slide = this.slides[this.index];
                console.log(this.slide);
                const tutteLeImmagini = document.querySelectorAll('img.imgTumblr');
                tutteLeImmagini.forEach(img => img.classList.add('biancoNero'));
                tutteLeImmagini[this.index].classList.remove('biancoNero');
                tutteLeImmagini[this.index - 1 ].classList.add('biancoNero');
            }else{
                const tutteLeImmagini = document.querySelectorAll('img.imgTumblr');
                tutteLeImmagini.forEach(img => img.classList.add('biancoNero'));
                tutteLeImmagini[this.index -1 ].classList.add('biancoNero');
                this.index = 0
                this.slide = this.slides[this.index];
                console.log(this.slide);
                tutteLeImmagini[this.index].classList.remove('biancoNero');
            }
        },
        eventLeftActive: function(){
            if(this.index > 0){
                this.index--
                this.slide = this.slides[this.index];
                console.log(this.slide);
                const tutteLeImmagini = document.querySelectorAll('img.imgTumblr');
                tutteLeImmagini.forEach(img => img.classList.add('biancoNero'));
                tutteLeImmagini[this.index].classList.remove('biancoNero');
                tutteLeImmagini[this.index + 1 ].classList.add('biancoNero');
            }else{
                const tutteLeImmagini = document.querySelectorAll('img.imgTumblr');
                tutteLeImmagini.forEach(img => img.classList.add('biancoNero'));
                tutteLeImmagini[this.index ].classList.add('biancoNero');
                this.index = Number.parseInt(this.slides.length -1);
                this.slide = this.slides[this.index];
                console.log(this.slide);
                tutteLeImmagini[this.index].classList.remove('biancoNero');
            }
        },
        printTumblr: function(element){
            this.slides.forEach(immagini => {
                let imgTumblrEl = document.createElement('img');
                imgTumblrEl.src = immagini.image;
                imgTumblrEl.classList.add('imgTumblr', 'biancoNero');
                element.appendChild(imgTumblrEl);
                imgTumblrEl.addEventListener('click',() =>{
                    this.slide = immagini;
                    const tutteLeImmagini = document.querySelectorAll('img.imgTumblr');
                    tutteLeImmagini.forEach(img => img.classList.add('biancoNero'));
                    imgTumblrEl.classList.remove('biancoNero');
                    this.index = this.slide.i;
                })
                
            });
        },
        gigi: function(){
            let miniImmagini = document.querySelector('img.biancoNero')
            console.log(miniImmagini);
        }
        
    },
    mounted(){
        const boxTumblrEl = document.querySelector('div.boxImgTumblr');
        this.printTumblr(boxTumblrEl);
        const primaImmagine = document.querySelector('img.imgTumblr:first-child');
                console.log(primaImmagine)
                primaImmagine.classList.remove('biancoNero');
    }
}).mount('#app')

