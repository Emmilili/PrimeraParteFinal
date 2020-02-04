import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistroVeterianrioPage } from './registro-veterianrio.page';

describe('RegistroVeterianrioPage', () => {
  let component: RegistroVeterianrioPage;
  let fixture: ComponentFixture<RegistroVeterianrioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroVeterianrioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroVeterianrioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
