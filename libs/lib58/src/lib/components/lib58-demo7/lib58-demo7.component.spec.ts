import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib58Demo7Component } from './lib58-demo7.component';

describe('Lib58Demo7Component', () => {
  let component: Lib58Demo7Component;
  let fixture: ComponentFixture<Lib58Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib58Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib58Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
