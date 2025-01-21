import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib7Demo6Component } from './lib7-demo6.component';

describe('Lib7Demo6Component', () => {
  let component: Lib7Demo6Component;
  let fixture: ComponentFixture<Lib7Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib7Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib7Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
