import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuVeterinarioPage } from './menu-veterinario.page';

describe('MenuVeterinarioPage', () => {
  let component: MenuVeterinarioPage;
  let fixture: ComponentFixture<MenuVeterinarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuVeterinarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuVeterinarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
