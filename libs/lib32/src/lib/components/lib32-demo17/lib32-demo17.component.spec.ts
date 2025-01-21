import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib32Demo17Component } from './lib32-demo17.component';

describe('Lib32Demo17Component', () => {
  let component: Lib32Demo17Component;
  let fixture: ComponentFixture<Lib32Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib32Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib32Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
