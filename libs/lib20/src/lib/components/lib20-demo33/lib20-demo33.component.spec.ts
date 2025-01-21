import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib20Demo33Component } from './lib20-demo33.component';

describe('Lib20Demo33Component', () => {
  let component: Lib20Demo33Component;
  let fixture: ComponentFixture<Lib20Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib20Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib20Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
