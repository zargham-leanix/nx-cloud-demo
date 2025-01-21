import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib32Demo16Component } from './lib32-demo16.component';

describe('Lib32Demo16Component', () => {
  let component: Lib32Demo16Component;
  let fixture: ComponentFixture<Lib32Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib32Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib32Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
