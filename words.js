if(document.getElementById('cambiar'))
{
  document.getElementById('cambiar').addEventListener('click', obtenerPalabras);
}

if(document.getElementById('reset'))
{
  document.getElementById('reset').addEventListener('click', borrarPalabras);
}


function obtenerPalabras()
{
  

  if(document.getElementById('nueva') && document.getElementById('original'))
  {
   nueva  = document.getElementById('nueva').value;
   original = document.getElementById('original').value;
  }

  chrome.storage.sync.get(['Flag'], function(items) 
  {
    bol = true;
    chrome.storage.sync.set({'Flag': bol} );
  });

  chrome.storage.sync.set({'Nueva': nueva,'Original': original})

}

function borrarPalabras()
{
  chrome.storage.sync.get(['Nueva' ,'Original','Prendido'], function(items) 
  {
    nueva = null
    original = null
    bol = false
    chrome.storage.sync.set({'Nueva': nueva,'Original': original,'Flag': bol})
   
  });
}
