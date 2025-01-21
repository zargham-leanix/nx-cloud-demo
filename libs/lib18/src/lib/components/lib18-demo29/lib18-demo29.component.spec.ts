import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib18Demo29Component } from './lib18-demo29.component';

describe('Lib18Demo29Component', () => {
  let component: Lib18Demo29Component;
  let fixture: ComponentFixture<Lib18Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib18Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib18Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
