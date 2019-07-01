import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAnimalComponent } from './page-animal.component';

describe('PageAnimalComponent', () => {
  let component: PageAnimalComponent;
  let fixture: ComponentFixture<PageAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAnimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
