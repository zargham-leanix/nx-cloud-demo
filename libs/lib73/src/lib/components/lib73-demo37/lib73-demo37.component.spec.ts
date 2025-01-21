import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib73Demo37Component } from './lib73-demo37.component';

describe('Lib73Demo37Component', () => {
  let component: Lib73Demo37Component;
  let fixture: ComponentFixture<Lib73Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib73Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib73Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
