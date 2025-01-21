import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib27Demo49Component } from './lib27-demo49.component';

describe('Lib27Demo49Component', () => {
  let component: Lib27Demo49Component;
  let fixture: ComponentFixture<Lib27Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib27Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib27Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
