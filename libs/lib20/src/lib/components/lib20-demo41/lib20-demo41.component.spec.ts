import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib20Demo41Component } from './lib20-demo41.component';

describe('Lib20Demo41Component', () => {
  let component: Lib20Demo41Component;
  let fixture: ComponentFixture<Lib20Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib20Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib20Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
