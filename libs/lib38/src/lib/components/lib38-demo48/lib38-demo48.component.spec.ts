import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib38Demo48Component } from './lib38-demo48.component';

describe('Lib38Demo48Component', () => {
  let component: Lib38Demo48Component;
  let fixture: ComponentFixture<Lib38Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib38Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib38Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
