import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib7Demo48Component } from './lib7-demo48.component';

describe('Lib7Demo48Component', () => {
  let component: Lib7Demo48Component;
  let fixture: ComponentFixture<Lib7Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib7Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib7Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
