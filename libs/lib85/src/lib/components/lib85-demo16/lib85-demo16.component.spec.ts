import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib85Demo16Component } from './lib85-demo16.component';

describe('Lib85Demo16Component', () => {
  let component: Lib85Demo16Component;
  let fixture: ComponentFixture<Lib85Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib85Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib85Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
