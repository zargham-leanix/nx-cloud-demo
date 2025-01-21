import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib20Demo6Component } from './lib20-demo6.component';

describe('Lib20Demo6Component', () => {
  let component: Lib20Demo6Component;
  let fixture: ComponentFixture<Lib20Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib20Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib20Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
