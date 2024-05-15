import { Pipe, PipeTransform } from '@angular/core';

export type Mapper<T, G> = (item: T, ...args: any[]) => G;

@Pipe({ name: 'rmMapper', standalone: true })
export class MapperPipe implements PipeTransform {
  transform<T, G>(value: T, mapper: Mapper<T, G>, ...args: any[]): G {
    return mapper(value, ...args);
  }
}
