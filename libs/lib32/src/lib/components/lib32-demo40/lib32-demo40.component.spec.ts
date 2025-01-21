import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib32Demo40Component } from './lib32-demo40.component';

describe('Lib32Demo40Component', () => {
  let component: Lib32Demo40Component;
  let fixture: ComponentFixture<Lib32Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib32Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib32Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
