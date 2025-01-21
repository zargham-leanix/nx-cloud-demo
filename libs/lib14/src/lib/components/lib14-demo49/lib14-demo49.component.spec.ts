import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib14Demo49Component } from './lib14-demo49.component';

describe('Lib14Demo49Component', () => {
  let component: Lib14Demo49Component;
  let fixture: ComponentFixture<Lib14Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib14Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib14Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
