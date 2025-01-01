export type ForeachCallback<T> = (value : T, key? : string | number, stack? : T[] | object | NodeList | HTMLCollection) => any;
export type ComplexObject<T = any> = { [name in string | number]: T; };

export class Iterator {
    /**
     * used to loop through a given object
     * @param stack : object to loop through
     * @param callback : function to call at each repetition with 3 parameters
     * 1. value, 2. key, 3. object
     */
    static foreach < T = any >(stack : T[] | ComplexObject | NodeList | HTMLCollection, callback : ForeachCallback<T>){
        let key : string | number;
        if (Iterator.isArrayPrototype(stack)) return Array.prototype.forEach.call(stack,callback);
        for(key in stack) callback(stack[key],key,stack);
    }
    /**
     * checks if the @param object is an Array or Array like prototype
     */
    static isArrayPrototype<T = any>(object :  T[] | ComplexObject | NodeList | HTMLCollection) : boolean{
        if (typeof object === "object" && object !== null && object.length !== void 0 && typeof object.length === "number" && (object.length === 0 || object[object.length-1] !== void 0)) 
            return true;
        return false;
    }
}

export function foreach< T = any >(stackc:T[] | ComplexObject | NodeList | HTMLCollection, callback : ForeachCallback<T>) {
    return Iterator.foreach(stackc,callback);
}