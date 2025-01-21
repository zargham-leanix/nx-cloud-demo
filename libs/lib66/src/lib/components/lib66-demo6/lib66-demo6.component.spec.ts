import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib66Demo6Component } from './lib66-demo6.component';

describe('Lib66Demo6Component', () => {
  let component: Lib66Demo6Component;
  let fixture: ComponentFixture<Lib66Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib66Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib66Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
