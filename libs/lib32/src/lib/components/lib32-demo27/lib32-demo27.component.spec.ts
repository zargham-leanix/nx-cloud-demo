import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib32Demo27Component } from './lib32-demo27.component';

describe('Lib32Demo27Component', () => {
  let component: Lib32Demo27Component;
  let fixture: ComponentFixture<Lib32Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib32Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib32Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
