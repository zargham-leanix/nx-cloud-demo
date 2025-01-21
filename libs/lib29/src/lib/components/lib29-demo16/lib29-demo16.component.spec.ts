import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib29Demo16Component } from './lib29-demo16.component';

describe('Lib29Demo16Component', () => {
  let component: Lib29Demo16Component;
  let fixture: ComponentFixture<Lib29Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib29Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib29Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
