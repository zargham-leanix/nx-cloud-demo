import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib45Demo49Component } from './lib45-demo49.component';

describe('Lib45Demo49Component', () => {
  let component: Lib45Demo49Component;
  let fixture: ComponentFixture<Lib45Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib45Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib45Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
