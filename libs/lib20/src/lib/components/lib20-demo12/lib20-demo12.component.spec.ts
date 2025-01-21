import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib20Demo12Component } from './lib20-demo12.component';

describe('Lib20Demo12Component', () => {
  let component: Lib20Demo12Component;
  let fixture: ComponentFixture<Lib20Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib20Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib20Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
