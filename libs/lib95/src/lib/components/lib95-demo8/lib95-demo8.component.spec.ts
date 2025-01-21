import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib95Demo8Component } from './lib95-demo8.component';

describe('Lib95Demo8Component', () => {
  let component: Lib95Demo8Component;
  let fixture: ComponentFixture<Lib95Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib95Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib95Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
