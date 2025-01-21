import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib58Demo16Component } from './lib58-demo16.component';

describe('Lib58Demo16Component', () => {
  let component: Lib58Demo16Component;
  let fixture: ComponentFixture<Lib58Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib58Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib58Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
