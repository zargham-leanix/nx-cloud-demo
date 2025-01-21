import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib32Demo37Component } from './lib32-demo37.component';

describe('Lib32Demo37Component', () => {
  let component: Lib32Demo37Component;
  let fixture: ComponentFixture<Lib32Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib32Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib32Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
