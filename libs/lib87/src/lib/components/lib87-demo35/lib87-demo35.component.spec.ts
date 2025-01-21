import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib87Demo35Component } from './lib87-demo35.component';

describe('Lib87Demo35Component', () => {
  let component: Lib87Demo35Component;
  let fixture: ComponentFixture<Lib87Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib87Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib87Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
