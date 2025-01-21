import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib95Demo39Component } from './lib95-demo39.component';

describe('Lib95Demo39Component', () => {
  let component: Lib95Demo39Component;
  let fixture: ComponentFixture<Lib95Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib95Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib95Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
