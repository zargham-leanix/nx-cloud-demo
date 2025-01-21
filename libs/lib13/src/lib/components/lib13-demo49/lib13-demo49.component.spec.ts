import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib13Demo49Component } from './lib13-demo49.component';

describe('Lib13Demo49Component', () => {
  let component: Lib13Demo49Component;
  let fixture: ComponentFixture<Lib13Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib13Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib13Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
