import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib88Demo7Component } from './lib88-demo7.component';

describe('Lib88Demo7Component', () => {
  let component: Lib88Demo7Component;
  let fixture: ComponentFixture<Lib88Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib88Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib88Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
