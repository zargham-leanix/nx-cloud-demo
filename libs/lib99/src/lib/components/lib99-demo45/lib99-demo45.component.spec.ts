import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib99Demo45Component } from './lib99-demo45.component';

describe('Lib99Demo45Component', () => {
  let component: Lib99Demo45Component;
  let fixture: ComponentFixture<Lib99Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib99Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib99Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
