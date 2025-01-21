import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib20Demo16Component } from './lib20-demo16.component';

describe('Lib20Demo16Component', () => {
  let component: Lib20Demo16Component;
  let fixture: ComponentFixture<Lib20Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib20Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib20Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
