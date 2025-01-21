import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib32Demo32Component } from './lib32-demo32.component';

describe('Lib32Demo32Component', () => {
  let component: Lib32Demo32Component;
  let fixture: ComponentFixture<Lib32Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib32Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib32Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
