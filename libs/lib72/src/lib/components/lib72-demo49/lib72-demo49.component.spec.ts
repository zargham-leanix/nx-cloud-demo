import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib72Demo49Component } from './lib72-demo49.component';

describe('Lib72Demo49Component', () => {
  let component: Lib72Demo49Component;
  let fixture: ComponentFixture<Lib72Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib72Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib72Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
