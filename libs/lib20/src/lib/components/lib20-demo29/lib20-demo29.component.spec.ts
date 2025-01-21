import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib20Demo29Component } from './lib20-demo29.component';

describe('Lib20Demo29Component', () => {
  let component: Lib20Demo29Component;
  let fixture: ComponentFixture<Lib20Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib20Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib20Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
