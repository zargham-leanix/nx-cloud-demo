import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib4Demo7Component } from './lib4-demo7.component';

describe('Lib4Demo7Component', () => {
  let component: Lib4Demo7Component;
  let fixture: ComponentFixture<Lib4Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib4Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib4Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
