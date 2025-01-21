import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib76Demo49Component } from './lib76-demo49.component';

describe('Lib76Demo49Component', () => {
  let component: Lib76Demo49Component;
  let fixture: ComponentFixture<Lib76Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib76Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib76Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
