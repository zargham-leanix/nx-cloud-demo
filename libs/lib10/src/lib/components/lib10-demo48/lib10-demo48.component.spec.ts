import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib10Demo48Component } from './lib10-demo48.component';

describe('Lib10Demo48Component', () => {
  let component: Lib10Demo48Component;
  let fixture: ComponentFixture<Lib10Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib10Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib10Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
