import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib23Demo49Component } from './lib23-demo49.component';

describe('Lib23Demo49Component', () => {
  let component: Lib23Demo49Component;
  let fixture: ComponentFixture<Lib23Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib23Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib23Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
