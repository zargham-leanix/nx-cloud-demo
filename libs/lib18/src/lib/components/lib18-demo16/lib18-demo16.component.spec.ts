import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib18Demo16Component } from './lib18-demo16.component';

describe('Lib18Demo16Component', () => {
  let component: Lib18Demo16Component;
  let fixture: ComponentFixture<Lib18Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib18Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib18Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
