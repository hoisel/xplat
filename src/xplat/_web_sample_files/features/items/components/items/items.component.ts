import { Component, OnInit } from '@angular/core';

// libs
import { LogService } from '@<%= npmScope %>/core';
import { ItemsBaseComponent, ItemService } from '@<%= npmScope %>/features';

@Component({
  selector: '<%= prefix %>-items',
  templateUrl: './items.component.html'
})
export class ItemsComponent extends ItemsBaseComponent {

  constructor(
    log: LogService,
    itemService: ItemService,
  ) {
    super(log, itemService);
  }
}

