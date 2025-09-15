type dataType = {
    id: string; //unique identifier
    title: string; // text shown
  }

const DATA: dataType[] = [
    {id: "1", title: "First Item"},
    {id: "2", title: "Second Item"},
    {id: "3", title: "Third Item"},
    {id: "4", title: "Fourth Item"},

];
// Don't use default when exporting more than one item and use curly braces
export { DATA, dataType };

