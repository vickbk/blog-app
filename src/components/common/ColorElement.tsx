import { Colors } from "../../script/DOM/Colors";

export default function ColorElement(){
    const myColors = Colors.getCSSCode()
    // Colors.setColors({name: "cxcxbnc", color: "abcf00"})
    return <style jsx global>
        {myColors}
    </style>
}