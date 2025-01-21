import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib87Demo6Component } from './lib87-demo6.component';

describe('Lib87Demo6Component', () => {
  let component: Lib87Demo6Component;
  let fixture: ComponentFixture<Lib87Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib87Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib87Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
