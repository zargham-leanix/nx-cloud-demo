import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib80Demo7Component } from './lib80-demo7.component';

describe('Lib80Demo7Component', () => {
  let component: Lib80Demo7Component;
  let fixture: ComponentFixture<Lib80Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib80Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib80Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
