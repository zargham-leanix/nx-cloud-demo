import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib95Demo7Component } from './lib95-demo7.component';

describe('Lib95Demo7Component', () => {
  let component: Lib95Demo7Component;
  let fixture: ComponentFixture<Lib95Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib95Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib95Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
