import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib99Demo11Component } from './lib99-demo11.component';

describe('Lib99Demo11Component', () => {
  let component: Lib99Demo11Component;
  let fixture: ComponentFixture<Lib99Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib99Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib99Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
