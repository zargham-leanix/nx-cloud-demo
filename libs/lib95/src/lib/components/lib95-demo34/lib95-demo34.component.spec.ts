import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib95Demo34Component } from './lib95-demo34.component';

describe('Lib95Demo34Component', () => {
  let component: Lib95Demo34Component;
  let fixture: ComponentFixture<Lib95Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib95Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib95Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
