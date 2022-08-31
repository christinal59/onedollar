/*===================================
|| 
|| Objects
|| 
===================================*/

const objectsScript =() => {

    /*---------------------------
    | Const and Let
    ---------------------------*/
    
    console.group('Objects');

    const myObj ={
        first:'Christina',
        last:'Li',
        email:'licw2.is@gmail.com',
    }
    console.log('myOb:', myObj);
    console.log('myObj, first:', myObj.first);
    console.log('myObj, last:', myObj.last);
    console.log('myObj, email:', myObj.email);


    // Add/Update
    myObj.age= 27;
    myObj.email='christinalee.is@gmail.com';
    console.log('myObj:', myObj);

    console.groupEnd();
}

export default objectsScript;