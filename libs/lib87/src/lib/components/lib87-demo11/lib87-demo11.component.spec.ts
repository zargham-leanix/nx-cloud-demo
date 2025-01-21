import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib87Demo11Component } from './lib87-demo11.component';

describe('Lib87Demo11Component', () => {
  let component: Lib87Demo11Component;
  let fixture: ComponentFixture<Lib87Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib87Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib87Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
