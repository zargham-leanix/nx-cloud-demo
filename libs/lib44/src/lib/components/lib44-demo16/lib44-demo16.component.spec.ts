import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib44Demo16Component } from './lib44-demo16.component';

describe('Lib44Demo16Component', () => {
  let component: Lib44Demo16Component;
  let fixture: ComponentFixture<Lib44Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib44Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib44Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
