import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib81Demo16Component } from './lib81-demo16.component';

describe('Lib81Demo16Component', () => {
  let component: Lib81Demo16Component;
  let fixture: ComponentFixture<Lib81Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib81Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib81Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
