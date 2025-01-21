import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib91Demo49Component } from './lib91-demo49.component';

describe('Lib91Demo49Component', () => {
  let component: Lib91Demo49Component;
  let fixture: ComponentFixture<Lib91Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib91Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib91Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
