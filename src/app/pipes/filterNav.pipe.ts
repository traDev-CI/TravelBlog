import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'myfilter',
    pure: false
})

export class MyFilter implements PipeTransform{
    transform(items: any[], filter: string ) : any {
        if (filter == "all") {
            return items
        }else{
            return items
            ? items.filter(item => item.category.indexOf(filter)!==-1)
            : items;
        }
    }
}

@Pipe({
    name: 'sortbtn'
})
export class SortBtn implements PipeTransform {
    transform(items: any[], sortedClass: string): any{

    }
}