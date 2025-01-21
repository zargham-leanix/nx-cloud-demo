import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib47Demo40Component } from './lib47-demo40.component';

describe('Lib47Demo40Component', () => {
  let component: Lib47Demo40Component;
  let fixture: ComponentFixture<Lib47Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib47Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib47Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
