import { foreach } from "../object/Iterator";
import { FocusMath } from "./FocusMath";


export class FocusString{
    static alphabet: string = "abcdefghijklmnopqrstuvwxyz";
    static alphabetLower : string;
    static alphabetUpper : string;
    static set : boolean = false;
    static init () {
        if (!FocusString.set) {
            FocusString.alphabetLower = FocusString.alphabet;
            FocusString.alphabet += (FocusString.alphabetUpper = FocusString.alphabet.toUpperCase());
            FocusString.set = true;
        }
    }
    static getAlphabet (withNumbers : boolean = false) : string{
        FocusString.init();
        return FocusString.alphabet + (withNumbers?"0123456789":"");
    }
    static ucFirst(str : string) : string {
        if (typeof str !== "string") return str;
        return str.charAt(0).toUpperCase()+str.substring(1);
    }
    static reverse(str : string) : string {
        if (typeof str !== "string") return str;
        let newStr : string = "", strLen : number = str.length - 1;
        for (let index = strLen; index >=0 ; index--) newStr += str.charAt(index);
        return newStr;
    }
    static trim(str : string) : string {
        if (typeof str !== "string") return str;
        return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    }
    static repeat(str : string, recurence : number = 0) : string{
        if (typeof str !== "string") return str;
        let newStr : string = "";
        for (let index = 0; index < recurence; index++) newStr += str;
        return newStr;
    }
    static randomString(length : number = 10, withNumbers : boolean = false) : string {
        let string : string = "", i = 0, alphabet : string = FocusString.getAlphabet(withNumbers) ,
        alphabetLen : number = alphabet.length-1,
        currentIndex : number = FocusMath.randomInt(0,alphabetLen), 
        previousIndex : number = 0;
        for (i; i <= length; i++) {
            while (currentIndex === previousIndex) 
                currentIndex = FocusMath.randomInt(0,alphabetLen);
            string += alphabet.charAt(currentIndex);
            previousIndex = currentIndex;
        }
        return string;
    }
    static kebabToCamelCase(kebabString : string) : string{
        if (typeof kebabString !== "string") return kebabString;
        let camelString : string = kebabString, hyphenIndex : number = kebabString.indexOf("-");
        while(hyphenIndex !== -1) {
            camelString = camelString.substring(0,hyphenIndex)+FocusString.ucFirst(
                camelString.substring(hyphenIndex+1));
            hyphenIndex = camelString.indexOf("-");
        }
        return camelString; 
    }
    static camelToKebabCase(camelString : string) : string{
        FocusString.init();
        if (typeof camelString !== "string") return camelString;
        let kebabString : string = "";
        for (let index = 0; index < camelString.length; index++) {
            let char : string = camelString.charAt(index);
            kebabString += (index !== 0 && FocusString.alphabetUpper.indexOf(char) !== -1)?"-"+char:char;
        }
        return kebabString.toLowerCase();
    }
    static replaceMultiple(string : string, ...replacements : [(string | RegExp), string][]) : string{
        if (typeof string !== "string") return string;
        let newString : string = string;
        foreach(replacements, replacement=>{
            let [variable, value] = replacement;
            newString = newString.replace(variable instanceof RegExp?variable:new RegExp(variable,"g"), value);
        });
        return newString;
    }
}