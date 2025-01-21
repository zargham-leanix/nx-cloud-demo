import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib5Demo49Component } from './lib5-demo49.component';

describe('Lib5Demo49Component', () => {
  let component: Lib5Demo49Component;
  let fixture: ComponentFixture<Lib5Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib5Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib5Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
