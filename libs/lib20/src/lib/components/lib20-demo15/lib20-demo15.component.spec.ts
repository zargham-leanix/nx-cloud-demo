import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib20Demo15Component } from './lib20-demo15.component';

describe('Lib20Demo15Component', () => {
  let component: Lib20Demo15Component;
  let fixture: ComponentFixture<Lib20Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib20Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib20Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
