import { InjectionToken } from '@angular/core';

export type IconPathType = (iconName: string) => string;

const iconPathMapper: IconPathType = (iconName: string) => {
  return `/assets/icons/${iconName}`;
};

export const ICON_PATH = new InjectionToken<IconPathType>(
  'The function that represent the path to the icon',
  {
    factory: () => iconPathMapper,
  }
);
