/*===================================
|| 
|| Functions
|| 
===================================*/

const functionsScript =() => {
    
    console.group('Functions Declarations');
    function addMe(arg1, arg2) {
        console.log(`Add Me: ${arg1} + ${arg2} = ${arg1 + arg2}`);
        //a bunche actions
    }

    addMe(100,200);
    addMe(10,3);
    addMe(12345,987654);
    addMe();





    console.groupEnd();

    console.group('Function Literal');

    //Anoymous Function Example
    // function () {

    // }

    const subtractMe =function(arg1, arg2) {
        console.log(`Subtract Me: ${arg1} - ${arg2} = ${arg1- arg2}`);
    }

    subtractMe(100, 200);
    subtractMe(10, 3);
    subtractMe(12345, 987654);


    console.groupEnd();

    console.group('Fat Arrow Function');

    const multiplyMe = (arg1, arg2) => {
        console.log(`Multiply Me: ${arg1} * ${arg2} = ${arg1 * arg2}`);
    }
    multiplyMe(100, 200);
    multiplyMe(10, 3);
    multiplyMe(12345, 987654);


    console.groupEnd();

}

export default functionsScript;