import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib66Demo39Component } from './lib66-demo39.component';

describe('Lib66Demo39Component', () => {
  let component: Lib66Demo39Component;
  let fixture: ComponentFixture<Lib66Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib66Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib66Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
