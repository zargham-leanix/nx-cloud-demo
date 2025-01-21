import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib52Demo16Component } from './lib52-demo16.component';

describe('Lib52Demo16Component', () => {
  let component: Lib52Demo16Component;
  let fixture: ComponentFixture<Lib52Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib52Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib52Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
