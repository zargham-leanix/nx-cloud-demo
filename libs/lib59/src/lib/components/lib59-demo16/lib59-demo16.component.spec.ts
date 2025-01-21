import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib59Demo16Component } from './lib59-demo16.component';

describe('Lib59Demo16Component', () => {
  let component: Lib59Demo16Component;
  let fixture: ComponentFixture<Lib59Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib59Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib59Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
