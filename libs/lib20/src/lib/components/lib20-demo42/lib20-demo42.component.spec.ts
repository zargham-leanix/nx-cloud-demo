import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib20Demo42Component } from './lib20-demo42.component';

describe('Lib20Demo42Component', () => {
  let component: Lib20Demo42Component;
  let fixture: ComponentFixture<Lib20Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib20Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib20Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
