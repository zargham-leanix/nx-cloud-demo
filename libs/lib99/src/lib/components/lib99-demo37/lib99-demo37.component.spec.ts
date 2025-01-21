import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib99Demo37Component } from './lib99-demo37.component';

describe('Lib99Demo37Component', () => {
  let component: Lib99Demo37Component;
  let fixture: ComponentFixture<Lib99Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib99Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib99Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
