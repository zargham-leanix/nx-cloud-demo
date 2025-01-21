import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib46Demo16Component } from './lib46-demo16.component';

describe('Lib46Demo16Component', () => {
  let component: Lib46Demo16Component;
  let fixture: ComponentFixture<Lib46Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib46Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib46Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
