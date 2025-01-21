import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib99Demo16Component } from './lib99-demo16.component';

describe('Lib99Demo16Component', () => {
  let component: Lib99Demo16Component;
  let fixture: ComponentFixture<Lib99Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib99Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib99Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
