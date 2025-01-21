import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib8Demo16Component } from './lib8-demo16.component';

describe('Lib8Demo16Component', () => {
  let component: Lib8Demo16Component;
  let fixture: ComponentFixture<Lib8Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib8Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib8Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
