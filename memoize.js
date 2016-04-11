function mSelector (){

  var byIds = [];
  var elements = [];

  function getId (id){

    var newId;
    var DOMElement;

    if(byIds.length === 0) {
      newId = document.getElementById(id);
      byIds.push(newId);
      return newId;
    }

    var exists = byIds.some(function(element){
      if(id === element.id){
        DOMElement = element;
        return true;
      }
      else {
        return false;
      }
    });

    if(!exists){
      newId = document.getElementById(id);
      byIds.push(newId);
      return newId;
    }

    else {
      return DOMElement;
    }


  }

  function getElements (){

  }

  return {
    getId : getId,
    getElements : getElements
  };

}

