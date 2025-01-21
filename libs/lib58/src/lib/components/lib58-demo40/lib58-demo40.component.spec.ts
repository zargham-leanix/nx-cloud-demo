import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib58Demo40Component } from './lib58-demo40.component';

describe('Lib58Demo40Component', () => {
  let component: Lib58Demo40Component;
  let fixture: ComponentFixture<Lib58Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib58Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib58Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
