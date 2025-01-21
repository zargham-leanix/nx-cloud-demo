import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib66Demo14Component } from './lib66-demo14.component';

describe('Lib66Demo14Component', () => {
  let component: Lib66Demo14Component;
  let fixture: ComponentFixture<Lib66Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib66Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib66Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
