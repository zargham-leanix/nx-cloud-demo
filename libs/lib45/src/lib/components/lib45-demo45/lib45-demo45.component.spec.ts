import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib45Demo45Component } from './lib45-demo45.component';

describe('Lib45Demo45Component', () => {
  let component: Lib45Demo45Component;
  let fixture: ComponentFixture<Lib45Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib45Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib45Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
