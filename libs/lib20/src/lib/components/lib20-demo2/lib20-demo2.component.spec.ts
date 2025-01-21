import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib20Demo2Component } from './lib20-demo2.component';

describe('Lib20Demo2Component', () => {
  let component: Lib20Demo2Component;
  let fixture: ComponentFixture<Lib20Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib20Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib20Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
