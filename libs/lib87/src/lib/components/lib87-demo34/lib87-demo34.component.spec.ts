import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib87Demo34Component } from './lib87-demo34.component';

describe('Lib87Demo34Component', () => {
  let component: Lib87Demo34Component;
  let fixture: ComponentFixture<Lib87Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib87Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib87Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
