import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib73Demo32Component } from './lib73-demo32.component';

describe('Lib73Demo32Component', () => {
  let component: Lib73Demo32Component;
  let fixture: ComponentFixture<Lib73Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib73Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib73Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
