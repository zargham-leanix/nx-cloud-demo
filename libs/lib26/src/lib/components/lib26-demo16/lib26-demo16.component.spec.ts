import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib26Demo16Component } from './lib26-demo16.component';

describe('Lib26Demo16Component', () => {
  let component: Lib26Demo16Component;
  let fixture: ComponentFixture<Lib26Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib26Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib26Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
