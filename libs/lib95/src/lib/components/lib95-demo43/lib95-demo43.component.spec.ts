import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib95Demo43Component } from './lib95-demo43.component';

describe('Lib95Demo43Component', () => {
  let component: Lib95Demo43Component;
  let fixture: ComponentFixture<Lib95Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib95Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib95Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
