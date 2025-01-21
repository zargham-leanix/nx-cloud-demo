import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib66Demo25Component } from './lib66-demo25.component';

describe('Lib66Demo25Component', () => {
  let component: Lib66Demo25Component;
  let fixture: ComponentFixture<Lib66Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib66Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib66Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
