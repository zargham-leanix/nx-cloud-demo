import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib84Demo16Component } from './lib84-demo16.component';

describe('Lib84Demo16Component', () => {
  let component: Lib84Demo16Component;
  let fixture: ComponentFixture<Lib84Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib84Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib84Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
