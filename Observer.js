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
