/*===================================
|| 
|| Variables Console
|| 
===================================*/

const variablesScript =() => {

    /*---------------------------
    | Const and Let
    ---------------------------*/
    
    console.group('Const and Let');
        const myConst = 100;
        // myConst = 200;
        console.log('Const:', myConst);


        let myLet= 100;
        myLet= 200;
        console.log('Let:', myLet);

    console.groupEnd();

    /*---------------------------
    | Numbers and Strings (Primitives)
    ---------------------------*/
    console.group ('Numbers and Strings (Primatives)');

    /* Number ---------------------------*/
    let myNum = 32;
    myNum = myNum + 50;
    console.log('Numbers:', myNum);


    /* Strings ---------------------------*/
    let myString = 'I went to the';
    myNum = myString + 'yesterday';
    console.log('Strings:', myString);


    /* Template Strings ---------------------------*/

    const place= 'theater';
    let myTemplateStrings = `
        I went to the ${place}
        yesterday. I really like
        the ${place}
    
    `;

    console.log('Template Strings:', myTemplateStrings);



    console.groupEnd();
}

export default variablesScript;