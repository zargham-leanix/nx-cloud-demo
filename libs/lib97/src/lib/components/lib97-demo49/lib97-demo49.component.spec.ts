import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib97Demo49Component } from './lib97-demo49.component';

describe('Lib97Demo49Component', () => {
  let component: Lib97Demo49Component;
  let fixture: ComponentFixture<Lib97Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib97Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib97Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
