import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib7Demo45Component } from './lib7-demo45.component';

describe('Lib7Demo45Component', () => {
  let component: Lib7Demo45Component;
  let fixture: ComponentFixture<Lib7Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib7Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib7Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
