import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib30Demo7Component } from './lib30-demo7.component';

describe('Lib30Demo7Component', () => {
  let component: Lib30Demo7Component;
  let fixture: ComponentFixture<Lib30Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib30Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib30Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
