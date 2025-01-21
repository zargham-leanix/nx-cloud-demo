import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib71Demo16Component } from './lib71-demo16.component';

describe('Lib71Demo16Component', () => {
  let component: Lib71Demo16Component;
  let fixture: ComponentFixture<Lib71Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib71Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib71Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
