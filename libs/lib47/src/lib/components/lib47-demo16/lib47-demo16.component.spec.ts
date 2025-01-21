import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib47Demo16Component } from './lib47-demo16.component';

describe('Lib47Demo16Component', () => {
  let component: Lib47Demo16Component;
  let fixture: ComponentFixture<Lib47Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib47Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib47Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
