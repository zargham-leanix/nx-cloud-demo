import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib7Demo38Component } from './lib7-demo38.component';

describe('Lib7Demo38Component', () => {
  let component: Lib7Demo38Component;
  let fixture: ComponentFixture<Lib7Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib7Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib7Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
