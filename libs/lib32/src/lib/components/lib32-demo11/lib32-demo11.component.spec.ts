import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib32Demo11Component } from './lib32-demo11.component';

describe('Lib32Demo11Component', () => {
  let component: Lib32Demo11Component;
  let fixture: ComponentFixture<Lib32Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib32Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib32Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
