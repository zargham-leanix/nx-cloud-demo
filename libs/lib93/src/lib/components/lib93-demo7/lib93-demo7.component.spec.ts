import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib93Demo7Component } from './lib93-demo7.component';

describe('Lib93Demo7Component', () => {
  let component: Lib93Demo7Component;
  let fixture: ComponentFixture<Lib93Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib93Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib93Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
