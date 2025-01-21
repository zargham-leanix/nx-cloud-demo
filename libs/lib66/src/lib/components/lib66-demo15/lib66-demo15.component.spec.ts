import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib66Demo15Component } from './lib66-demo15.component';

describe('Lib66Demo15Component', () => {
  let component: Lib66Demo15Component;
  let fixture: ComponentFixture<Lib66Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib66Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib66Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
