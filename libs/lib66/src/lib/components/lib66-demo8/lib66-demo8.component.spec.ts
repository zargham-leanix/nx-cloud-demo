import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib66Demo8Component } from './lib66-demo8.component';

describe('Lib66Demo8Component', () => {
  let component: Lib66Demo8Component;
  let fixture: ComponentFixture<Lib66Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib66Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib66Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
