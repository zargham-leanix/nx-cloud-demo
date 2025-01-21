import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib84Demo12Component } from './lib84-demo12.component';

describe('Lib84Demo12Component', () => {
  let component: Lib84Demo12Component;
  let fixture: ComponentFixture<Lib84Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib84Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib84Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
