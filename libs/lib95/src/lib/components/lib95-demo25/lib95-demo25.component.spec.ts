import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib95Demo25Component } from './lib95-demo25.component';

describe('Lib95Demo25Component', () => {
  let component: Lib95Demo25Component;
  let fixture: ComponentFixture<Lib95Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib95Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib95Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
