import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib41Demo7Component } from './lib41-demo7.component';

describe('Lib41Demo7Component', () => {
  let component: Lib41Demo7Component;
  let fixture: ComponentFixture<Lib41Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib41Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib41Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
