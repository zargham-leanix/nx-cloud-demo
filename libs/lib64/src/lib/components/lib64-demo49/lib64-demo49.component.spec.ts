import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib64Demo49Component } from './lib64-demo49.component';

describe('Lib64Demo49Component', () => {
  let component: Lib64Demo49Component;
  let fixture: ComponentFixture<Lib64Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib64Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib64Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
