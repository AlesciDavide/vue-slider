const {createApp} = Vue

createApp({
    data(){
        return {
            slides : [
                {
                    image: './img/01.webp',
                        title: 'Marvel\'s Spiderman Miles Morale',
                        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                    }, {
                        image: './img/02.webp',
                        title: 'Ratchet & Clank: Rift Apart',
                        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                    }, {
                        image: './img/03.webp',
                        title: 'Fortnite',
                        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                    }, {
                        image: './img/04.webp',
                        title: 'Stray',
                        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                    }, {
                        image: './img/05.webp',
                        title: "Marvel's Avengers",
                        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                    }, {
                        image: './img/06.jpg',
                        title: "Deadpool & Wolverine",
                        text: 'La Time Variance Authority strappa l\'irresponsabile eroe Deadpool dalla sua vita tranquilla, e lo mette in una missione con Wolverine che cambierà la storia del Marvel Cinematic Universe',
                    }
                ],
            activeIndex: 5,
            isActive: false,
            isAutoplayActive: true,
            autoPlayClock: null,
        }
    },
    methods:{
        /* funzione per  attivare il tasto destro*/
        eventRightActive: function(){
            if(this.activeIndex < this.slides.length-1){
                this.activeIndex++
            }else{
                this.activeIndex = 0
            }
            this.AnimationEffectFunction();
        },
        /* funzione per  attivare il tasto sinistro*/
        eventLeftActive: function(){
            if(this.activeIndex > 0){
                this.activeIndex--
            }else{
                this.activeIndex = this.slides.length-1;
            }
            this.AnimationEffectFunction();
        },
        tumblrChangeindex: function(index){
            this.activeIndex = index;
            this.AnimationEffectFunction();
        },
        
        /* animazione per l'immagine principale ad ogni cambio di immagine */
        AnimationEffectFunction: function(){
            this.isActive = true;

            setTimeout(() =>{
                this.isActive = false;
            }, 750)
        },
        /*  startAutoPlay: function(){
            if(this.isAutoplayActive === true){
                this.autoPlayClock = setInterval(this.eventRightActive , 3500);
            }else{

            }
        },
        stopAutoPlay: function(){
            if(this.isAutoplayActive === true){
                clearInterval(this.autoPlayClock);
                this.isAutoplayActive = true;
            }
        }
         */
    },
    /*  mounted(){
        this.startAutoPlay();
    }, */
}).mount('#app')