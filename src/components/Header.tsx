import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { TouchableOpacity, View, ViewProps } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styled from "styled-components";
import theme from "../theme";
import { MarginSize } from "../types/sizes";
import ButtonMenu from "./MenuButton";
import { TextType, TextView } from "./Text/TextView";

interface HeaderViewProps extends ViewProps {
  title: string;
  subtitle: string;
  withMenuButton?: boolean;
  withoutBackButton: boolean;
  textTypeTitle?: TextType;
  textTypeSubtitle?: TextType;
  bottom?: number;
  goScreen?: string;
  exit?: boolean;
  secondaryComponent?: () => JSX.Element;
  functionAdditionalGoScreen?: () => void;
  customButtonBack?: () => void;
  paddingHeading: MarginSize;
}
const SeparatorView = styled(View)`
  width: 20px;
  height: 20px;
`;

export const Header: React.FunctionComponent<HeaderViewProps> = ({
  title,
  subtitle,
  withMenuButton,
  textTypeTitle,
  textTypeSubtitle,
  bottom,
  withoutBackButton = true,
  exit,
  goScreen,
  secondaryComponent,
  functionAdditionalGoScreen,
  customButtonBack,
  paddingHeading,
}) => {
  const navigation = useNavigation();
  const functionGoToBack = (goScreen: string) => {
    if (functionAdditionalGoScreen) {
      functionAdditionalGoScreen();
    }
    navigation.navigate({ key: goScreen });
  };
  return (
    <View
      style={{
        flexDirection: "column",
        padding: paddingHeading,
        bottom: bottom ? bottom : 10,
      }}
    >
      {withMenuButton && <ButtonMenu></ButtonMenu>}
      <SeparatorView />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {withoutBackButton && (
          <TouchableOpacity
            onPress={() =>
              goScreen ? functionGoToBack(goScreen) : navigation.goBack()
            }
          >
            <Icon name="arrow-back" size={30} color={theme.colors.white} />
          </TouchableOpacity>
        )}
        {customButtonBack && customButtonBack()}
        <SeparatorView />
        {secondaryComponent && secondaryComponent()}
      </View>
      {!!title && (
        <>
          <View>
            <TextView
              id={"id_title"}
              text={title}
              type={textTypeTitle ? textTypeTitle : TextType.big}
              textAlign={"left"}
              colorText={theme.colors.black}
            />
          </View>
          <View>
            <TextView
              id={"id_subtitle"}
              text={subtitle}
              type={textTypeSubtitle ? textTypeSubtitle : TextType.medium}
              textAlign={"left"}
              colorText={theme.colors.darkGray}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default Header;
