import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib28Demo16Component } from './lib28-demo16.component';

describe('Lib28Demo16Component', () => {
  let component: Lib28Demo16Component;
  let fixture: ComponentFixture<Lib28Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib28Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib28Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
