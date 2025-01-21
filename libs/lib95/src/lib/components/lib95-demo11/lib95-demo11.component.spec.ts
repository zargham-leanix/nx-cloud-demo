import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib95Demo11Component } from './lib95-demo11.component';

describe('Lib95Demo11Component', () => {
  let component: Lib95Demo11Component;
  let fixture: ComponentFixture<Lib95Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib95Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib95Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
