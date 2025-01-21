import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib12Demo49Component } from './lib12-demo49.component';

describe('Lib12Demo49Component', () => {
  let component: Lib12Demo49Component;
  let fixture: ComponentFixture<Lib12Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib12Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib12Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
