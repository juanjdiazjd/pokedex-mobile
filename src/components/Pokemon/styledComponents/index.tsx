import React from 'react';
import {Image, ImageBackground, StyleProp, View, ViewStyle} from 'react-native';
import styled from 'styled-components';
import {filterFigures, JSToCSS, PokemonDetailSpritePropsStyle, PokemonSpritePropsStyle} from '../../CustomSkeleton/utils/Figures';
import {CustomSkeleton} from '../../CustomSkeleton/Skeleton';
import {FigureSize, FigureType, SkeletonType} from '../../CustomSkeleton/types';

export const PokemonLogo = styled(ImageBackground)`
  width: 100px;
  height: 100px;
  align-items: flex-end;
  top: 0;
  left: 70%;
  right: 0;
  bottom: 10%;
  opacity: 0.8;
  position: absolute;
`;

export const PokemonSprite = styled(Image)`
  ${JSToCSS(PokemonSpritePropsStyle)}
`;
export const PokemonDetailSprite = styled(Image)`
  ${JSToCSS(PokemonDetailSpritePropsStyle)}
`;
export const generateSkeleton = (
  skeletonType: SkeletonType,
  size: FigureSize,
  customStyle?: StyleProp<ViewStyle>,
) => {
  switch (skeletonType) {
    case SkeletonType.text:
      return (
        <CustomSkeleton
          renderSkeleton={() => (
            <View
              style={[filterFigures(FigureType.rectangle, size), customStyle]}
            />
          )}
        />
      );
    case SkeletonType.image:
      return (
        <CustomSkeleton
          renderSkeleton={() => (
            <View
              style={[filterFigures(FigureType.circle, size), customStyle]}
            />
          )}
        />
      );
    default:
      <CustomSkeleton
        renderSkeleton={() => (
          <View
            style={[filterFigures(FigureType.rectangle, size), customStyle]}
          />
        )}
      />;
  }
};
