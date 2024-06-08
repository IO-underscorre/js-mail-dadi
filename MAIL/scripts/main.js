// Allowed users mail addresses' list
const allowedMails = ['josephineberg@capscreen.com' , 'sheltonweber@capscreen.com' , 'battlemiles@capscreen.com' , 'adelesheppard@capscreen.com' , 'knightcarey@capscreen.com'];

const logForm = document.getElementById('log-form');

// On form submition start the function to find if the access is granted
logForm.addEventListener('submit' , 
    function ()  {
        const userEmail = document.getElementById('email-address').value;
        let isInTheList = false;
        
        // Confront the inputed mail address with every mail address in the list
        for (let i = 0 ; i < allowedMails.length && isInTheList === false ; i++) {
            allowedMails[i] === userEmail ? isInTheList = true : none;
        }
        
        isInTheList === false ? document.getElementById('output').innerHTML = `<strong class="denied">ACCESS DENIED</strong><p>Sorry, <span>${userEmail}</span> does not correspond to any of the emails authorized to access this document!</p>` : document.getElementById('output').innerHTML = `<strong class="granted">ACCESS GRANTED</strong><p>Hello, <span>${userEmail}</span> is authorized to access this document!</p>`;
    }
);