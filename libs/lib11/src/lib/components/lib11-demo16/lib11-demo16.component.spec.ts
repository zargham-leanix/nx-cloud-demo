import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib11Demo16Component } from './lib11-demo16.component';

describe('Lib11Demo16Component', () => {
  let component: Lib11Demo16Component;
  let fixture: ComponentFixture<Lib11Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib11Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib11Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
