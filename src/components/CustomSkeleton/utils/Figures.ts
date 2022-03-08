import { StyleProp, ViewStyle } from "react-native";
import { FigureSize, FigureType, figureValues } from "../types";

export const PokemonSpritePropsStyle: StyleProp<ViewStyle> = {
  width: 90,
  height: 90,
  borderRadius: 100,
  alignSelf: "flex-end",
};
export const PokemonDetailSpritePropsStyle: StyleProp<ViewStyle> = {
  width: 280,
  height: 280,
  alignSelf: "center",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  justifyContent: "center",
  alignItems: "center",
};

export const filterFigures = (type: FigureType, size: FigureSize) => {
  return figureValues.find(
    (figure) => figure.type === type && figure.size === size
  );
};

//Funcion que convierte codigo JS a CSS
//Example: console.log(JSToCSS({textAlign:'center', backgroundColor:'blue, borderRadius:20'}))
const keys_with_px = ["width", "height", "borderRadius"];
export const JSToCSS = (JS: StyleProp<ViewStyle | any>) => {
  let cssString = "";
  for (let objectKey in JS) {
    if (keys_with_px.includes(objectKey)) {
      cssString +=
        objectKey.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`) +
        ": " +
        JS[objectKey] +
        "px;\n";
    } else {
      cssString +=
        objectKey.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`) +
        ": " +
        JS[objectKey] +
        ";\n";
    }
  }

  return cssString;
};
