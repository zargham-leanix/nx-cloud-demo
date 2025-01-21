import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib51Demo49Component } from './lib51-demo49.component';

describe('Lib51Demo49Component', () => {
  let component: Lib51Demo49Component;
  let fixture: ComponentFixture<Lib51Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib51Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib51Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
