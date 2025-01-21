import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib63Demo16Component } from './lib63-demo16.component';

describe('Lib63Demo16Component', () => {
  let component: Lib63Demo16Component;
  let fixture: ComponentFixture<Lib63Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib63Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib63Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
