
const vehicle = ()=>{
    constructor(number,type)
    {
        this.number = number;
        this.type = type;
    }
}

const parkingSlot = ()=>{
    constructor(id)
    {
        this.id = id;
        this.vehicle = null;

    }
     park(vehicle)
    {
        if(this.vehicle.type !== vehicle.type) return 'Vehicle cannot fit in here'
        if(!this.isAvailable()) return 'Not free for Vehicle'
        this.vehicle = vehicle;
    }

    isAvailable()
    {
        return this.vehicle === null;
    }

}

