import { InjectionToken } from '@angular/core';

export type SvgPathType = (svgName: string) => string;

const svgPathMapper: SvgPathType = (svgName: string) => {
  return `/assets/svgs/${svgName}.svg`;
};

export const SVG_PATH = new InjectionToken<SvgPathType>(
  'The function that represent the path to the svg',
  {
    factory: () => svgPathMapper,
  }
);
