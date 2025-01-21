import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib38Demo6Component } from './lib38-demo6.component';

describe('Lib38Demo6Component', () => {
  let component: Lib38Demo6Component;
  let fixture: ComponentFixture<Lib38Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib38Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib38Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
