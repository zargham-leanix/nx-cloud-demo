import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib66Demo41Component } from './lib66-demo41.component';

describe('Lib66Demo41Component', () => {
  let component: Lib66Demo41Component;
  let fixture: ComponentFixture<Lib66Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib66Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib66Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
