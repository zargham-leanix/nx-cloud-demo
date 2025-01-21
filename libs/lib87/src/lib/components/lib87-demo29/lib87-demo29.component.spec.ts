import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib87Demo29Component } from './lib87-demo29.component';

describe('Lib87Demo29Component', () => {
  let component: Lib87Demo29Component;
  let fixture: ComponentFixture<Lib87Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib87Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib87Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
