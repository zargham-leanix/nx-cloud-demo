import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib18Demo48Component } from './lib18-demo48.component';

describe('Lib18Demo48Component', () => {
  let component: Lib18Demo48Component;
  let fixture: ComponentFixture<Lib18Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib18Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib18Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
