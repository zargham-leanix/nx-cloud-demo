import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib87Demo12Component } from './lib87-demo12.component';

describe('Lib87Demo12Component', () => {
  let component: Lib87Demo12Component;
  let fixture: ComponentFixture<Lib87Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib87Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib87Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
