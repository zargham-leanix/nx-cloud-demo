import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib84Demo23Component } from './lib84-demo23.component';

describe('Lib84Demo23Component', () => {
  let component: Lib84Demo23Component;
  let fixture: ComponentFixture<Lib84Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib84Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib84Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
