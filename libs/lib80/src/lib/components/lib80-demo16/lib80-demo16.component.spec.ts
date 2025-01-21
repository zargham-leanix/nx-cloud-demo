import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib80Demo16Component } from './lib80-demo16.component';

describe('Lib80Demo16Component', () => {
  let component: Lib80Demo16Component;
  let fixture: ComponentFixture<Lib80Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib80Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib80Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
