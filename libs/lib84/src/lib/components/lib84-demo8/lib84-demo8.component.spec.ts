import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib84Demo8Component } from './lib84-demo8.component';

describe('Lib84Demo8Component', () => {
  let component: Lib84Demo8Component;
  let fixture: ComponentFixture<Lib84Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib84Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib84Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
