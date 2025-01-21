import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib29Demo7Component } from './lib29-demo7.component';

describe('Lib29Demo7Component', () => {
  let component: Lib29Demo7Component;
  let fixture: ComponentFixture<Lib29Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib29Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib29Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
