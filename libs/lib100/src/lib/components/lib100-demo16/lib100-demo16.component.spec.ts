import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib100Demo16Component } from './lib100-demo16.component';

describe('Lib100Demo16Component', () => {
  let component: Lib100Demo16Component;
  let fixture: ComponentFixture<Lib100Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib100Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib100Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
