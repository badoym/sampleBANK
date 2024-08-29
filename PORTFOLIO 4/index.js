var attempt = 3; 

function validate()
{
    var password = document.getElementById('password').value;

    if(password == '082292')
    {
        window.location = 'mainpage.html';
        return false;
    }

    else
    {
        alert('Wrong PIN Number. You have left ' + attempt + ' attempts');
        document.getElementById('password').value = "";
        
        attempt --;

        if(attempt == 0)
        {
            document.getElementById('password').disabled = true;
            document.getElementById('submit').disabled = true;

            return false;
        }
    }
}