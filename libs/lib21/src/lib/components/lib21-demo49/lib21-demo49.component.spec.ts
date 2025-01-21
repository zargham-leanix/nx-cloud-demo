import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib21Demo49Component } from './lib21-demo49.component';

describe('Lib21Demo49Component', () => {
  let component: Lib21Demo49Component;
  let fixture: ComponentFixture<Lib21Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib21Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib21Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
