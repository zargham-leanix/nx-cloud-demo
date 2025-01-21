import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib41Demo16Component } from './lib41-demo16.component';

describe('Lib41Demo16Component', () => {
  let component: Lib41Demo16Component;
  let fixture: ComponentFixture<Lib41Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib41Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib41Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
