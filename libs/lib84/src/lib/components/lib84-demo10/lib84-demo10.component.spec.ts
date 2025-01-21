import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib84Demo10Component } from './lib84-demo10.component';

describe('Lib84Demo10Component', () => {
  let component: Lib84Demo10Component;
  let fixture: ComponentFixture<Lib84Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib84Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib84Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
