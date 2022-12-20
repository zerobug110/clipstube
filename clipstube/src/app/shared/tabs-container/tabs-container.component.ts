import { TabsComponent } from '../tabs/tabs.component';
import { Component, AfterContentInit, ContentChild, QueryList } from '@angular/core';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.scss']
})
export class TabsContainerComponent implements AfterContentInit {
  @ContentChild(TabsComponent) tabs?: QueryList<TabsComponent>

  ngAfterContentInit(): void {
   this.tabs?.map()
  }

}
