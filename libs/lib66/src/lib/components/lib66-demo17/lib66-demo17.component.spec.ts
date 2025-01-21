import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib66Demo17Component } from './lib66-demo17.component';

describe('Lib66Demo17Component', () => {
  let component: Lib66Demo17Component;
  let fixture: ComponentFixture<Lib66Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib66Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib66Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
