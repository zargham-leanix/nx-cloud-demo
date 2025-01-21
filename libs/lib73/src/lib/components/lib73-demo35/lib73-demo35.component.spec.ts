import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib73Demo35Component } from './lib73-demo35.component';

describe('Lib73Demo35Component', () => {
  let component: Lib73Demo35Component;
  let fixture: ComponentFixture<Lib73Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib73Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib73Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
