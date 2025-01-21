import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib32Demo47Component } from './lib32-demo47.component';

describe('Lib32Demo47Component', () => {
  let component: Lib32Demo47Component;
  let fixture: ComponentFixture<Lib32Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib32Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib32Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
