import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib32Demo9Component } from './lib32-demo9.component';

describe('Lib32Demo9Component', () => {
  let component: Lib32Demo9Component;
  let fixture: ComponentFixture<Lib32Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib32Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib32Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
