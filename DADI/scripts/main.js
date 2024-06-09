const chipBtn = document.getElementById('chip-btn');
const scores = [];

chipBtn.addEventListener('click' , 
    function ()  {
        for(i = 0 ; i < 2 ; i++) {
            scores[i] = Math.floor(Math.random() * 6) + 1;
            
            switch(scores[i]) {
                case 1:
                    document.getElementsByClassName('dice')[i].innerHTML = '<div style="grid-area: mm;"></div>';
                    break;
                case 2:
                    document.getElementsByClassName('dice')[i].innerHTML = '<div style="grid-area: lt;">' + '</div><div style="grid-area: rb;"></div>';
                    break;
                case 3:
                    document.getElementsByClassName('dice')[i].innerHTML = '<div style="grid-area: lb;"></div>' + '<div style="grid-area: mm;"></div>' + '<div style="grid-area: rt;"></div>';
                    break;
                case 4:
                    document.getElementsByClassName('dice')[i].innerHTML = '<div style="grid-area: lt;"></div>' + '<div style="grid-area: lb;"></div>' + '<div style="grid-area: rt;"></div>' + '<div style="grid-area: rb;"></div>';
                    break;
                case 5:
                    document.getElementsByClassName('dice')[i].innerHTML = '<div style="grid-area: lt;"></div>' + '<div style="grid-area: lb;"></div>' + '<div style="grid-area: mm;"></div>' + '<div style="grid-area: rt;"></div>' + '<div style="grid-area: rb;"></div>';
                    break;
                default:
                    document.getElementsByClassName('dice')[i].innerHTML = '<div style="grid-area: lt;"></div>' + '<div style="grid-area: lm;"></div>' + '<div style="grid-area: lb;"></div>' + '<div style="grid-area: rt;"></div>' + '<div style="grid-area: rm;"></div>' + '<div style="grid-area: rb;"></div>';
            }
        }

        if (scores[0] !== scores[1]) {
            scores[0] > scores[1] ? document.getElementById('text-container').innerHTML = '<b>You won</b>, congratulations! If you want to play again roll the dices!': document.getElementById('text-container').innerHTML = '<b>You lost</b>, sorry! If you want to play again roll the dices!';
        } else {
            document.getElementById('text-container').innerHTML = '<b>Draw</b>, if you want to play again roll the dices!';
        }
    }
);