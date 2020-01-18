import{Pipe,PipeTransform} from '@angular/core';
@Pipe({
  name:'filter'
})
export class FilterGender implements PipeTransform{
transform(value,gender){
return value.filter(x=>x.gender===gender);
}
}