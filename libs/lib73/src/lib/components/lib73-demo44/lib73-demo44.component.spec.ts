import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib73Demo44Component } from './lib73-demo44.component';

describe('Lib73Demo44Component', () => {
  let component: Lib73Demo44Component;
  let fixture: ComponentFixture<Lib73Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib73Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib73Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
