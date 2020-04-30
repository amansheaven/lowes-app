import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductcardPage } from './productcard.page';

describe('ProductcardPage', () => {
  let component: ProductcardPage;
  let fixture: ComponentFixture<ProductcardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductcardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductcardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
