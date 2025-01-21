import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib12Demo16Component } from './lib12-demo16.component';

describe('Lib12Demo16Component', () => {
  let component: Lib12Demo16Component;
  let fixture: ComponentFixture<Lib12Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib12Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib12Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
