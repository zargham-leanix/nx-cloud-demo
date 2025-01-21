import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib87Demo23Component } from './lib87-demo23.component';

describe('Lib87Demo23Component', () => {
  let component: Lib87Demo23Component;
  let fixture: ComponentFixture<Lib87Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib87Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib87Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
