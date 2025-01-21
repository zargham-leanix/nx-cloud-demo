import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib7Demo33Component } from './lib7-demo33.component';

describe('Lib7Demo33Component', () => {
  let component: Lib7Demo33Component;
  let fixture: ComponentFixture<Lib7Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib7Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib7Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
