import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib32Demo6Component } from './lib32-demo6.component';

describe('Lib32Demo6Component', () => {
  let component: Lib32Demo6Component;
  let fixture: ComponentFixture<Lib32Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib32Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib32Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
