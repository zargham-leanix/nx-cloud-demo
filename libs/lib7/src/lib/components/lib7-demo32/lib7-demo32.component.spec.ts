import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib7Demo32Component } from './lib7-demo32.component';

describe('Lib7Demo32Component', () => {
  let component: Lib7Demo32Component;
  let fixture: ComponentFixture<Lib7Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib7Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib7Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
