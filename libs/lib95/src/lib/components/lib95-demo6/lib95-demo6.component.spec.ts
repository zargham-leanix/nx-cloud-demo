import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib95Demo6Component } from './lib95-demo6.component';

describe('Lib95Demo6Component', () => {
  let component: Lib95Demo6Component;
  let fixture: ComponentFixture<Lib95Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib95Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib95Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
