import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib66Demo42Component } from './lib66-demo42.component';

describe('Lib66Demo42Component', () => {
  let component: Lib66Demo42Component;
  let fixture: ComponentFixture<Lib66Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib66Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib66Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
