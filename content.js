var elementsInsideBody = [...document.body.getElementsByTagName('*')];



function findAndReplace()
{
  chrome.storage.sync.get(['Flag'], function(items) 
  {
    bol = items['Flag']
    console.log(bol)
      if(bol == true)
      {
        chrome.storage.sync.get(['Nueva','Original'], function(items) 
        {
          nueva = items['Nueva']
          original = items['Original']
          console.log("Original " + original + " Nueva " + nueva)
          elementsInsideBody.forEach(element =>{
          element.childNodes.forEach(child =>{
          if(child.nodeType === 3)
          {
            let value = child.nodeValue;
            //flag g-> buscará todas las variables - flag i-> no es case sensitive
            value = value.replace(new RegExp(original, "gi"), nueva);
            child.nodeValue = value;  
          }
        });
    });
    });
    }
  });

} 

  window.onload = findAndReplace();

  
  

 





