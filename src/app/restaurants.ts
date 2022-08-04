
export class Restaurants{
    constructor(public restaurant: Restaurant[]){}
}
export class Restaurant{

    constructor(
        public id: string,
        public name:string,
        public description: string,
        public foodrating: string,
        public deliveryrating: string,
        public photo: string,
        public dishes: string[],
    ){}
}
export class NewUsers{
    constructor(public users: User[]){}
}

export class User{
    constructor(public email: string, public password: string)
    {}
}