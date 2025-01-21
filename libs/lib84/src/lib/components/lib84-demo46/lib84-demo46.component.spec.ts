import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib84Demo46Component } from './lib84-demo46.component';

describe('Lib84Demo46Component', () => {
  let component: Lib84Demo46Component;
  let fixture: ComponentFixture<Lib84Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib84Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib84Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
