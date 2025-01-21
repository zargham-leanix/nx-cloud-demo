import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib38Demo37Component } from './lib38-demo37.component';

describe('Lib38Demo37Component', () => {
  let component: Lib38Demo37Component;
  let fixture: ComponentFixture<Lib38Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib38Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib38Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
