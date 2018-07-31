var globalVariable = 'This is glabal variable'

function globalFunction(){
    var localVariable = 'this is local variable'
    console.log('Visit global/local variable')
    console.log(globalVariable)
    console.log(localVariable)
    globalVariable = 'This is changed global variable'
    console.log(globalVariable)

    function localFunction(){
        var innerLocalVariable = 'This is inner local variable'

        console.log('Visit global/local/innerLocal Variable')
        console.log(globalVariable)
        console.log(localVariable)
        console.log(innerLocalVariable)
    }

    localFunction()
}

globalFunction()



