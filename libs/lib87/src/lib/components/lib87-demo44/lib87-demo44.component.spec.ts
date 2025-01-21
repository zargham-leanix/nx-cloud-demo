import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib87Demo44Component } from './lib87-demo44.component';

describe('Lib87Demo44Component', () => {
  let component: Lib87Demo44Component;
  let fixture: ComponentFixture<Lib87Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib87Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib87Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
