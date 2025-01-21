import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib75Demo40Component } from './lib75-demo40.component';

describe('Lib75Demo40Component', () => {
  let component: Lib75Demo40Component;
  let fixture: ComponentFixture<Lib75Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib75Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib75Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
