import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib72Demo7Component } from './lib72-demo7.component';

describe('Lib72Demo7Component', () => {
  let component: Lib72Demo7Component;
  let fixture: ComponentFixture<Lib72Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib72Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib72Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
