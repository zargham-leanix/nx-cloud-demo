import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib54Demo49Component } from './lib54-demo49.component';

describe('Lib54Demo49Component', () => {
  let component: Lib54Demo49Component;
  let fixture: ComponentFixture<Lib54Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib54Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib54Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
