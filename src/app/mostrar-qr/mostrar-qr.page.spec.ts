import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MostrarQRPage } from './mostrar-qr.page';

describe('MostrarQRPage', () => {
  let component: MostrarQRPage;
  let fixture: ComponentFixture<MostrarQRPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarQRPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MostrarQRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
