import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib38Demo45Component } from './lib38-demo45.component';

describe('Lib38Demo45Component', () => {
  let component: Lib38Demo45Component;
  let fixture: ComponentFixture<Lib38Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib38Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib38Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
