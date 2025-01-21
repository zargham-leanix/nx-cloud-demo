import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib33Demo16Component } from './lib33-demo16.component';

describe('Lib33Demo16Component', () => {
  let component: Lib33Demo16Component;
  let fixture: ComponentFixture<Lib33Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib33Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib33Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
