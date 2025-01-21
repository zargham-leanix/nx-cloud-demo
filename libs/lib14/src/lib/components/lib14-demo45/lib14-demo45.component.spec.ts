import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib14Demo45Component } from './lib14-demo45.component';

describe('Lib14Demo45Component', () => {
  let component: Lib14Demo45Component;
  let fixture: ComponentFixture<Lib14Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib14Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib14Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
