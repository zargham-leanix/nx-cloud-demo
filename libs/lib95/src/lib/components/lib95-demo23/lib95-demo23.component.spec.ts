import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib95Demo23Component } from './lib95-demo23.component';

describe('Lib95Demo23Component', () => {
  let component: Lib95Demo23Component;
  let fixture: ComponentFixture<Lib95Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib95Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib95Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
