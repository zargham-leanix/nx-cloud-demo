import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib20Demo34Component } from './lib20-demo34.component';

describe('Lib20Demo34Component', () => {
  let component: Lib20Demo34Component;
  let fixture: ComponentFixture<Lib20Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib20Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib20Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
