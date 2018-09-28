class Observable {
    constructor() {
        this.observers = []
    }

    sendMessages ( msg ){
        this.observers.forEach(( observer ) => {
            observer.notify( msg )
        })
    }

    addObserver ( observer ) {
        this.observers.push( observer )
    }
}

class Observer {
    constructor( behavior ){
        this.behavior = behavior
    }

    notify( msg ) {
        this.behavior( msg )
    }
}

const obsertable = new Observable()
let observerOne = new Observer( msg => {console.log('1',msg)})
let observerSecond = new Observer( msg => {console.log('2',msg)})
obsertable.addObserver(observerOne)
obsertable.addObserver(observerSecond)
obsertable.sendMessages('send')


