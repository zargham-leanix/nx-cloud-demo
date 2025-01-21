import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib4Demo16Component } from './lib4-demo16.component';

describe('Lib4Demo16Component', () => {
  let component: Lib4Demo16Component;
  let fixture: ComponentFixture<Lib4Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib4Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib4Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
