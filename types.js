function TypeChanger(type_to_be, content) {
  let back = true;
  if (type_to_be == "str" || type_to_be == "string") {
    result = str(content);
  } else if (type_to_be == "int" || type_to_be == "integer") {
    result = parseInt(content);
  } else if (type_to_be == "float" || type_to_be == "float") {
    result = parseFloat(content);
  } else if (type_to_be == "bool" || type_to_be == "boolean") {
    result = boolean(content);
  } else {
    back = false;
    console.error(
      "JS-Tools Types : Bad Type , see the help : https://github.com/Paptoos/js-tools"
    );
  }
  if (back) {
    return result;
  }
}

function invert (variable){
return !variable
}
