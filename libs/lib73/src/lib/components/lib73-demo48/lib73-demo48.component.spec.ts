import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib73Demo48Component } from './lib73-demo48.component';

describe('Lib73Demo48Component', () => {
  let component: Lib73Demo48Component;
  let fixture: ComponentFixture<Lib73Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib73Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib73Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
