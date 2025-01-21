import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib38Demo49Component } from './lib38-demo49.component';

describe('Lib38Demo49Component', () => {
  let component: Lib38Demo49Component;
  let fixture: ComponentFixture<Lib38Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib38Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib38Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
