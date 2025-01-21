import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib84Demo40Component } from './lib84-demo40.component';

describe('Lib84Demo40Component', () => {
  let component: Lib84Demo40Component;
  let fixture: ComponentFixture<Lib84Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib84Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib84Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
