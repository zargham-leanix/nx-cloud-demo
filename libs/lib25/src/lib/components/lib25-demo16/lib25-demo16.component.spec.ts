import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib25Demo16Component } from './lib25-demo16.component';

describe('Lib25Demo16Component', () => {
  let component: Lib25Demo16Component;
  let fixture: ComponentFixture<Lib25Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib25Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib25Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
