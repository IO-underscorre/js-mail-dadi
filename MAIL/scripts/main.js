// Allowed users mail addresses' list
const allowedMails = ['sofiabianchi@gmail.com' , 'mariorossi@gmail.com' , 'rosaverdi@gmail.com'];

const logForm = document.getElementById('log-form');

// On form submition start the function to find if the access is granted
logForm.addEventListener('submit' , 
    function ()  {
        const userEmail = document.getElementById('email-address').value;
        let isInTheList = false;
        
        // Confront the inputed mail address with every mail address in the list
        for (let i = 0 ; i < allowedMails.lenght && isInTheList === false ; i++) {
            allowedMails[i] === userEmail ? isInTheList = true : none;
        }
        
        if (isInTheList === false) {
            document.getElementById('output').innerHTML = `<strong class="denied">ACCESS DENIED</strong><p>Sorry, <span>${userEmail}</span> does not correspond to any of the emails authorized to access this document!</p>`;
        } else {
            document.getElementById('output').innerHTML = `<strong class="granted">ACCESS GRANTED</strong><p>Hi <span>${userEmail}</span>, you are authorized to access this document!</p>`;
        }
    }
);