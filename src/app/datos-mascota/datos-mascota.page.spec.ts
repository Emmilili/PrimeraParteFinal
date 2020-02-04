import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DatosMascotaPage } from './datos-mascota.page';

describe('DatosMascotaPage', () => {
  let component: DatosMascotaPage;
  let fixture: ComponentFixture<DatosMascotaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosMascotaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DatosMascotaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
