import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib73Demo41Component } from './lib73-demo41.component';

describe('Lib73Demo41Component', () => {
  let component: Lib73Demo41Component;
  let fixture: ComponentFixture<Lib73Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib73Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib73Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
