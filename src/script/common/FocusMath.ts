import { FocusString } from "./FocusString";

export class FocusMath{
    /**
     * converts a number to its hexadecimal value
     * @param num : number to be converted
     * @param min : minimum length of the responce string
     * @param radix : actual base of the number to convert
     */
    static convertHex(num : number | string, min :number = 2, radix : number = 10) : string{
        let hexValues : {[name : number]:string} = {15:"F",14:"E",13:"D",12:"C",11:"B",10:"A"}, hexValue="";
        num = (typeof num === "string")?parseInt(num,radix):num;
        for(;num > 0;){
            hexValue +=hexValues[num%16]?hexValues[num%16]:num%16;
            num = parseInt((num/16).toString());
        }
        return FocusString.reverse(hexValue.length<min?hexValue+FocusString.repeat("0",min-hexValue.length):hexValue);
    }
    /**
     * generates a random number
     * @param min : determines the smallest number to return
     * @param max : determines the highest number to return
     */
    static randomInt (min: number = 0, max: number = 10): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    /**
     * checks if a given @param string is actually a number
     * @param floatingPoint : the type of floating point used in the string (. OR ,)
     * @returns the number value of the string if its a number or false otherwise
     */
    static isNumber(string : string, floatingPoint : "," | "." = ".") : number | false{
        if (typeof string !== "string") return false;
        string = FocusMath.removeUselessZeros(string, floatingPoint);
        let numberVal : number = parseFloat(string);
        return (!Number.isNaN(numberVal) && numberVal.toString() === string)?numberVal:false;
    }
    /**
     * removes the leading and the ending zeros after the floating point in @param string 
     * @param floatingPoint : the type of floating point used in the string (. OR ,)
     * @returns a string value of the number
     */
    private static removeUselessZeros(string : string, floatingPoint : "," | "." = ".") : string{
        let toRemove : "," | "." = floatingPoint==="."?",":".";
        string = FocusString.trim(FocusString.replaceMultiple(string, [new RegExp(`\\${toRemove}`,"g"),""], [/\ /g,""], [",","."]));
        return parseFloat(string).toString();
    }
    /**
     * return numbers in a more readable format
     * eg. 1000 as 1,000 or 1 000 depending on the floating point
     * @param num: number to beautify
     * @param floatingPoint : the type of floating point used in the string (. OR ,)
     * @returns the beautified number in a string format
     */
    public static beautifyNumbers(num: number, floatingPoint: "," | "." = "."): string{
        let numStr = num.toString(),
        numBlocks: string[] = [];
        for (let strLen = numStr.length; strLen > 3; strLen = numStr.length) {
            numBlocks.push(numStr.slice(strLen - 3, strLen));
            numStr = numStr.slice(0, strLen - 3);
        }
        numBlocks.push(numStr);
        return numBlocks.reverse().join(floatingPoint==="."?",":" ");
    }
}