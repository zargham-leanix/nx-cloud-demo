import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib33Demo7Component } from './lib33-demo7.component';

describe('Lib33Demo7Component', () => {
  let component: Lib33Demo7Component;
  let fixture: ComponentFixture<Lib33Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib33Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib33Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
