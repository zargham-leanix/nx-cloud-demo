import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib84Demo7Component } from './lib84-demo7.component';

describe('Lib84Demo7Component', () => {
  let component: Lib84Demo7Component;
  let fixture: ComponentFixture<Lib84Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib84Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib84Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
