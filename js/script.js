import List from './modules/list.js';

(function(){
    // list test
    
    const list = new List();

    console.log("List Test");

    list.push_front("A");
    list.push_front("B");
    list.push_front("C");
    list.push_front("D");
    list.push_front("E");
    list.insert_at("First", 0);
    list.insert_at("Last", list.length);
    list.insert_at("Second Last", list.length - 1);

    console.log(list.toArray());
})();