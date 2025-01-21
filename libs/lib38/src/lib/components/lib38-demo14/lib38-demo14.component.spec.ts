import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib38Demo14Component } from './lib38-demo14.component';

describe('Lib38Demo14Component', () => {
  let component: Lib38Demo14Component;
  let fixture: ComponentFixture<Lib38Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib38Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib38Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
