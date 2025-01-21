import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib87Demo10Component } from './lib87-demo10.component';

describe('Lib87Demo10Component', () => {
  let component: Lib87Demo10Component;
  let fixture: ComponentFixture<Lib87Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib87Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib87Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
