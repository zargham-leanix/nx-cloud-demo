import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib72Demo16Component } from './lib72-demo16.component';

describe('Lib72Demo16Component', () => {
  let component: Lib72Demo16Component;
  let fixture: ComponentFixture<Lib72Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib72Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib72Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
