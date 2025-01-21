import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib41Demo40Component } from './lib41-demo40.component';

describe('Lib41Demo40Component', () => {
  let component: Lib41Demo40Component;
  let fixture: ComponentFixture<Lib41Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib41Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib41Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
