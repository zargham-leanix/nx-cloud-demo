import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib99Demo24Component } from './lib99-demo24.component';

describe('Lib99Demo24Component', () => {
  let component: Lib99Demo24Component;
  let fixture: ComponentFixture<Lib99Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib99Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib99Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
