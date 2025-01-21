import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib87Demo46Component } from './lib87-demo46.component';

describe('Lib87Demo46Component', () => {
  let component: Lib87Demo46Component;
  let fixture: ComponentFixture<Lib87Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib87Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib87Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
