import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib23Demo45Component } from './lib23-demo45.component';

describe('Lib23Demo45Component', () => {
  let component: Lib23Demo45Component;
  let fixture: ComponentFixture<Lib23Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib23Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib23Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
