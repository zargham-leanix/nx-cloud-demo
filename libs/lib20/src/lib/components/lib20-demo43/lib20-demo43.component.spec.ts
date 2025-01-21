import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib20Demo43Component } from './lib20-demo43.component';

describe('Lib20Demo43Component', () => {
  let component: Lib20Demo43Component;
  let fixture: ComponentFixture<Lib20Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib20Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib20Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
