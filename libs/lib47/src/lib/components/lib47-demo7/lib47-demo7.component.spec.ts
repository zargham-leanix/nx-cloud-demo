import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib47Demo7Component } from './lib47-demo7.component';

describe('Lib47Demo7Component', () => {
  let component: Lib47Demo7Component;
  let fixture: ComponentFixture<Lib47Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib47Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib47Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
