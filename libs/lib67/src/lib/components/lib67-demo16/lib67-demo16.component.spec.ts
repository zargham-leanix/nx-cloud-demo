import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib67Demo16Component } from './lib67-demo16.component';

describe('Lib67Demo16Component', () => {
  let component: Lib67Demo16Component;
  let fixture: ComponentFixture<Lib67Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib67Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib67Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
