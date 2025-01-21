import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib32Demo33Component } from './lib32-demo33.component';

describe('Lib32Demo33Component', () => {
  let component: Lib32Demo33Component;
  let fixture: ComponentFixture<Lib32Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib32Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib32Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
