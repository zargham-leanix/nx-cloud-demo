import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib86Demo49Component } from './lib86-demo49.component';

describe('Lib86Demo49Component', () => {
  let component: Lib86Demo49Component;
  let fixture: ComponentFixture<Lib86Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib86Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib86Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
