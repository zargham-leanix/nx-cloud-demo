import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib99Demo32Component } from './lib99-demo32.component';

describe('Lib99Demo32Component', () => {
  let component: Lib99Demo32Component;
  let fixture: ComponentFixture<Lib99Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib99Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib99Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
