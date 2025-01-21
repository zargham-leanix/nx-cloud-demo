import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib95Demo15Component } from './lib95-demo15.component';

describe('Lib95Demo15Component', () => {
  let component: Lib95Demo15Component;
  let fixture: ComponentFixture<Lib95Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib95Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib95Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
