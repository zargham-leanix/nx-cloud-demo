import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib20Demo48Component } from './lib20-demo48.component';

describe('Lib20Demo48Component', () => {
  let component: Lib20Demo48Component;
  let fixture: ComponentFixture<Lib20Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib20Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib20Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
