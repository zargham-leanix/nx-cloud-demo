import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib66Demo3Component } from './lib66-demo3.component';

describe('Lib66Demo3Component', () => {
  let component: Lib66Demo3Component;
  let fixture: ComponentFixture<Lib66Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib66Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib66Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
