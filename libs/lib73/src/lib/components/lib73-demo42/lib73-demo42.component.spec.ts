import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib73Demo42Component } from './lib73-demo42.component';

describe('Lib73Demo42Component', () => {
  let component: Lib73Demo42Component;
  let fixture: ComponentFixture<Lib73Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib73Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib73Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
