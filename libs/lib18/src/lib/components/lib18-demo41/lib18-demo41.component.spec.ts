import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib18Demo41Component } from './lib18-demo41.component';

describe('Lib18Demo41Component', () => {
  let component: Lib18Demo41Component;
  let fixture: ComponentFixture<Lib18Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib18Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib18Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
