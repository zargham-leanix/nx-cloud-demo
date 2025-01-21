import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib7Demo49Component } from './lib7-demo49.component';

describe('Lib7Demo49Component', () => {
  let component: Lib7Demo49Component;
  let fixture: ComponentFixture<Lib7Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib7Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib7Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
