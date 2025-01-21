import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib75Demo7Component } from './lib75-demo7.component';

describe('Lib75Demo7Component', () => {
  let component: Lib75Demo7Component;
  let fixture: ComponentFixture<Lib75Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib75Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib75Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
