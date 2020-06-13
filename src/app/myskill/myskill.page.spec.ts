import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyskillPage } from './myskill.page';

describe('MyskillPage', () => {
  let component: MyskillPage;
  let fixture: ComponentFixture<MyskillPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyskillPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyskillPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
