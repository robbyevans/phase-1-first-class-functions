function codding(){
    console.log(`write some code`);
}
function gym(){
    console.log('go to the gym')
}
function swimming(){
    console.log('go-swimming')
}

function receivesAFunction(callback){
    codding();
    callback()
}
receivesAFunction(swimming);

function returnsANamedFunction(){
    return (function ibra(){
        return ('yoh bro')
    })

}
returnsANamedFunction()();

function returnsAnAnonymousFunction(){
    return(function(){
        console.log('monkey business! sikupi hii ndizi!')
    })
}

returnsAnAnonymousFunction()();