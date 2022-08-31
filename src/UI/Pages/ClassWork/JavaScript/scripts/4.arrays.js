/*===================================
|| 
|| Arrays
|| 
===================================*/

const arraysScript =() => {
    
    console.group('Arrays');
    //Create Array
    const fruit = ['Apples','Grapes','Bananas'];
    console.log('Create:', fruit);
    console.log('By Index:', fruit[1]);

    //Add
    fruit.push('Kiwi');
    console.log('Add:',fruit);

    //Modify
    fruit[2]= 'Pineapple';
    console.log('Modify', fruit);

    //Arrays can hold all data types.
    fruit.push(123);
    fruit.push(['purple',999]);
    fruit.push({make:'Toyota', model:"Camry"});
    console.log('Store any Type:', fruit);

    // Map
    fruit.map(( item,idx ) => {
        console.log(`Fruit Item,: ${item} has an index of ${idx} `);
    });

    console.groupEnd();
}

export default arraysScript;