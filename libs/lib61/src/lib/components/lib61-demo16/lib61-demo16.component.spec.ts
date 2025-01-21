import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib61Demo16Component } from './lib61-demo16.component';

describe('Lib61Demo16Component', () => {
  let component: Lib61Demo16Component;
  let fixture: ComponentFixture<Lib61Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib61Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib61Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
