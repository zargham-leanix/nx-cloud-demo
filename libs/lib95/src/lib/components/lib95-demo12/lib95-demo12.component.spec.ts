import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib95Demo12Component } from './lib95-demo12.component';

describe('Lib95Demo12Component', () => {
  let component: Lib95Demo12Component;
  let fixture: ComponentFixture<Lib95Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib95Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib95Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
