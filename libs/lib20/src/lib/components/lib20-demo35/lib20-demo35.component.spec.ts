import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib20Demo35Component } from './lib20-demo35.component';

describe('Lib20Demo35Component', () => {
  let component: Lib20Demo35Component;
  let fixture: ComponentFixture<Lib20Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib20Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib20Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
