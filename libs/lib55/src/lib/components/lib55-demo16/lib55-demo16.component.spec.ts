import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib55Demo16Component } from './lib55-demo16.component';

describe('Lib55Demo16Component', () => {
  let component: Lib55Demo16Component;
  let fixture: ComponentFixture<Lib55Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib55Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib55Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
