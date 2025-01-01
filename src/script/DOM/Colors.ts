import { FocusMath } from "../common/FocusMath";

interface FcColor {
    color : string,
    rgbValue : string
}
interface FcColors {
    [name : string] : string
}
export class Colors {
    private static COLORS : FcColors =  {
        "blue" : "007bff", "indigo" : "6610f2", "purple" :  "6f42c1", "pink" : "e83e8c", "red" :  "dc3545", "orange" : "fd7e14", "yellow" : "ffc107", "green" : "28a745", "teal" : "20c997", "cyan" : "17a2b8", "white" : "ffffff", "gray" : "6c757d", "gray-dark" : "343a40", "gray-light" : "e1e2e7", "primary" : "007bff", "secondary" : "6c757d", "success" : "28a745", "info" : "17a2b8", "warning" : "ffc107", "danger" : "dc3545", "light" : "f8f9fa", "dark" : "343a40", "black" : "181e29"
    };
    private static last : FcColor = { color : null, rgbValue : null };
    static rgbValue(hexadecimalValue:string):string{
        if (hexadecimalValue === Colors.last.color) 
            return Colors.last.rgbValue;
        let first = hexadecimalValue.substr(0,2), second = hexadecimalValue.substr(2,2), 
        third = hexadecimalValue.substr(4,2);
        Colors.last = {
            color:hexadecimalValue,
            rgbValue:[parseInt("0x"+first),parseInt("0x"+second),parseInt("0x"+third)].join(",")
        };
        return Colors.last.rgbValue;
    }
    static getCSSCode(colorsToUse? : FcColors): string{
        let CSSCode : string[] = [], color : string;
        colorsToUse = colorsToUse?colorsToUse:Colors.COLORS;
		for (color in colorsToUse) {
			// setting background colors
            CSSCode.push("." + color + ", ." + color + ".transparent, ." + color + ".opaque, ." + color + ".opac, ." + color + ".min-trans, ." + color + ".min-opac, nav.active-bkg-" + color + " .active, .toggle.active-bkg-" + color + " .active," +
            // table rows background colors
            " .row-odd-" + color + " tr:nth-child(odd), .row-odd-" + color + " .tr:nth-child(odd), .row-even-" + color + " tr:nth-child(even), .row-even-" + color + " .tr:nth-child(even), " +
            ".hover-" + color + ":hover, .diaproma .arrow-" + color + ", .diaproma .indicator-" + color + ", form[data-type='multipart'].director-" + color + " .director, form[multipart].director-" + color + " .director, form[data-type='multipart'].button-" + color + " .director label, form[multipart].button-" + color + " .director label{ background-color: #" + colorsToUse[color] + "; opacity: 1;} \n");
            
            // opacity settings
            CSSCode.push("." + color + ".transparent{ background-color: rgba(" + Colors.rgbValue(colorsToUse[color]) + ",0.25); } \n." + color + ".min-trans{ background-color: rgba(" + Colors.rgbValue(colorsToUse[color]) + ",0.5); } \n." + color + ".min-opac{ background-color: rgba(" + Colors.rgbValue(colorsToUse[color]) + ",0.75); } \n");

			// borders settings
            CSSCode.push(".border-" + color + ", [class*=\"border-\"].border-" + color + ", nav.active-border-" + color + " .active, .toggle.active-border-" + color + " .active, .border-" + color + "::after, .diaproma .arrow-border-" + color + ", .diaproma .indicator-border-" + color + ", form[data-type='multipart'].director-border-" + color + " .director, form[multipart].director-border-" + color + " .director, form[data-type='multipart'].button-border-" + color + " .director label, form[multipart].button-border-" + color + " .director label {border-color: #" + colorsToUse[color] + ";} \n");

            // shadow settings
            // CSSCode.push(`.shadow-${color}, [class*="shadow-"].shadow-${color}, .nav.active.shadow-${color} .active, .toggle.active-shadow-${color} .active, .shadow-${color}::after, .diaproma .arrow-shadow-${color}, .diaproma .indicator-shadow-${color}, form[data-type='multipart'].director-shadow-${color} .director, form[multipart].director-shadow-${color} .director, form[data-type='multipart'].button-shadow-${color} .director label, form[multipart].button-shadow-${color} .director label { box-shadow: 1px 1px #${colorsToUse[color]}; } \n`);

            // text-shadow settings
            // CSSCode.push(`.text-shadow-${color}, [class*="text-shadow-"].text-shadow-${color}, .nav.active.text-shadow-${color} .active, .toggle.active-text-shadow-${color} .active, .text-shadow-${color}::after, .diaproma .arrow-text-shadow-${color}, .diaproma .indicator-text-shadow-${color}, form[data-type='multipart'].director-text-shadow-${color} .director, form[multipart].director-text-shadow-${color} .director, form[data-type='multipart'].button-text-shadow-${color} .director label, form[multipart].button-text-shadow-${color} .director label { text-shadow: 1px 1px #${colorsToUse[color]}; } \n`);

			// text color settings
            CSSCode.push(`nav.active-color-${color} .active, nav.active-color-${color} .active a, .toggle.active-color-${color} .active, .color-${color}, .diaproma .arrow-color-${color}, .diaproma .indicator-color-${color}, form[data-type='multipart'].director-color-${color} .director, form[multipart].director-color-${color} .director, form[data-type='multipart'].button-color-${color} .director label, form[multipart].button-color-${color} .director label{ color: #${colorsToUse[color]}; }\n`);
        }
        return CSSCode.join("");
        // documentBody.appendChild(FocusDOM.createElement("style",null,CSSCode.join(" ")));
    }
    /**
     * 
     * @param colors list of colors (string color hexadecimal value | object {name:color class name, color:color hexadecimal value})
     * use to initiate colors to use that are not predetermined in the default set Colors.COLORS
     * the colors must be in hexadecimal value
     */
    static setColors(...colors : string[] | { name : string, color : string}[]){
        let colorsSet : FcColors = {};
        colors.forEach(function (color:string | {name:string,color:string}) {
            if(typeof color === "string" && /^[a-fA-F0-9]*$/.test(color))
                colorsSet[(isNaN(parseInt(color.charAt(0)))?"":"c")+color] = color; 
                // if the color starts with a number its className will start with it will be called with a leading c if no className provided
            else if(typeof color === "object" && /^[a-fA-F0-9]*$/.test(color.color))
                colorsSet[color.name] = color.color;
        });
        Colors.getCSSCode(colorsSet);
    }
    static missing():string[]{
        let allColors :string[]=[], colorsVars : string[]=[];
        for (let index = 0; index <= 255; index++) {
            let hexVal : string = FocusMath.convertHex(index,2);
            colorsVars.push(hexVal);
        }
        allColors = Colors.addNewColors(colorsVars);
        return allColors;
    }
    private static addNewColors(allColors:string[]):string[]{
        let newColors :string[] = [];
        allColors.forEach(function (color:string) {
            allColors.forEach(function (color1:string) {
               allColors.forEach(function (color2:string) {
                  newColors.push(color+color1+color2); 
               });
            });
        });
        return newColors;
    }
}