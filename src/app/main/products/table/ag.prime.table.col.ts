import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[agPrimeTableCol]',
  standalone:true
})
export class AgPrimeTableColDirective {
  @Input('agPrimeTableCol') columnKey!: string;
  constructor(public template: TemplateRef<any>) {}
}
