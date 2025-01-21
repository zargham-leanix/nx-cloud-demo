import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib99Demo33Component } from './lib99-demo33.component';

describe('Lib99Demo33Component', () => {
  let component: Lib99Demo33Component;
  let fixture: ComponentFixture<Lib99Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib99Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib99Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
