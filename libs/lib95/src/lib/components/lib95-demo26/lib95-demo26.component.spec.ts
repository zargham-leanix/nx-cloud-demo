import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib95Demo26Component } from './lib95-demo26.component';

describe('Lib95Demo26Component', () => {
  let component: Lib95Demo26Component;
  let fixture: ComponentFixture<Lib95Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib95Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib95Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
