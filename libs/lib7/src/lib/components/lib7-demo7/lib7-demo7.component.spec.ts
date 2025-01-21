import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib7Demo7Component } from './lib7-demo7.component';

describe('Lib7Demo7Component', () => {
  let component: Lib7Demo7Component;
  let fixture: ComponentFixture<Lib7Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib7Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib7Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
