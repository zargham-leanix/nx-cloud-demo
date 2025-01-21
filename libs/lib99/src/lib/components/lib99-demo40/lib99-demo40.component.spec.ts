import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib99Demo40Component } from './lib99-demo40.component';

describe('Lib99Demo40Component', () => {
  let component: Lib99Demo40Component;
  let fixture: ComponentFixture<Lib99Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib99Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib99Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
