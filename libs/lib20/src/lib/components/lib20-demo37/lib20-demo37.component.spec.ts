import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib20Demo37Component } from './lib20-demo37.component';

describe('Lib20Demo37Component', () => {
  let component: Lib20Demo37Component;
  let fixture: ComponentFixture<Lib20Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib20Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib20Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
