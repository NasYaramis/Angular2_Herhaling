export class Recept{
     name:string;
     calorie:number;
     ingredients:string;
     time: number;

    constructor(name:string, calorie:number, ingredients:string, time:number)
        {
            this.name = name;
            this.calorie = calorie;
            this.ingredients = ingredients;
            this.time = time;
        }
}