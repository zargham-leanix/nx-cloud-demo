import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib38Demo43Component } from './lib38-demo43.component';

describe('Lib38Demo43Component', () => {
  let component: Lib38Demo43Component;
  let fixture: ComponentFixture<Lib38Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib38Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib38Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
