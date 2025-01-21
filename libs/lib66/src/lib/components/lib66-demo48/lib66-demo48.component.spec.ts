import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib66Demo48Component } from './lib66-demo48.component';

describe('Lib66Demo48Component', () => {
  let component: Lib66Demo48Component;
  let fixture: ComponentFixture<Lib66Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib66Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib66Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
