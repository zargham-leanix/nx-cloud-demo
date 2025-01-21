import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib99Demo2Component } from './lib99-demo2.component';

describe('Lib99Demo2Component', () => {
  let component: Lib99Demo2Component;
  let fixture: ComponentFixture<Lib99Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib99Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib99Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
