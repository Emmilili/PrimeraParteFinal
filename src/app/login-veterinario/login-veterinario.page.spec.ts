import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginVeterinarioPage } from './login-veterinario.page';

describe('LoginVeterinarioPage', () => {
  let component: LoginVeterinarioPage;
  let fixture: ComponentFixture<LoginVeterinarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginVeterinarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginVeterinarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
