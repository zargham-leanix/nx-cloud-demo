import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib10Demo35Component } from './lib10-demo35.component';

describe('Lib10Demo35Component', () => {
  let component: Lib10Demo35Component;
  let fixture: ComponentFixture<Lib10Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib10Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib10Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
