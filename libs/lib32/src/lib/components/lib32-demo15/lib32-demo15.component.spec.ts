import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib32Demo15Component } from './lib32-demo15.component';

describe('Lib32Demo15Component', () => {
  let component: Lib32Demo15Component;
  let fixture: ComponentFixture<Lib32Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib32Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib32Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
