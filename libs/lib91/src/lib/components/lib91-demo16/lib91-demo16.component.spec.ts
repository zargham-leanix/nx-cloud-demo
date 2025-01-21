import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib91Demo16Component } from './lib91-demo16.component';

describe('Lib91Demo16Component', () => {
  let component: Lib91Demo16Component;
  let fixture: ComponentFixture<Lib91Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib91Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib91Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
